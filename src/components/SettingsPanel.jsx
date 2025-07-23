import React from "react";

// Panel to edit selected node text
export default function SettingsPanel({ node, onChangeText }) {
  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>Settings Panel</h2>
      <label style={{ display: "block", marginBottom: "4px" }}>
        Edit Text:
      </label>
      <input
        style={{
          width: "100%",
          padding: "6px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        value={node.data.text}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
}
