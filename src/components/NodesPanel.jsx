import React from "react";

// Panel for the purose of adding new nodes
export default function NodesPanel({ onAddNode }) {
  return (
    <div style={{ paddding: "16px" }}>
      <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>Nodes Panel</h2>
      <button
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "6px 10px",
          border: "none",
          borderRadius: "4px",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={() => onAddNode("textNode")}
      >
        Add Text Node
      </button>
    </div>
  );
}
