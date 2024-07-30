import React from 'react';

function Preview({ gradient }) {
  const previewStyle = {
    width: '100%',
    height: '300px',
    background: gradient,
  };

  return (
    <div className="preview" style={previewStyle}>
      <h2>Preview</h2>
    </div>
  );
}

export default Preview;
