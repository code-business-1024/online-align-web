import { random } from 'lodash';
import React, { createContext, useContext, useState } from 'react';
import colorData from './color-data.json';

const ColorContext = createContext([]);

export const useColors = () => useContext(ColorContext);

const ColorProvider: React.FC = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) =>
    setColors([
      ...colors,
      {
        id: random() + '',
        rating: 0,
        title,
        color,
      },
    ]);

  const rateColor = (id: string, rating: number) => {
    setColors(colors.map((color) => (color.id === id ? { ...color, rating } : color)));
  };

  const removeColor = (id: string) => setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
