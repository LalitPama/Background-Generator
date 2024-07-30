import React, { useState } from 'react';
import './App.css';
import GradientPicker from './components/GradientPicker';
import Preview from './components/Preview';
import CodePanel from './components/CodePanel';


function App() {
  
  const [colors, setColors] = useState(['#ff0000', '#0000ff']);
  const [gradientType, setGradientType] = useState('linear');
  const [angle, setAngle] = useState(90); // For linear gradients

  const handleColorChange = (index, color) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const handleAddColor = () => {
    setColors([...colors, '#ffffff']);
  };

  const handleRemoveColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleGradientTypeChange = (event) => {
    setGradientType(event.target.value);
  };

  const handleAngleChange = (event) => {
    setAngle(event.target.value);
  };

  const gradient = `${gradientType}-gradient(${gradientType === 'linear' ? `${angle}deg, ` : ''}${colors.join(', ')})`;

  return (
    
    <div className="App">
      <h1>Background Generator</h1>
      <div className="main-content">
        <div className="flex-container">
          <GradientPicker
            colors={colors}
            onColorChange={handleColorChange}
            onAddColor={handleAddColor}
            onRemoveColor={handleRemoveColor}
            gradientType={gradientType}
            onGradientTypeChange={handleGradientTypeChange}
            angle={angle}
            onAngleChange={handleAngleChange}
          />
          <Preview gradient={gradient} />
          <CodePanel gradient={gradient} />
        </div>
      </div>
    </div>
  );
}

export default App;
