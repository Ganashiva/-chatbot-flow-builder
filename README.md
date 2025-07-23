# Chatbot Flow Builder

A visual drag-and-drop interface to build chatbot conversation flows using **React** and **React Flow**.

---

## Features

### 1. _Text Node_

- Currently supports only **Text Message** nodes.
- Multiple text nodes can be added in a single flow.
- Added via the **Nodes Panel**.

### 2. _Nodes Panel_

- Displays all available node types.
- Right now it only has `Text Node`.
- **Automatically hides** when a node is selected.

### 3. **Edge**

- Represents a directional connection between nodes.
- Created by dragging from the **bottom handle** (source) of one node to the **top handle** (target) of another.

### 4. _Source Handle_

- Located at the **bottom** of each node.
- Allows only **one outgoing connection**.

### 5. _Target Handle_

- Located at the **top** of each node.
- Accepts **multiple incoming connections**.

### 6. _Settings Panel_

- **Replaces the Nodes Panel** when a node is selected.
- Includes a **text input field** to update the selected node’s message.
- Automatically updates node data in real-time as you type.

### 7. _Save Button_

- Saves the current flow (logs it in the console or to a file in the future).
- If there are **multiple nodes** and **more than one node** has **no outgoing edge**, an error is shown on save:
  > "Error: More than one node has empty target handles."

---

## Running the App

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
