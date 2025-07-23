import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";
import TextNode from "./TextNode";

const nodeTypes = {
  textNode: TextNode,
};

let id = 0;
const getId = () => `node_${id++}`;

function FlowBuilderComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => {
      const existingEdge = edges.find((e) => e.source === params.source);
      if (existingEdge) return;
      setEdges((eds) => addEdge(params, eds));
    },
    [edges, setEdges]
  );

  const onNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  const addNode = (type) => {
    const newNode = {
      id: getId(),
      type,
      data: { text: "New Message" },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleSave = () => {
    const sourceNodeIds = edges.map((e) => e.source);
    const danglingNodes = nodes.filter((n) => !sourceNodeIds.includes(n.id));
    if (danglingNodes.length > 1) {
      alert("Error: Multiple nodes without outgoing edges.");
      return;
    }
    console.log("Saving Flow...", { nodes, edges });
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ width: "20%", borderRight: "1px solid #ccc", padding: "10px" }}
      >
        {!selectedNode ? (
          <NodesPanel onAddNode={addNode} />
        ) : (
          <SettingsPanel
            node={selectedNode}
            onChangeText={(text) => {
              setNodes((nds) =>
                nds.map((n) =>
                  n.id === selectedNode.id
                    ? { ...n, data: { ...n.data, text } }
                    : n
                )
              );
              setSelectedNode((n) => ({ ...n, data: { ...n.data, text } }));
            }}
          />
        )}
      </div>
      <div style={{ flex: 1, height: "100%", position: "relative" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>
        <button
          onClick={handleSave}
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          Save Flow
        </button>
      </div>
    </div>
  );
}

export default function FlowBuilder() {
  return (
    <ReactFlowProvider>
      <FlowBuilderComponent />
    </ReactFlowProvider>
  );
}
