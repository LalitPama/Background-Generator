import React from 'react';
import ColorPicker from './ColorPicker';

function GradientPicker({ colors, onColorChange, onAddColor, onRemoveColor, gradientType, onGradientTypeChange, angle, onAngleChange }) {
  return (
    <div className="gradient-picker">
      <h2>Select Colors</h2>
      <div className="color-stop-list">
        {colors.map((color, index) => (
          <div key={index} className="color-stop">
            <ColorPicker color={color} onChange={(color) => onColorChange(index, color)} />
            <button onClick={() => onRemoveColor(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="add-color-button" onClick={onAddColor}>Add Color</button>
      <h2>Select Gradient Type</h2>
      <select value={gradientType} onChange={onGradientTypeChange}>
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
        <option value="conic">Conic</option>
      </select>
      {gradientType === 'linear' && (
        <>
          <h2>Angle</h2>
          <input type="number" value={angle} onChange={onAngleChange} />
        </>
      )}
    </div>
  );
}

export default GradientPicker;
