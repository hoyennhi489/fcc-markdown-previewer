import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

const defaultMarkdown = `# H1 Heading
## H2 Subheading
[FreeCodeCamp](https://www.freecodecamp.org)

\`inline code\`

\`\`\`javascript
// Code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Bold text**`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="editor-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div
        id="preview"
        className="preview-container"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown, { breaks: true }) }}
      ></div>
    </div>
  );
}

export default App;