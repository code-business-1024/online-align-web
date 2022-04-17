import Color from '../Color';
import React from 'react';
// import { ColorContext } from '@/pages/Welcome';
import { useColors } from '../color-hooks';

const ColorList: React.FC = () => {
  const { colors } = useColors();
  if (!colors.length) {
    return <div>No Colors Listed.</div>;
  } else {
    return (
      <div className="color-list">
        {colors.map((color) => (
          <Color key={color.id} {...color} />
        ))}
      </div>
    );
  }
};

export default ColorList;
