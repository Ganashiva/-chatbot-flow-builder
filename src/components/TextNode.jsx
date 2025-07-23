import React from "react";
import { Handle, Position } from "reactflow";

// Custom TextNode component with source & target handles
export default function TextNode({ data }) {
  return (
    <div
      style={{
        padding: "8px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        width: "150px",
        textAlign: "center",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div>{data.text || "Text Node"}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
