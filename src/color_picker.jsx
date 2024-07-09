import React, { useState, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import stylesHeader from './color_picker.module.css';

const ColorPickerModal = ({ isOpen, color, onChange, onClose }) => {
  const colorPickerRef = useRef();

  return (
    isOpen && (
      <div className={stylesHeader.color_picker_modal} ref={colorPickerRef}>
        <HexColorPicker color={color} onChange={onChange} />
      </div>
    )
  );
};

const Color_picker = (props) => {

  const {initialColor, inputType, maxLength} = props;
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const [color, setColor] = useState(initialColor);
  const [searchColor, setSearchColor] = useState('');

  const toggleColorPicker = () => {
    setColorPickerOpen((prev) => !prev);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setSearchColor(newColor);
  };

  const handleSearchInputChange = (e) => {
    const inputColor = e.target.value;
  setSearchColor(inputColor);

  if (inputColor.length === 7) {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(inputColor)) {
      setColor(inputColor);
    } else {
      setColor('');
      setSearchColor('');
      // alert('Invalid Hex Color');
    }
  }
  };

  const handleSearchButtonClick = (e) => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(searchColor)) {
      setColor(searchColor);
    } else {
      alert('Invalid Hex Color');
    }
  };

  const closeColorPicker = () => {
    setColorPickerOpen(false);
  };

  return (
    <div className="App1">
      <div>
        <button onClick={toggleColorPicker} style={{ backgroundColor: color }}>
          {isColorPickerOpen ? ' ' : ' '}
        </button>

        <ColorPickerModal
          isOpen={isColorPickerOpen}
          color={color}
          onChange={handleColorChange}
          onClose={closeColorPicker}
        />

        <div className="value">
          {/* <div className="color-box" style={{ backgroundColor: color }}></div> */}
        </div>

        <div className="search-box">
          <input
            type={inputType}
            // placeholder="Enter Hex Color"
            defaultValue={searchColor}
            name={initialColor}
            maxLength={maxLength}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearchButtonClick}>Search Color</button>
        </div>
      </div>
    </div>
  );
};

export default Color_picker;
