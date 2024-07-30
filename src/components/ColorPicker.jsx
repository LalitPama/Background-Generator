import React from 'react';

function ColorPicker({ color, onChange }) {
  return (
    <input type="color" value={color} onChange={(e) => onChange(e.target.value)} />
  );
}

export default ColorPicker;
