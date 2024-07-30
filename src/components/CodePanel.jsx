import React from 'react';

function CodePanel({ gradient }) {
  const cssCode = `background: ${gradient};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      alert('CSS code copied to clipboard!');
    });
  };

  return (
    <div className="code-panel">
      <h2>CSS Code</h2>
      <pre>{cssCode}</pre>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
}

export default CodePanel;
