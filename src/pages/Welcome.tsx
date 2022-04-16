import React, { useState, createContext } from 'react';
import './Welcome.less';
// import OnlineAlign from './OnlineAlign';
import StarRating from './StarRating';
import ColorList from './ColorOrganizer/ColorList';
import colorData from './ColorOrganizer/color-data.json';
import { identity, random } from 'lodash';
import AddColorForm from './LearnForm';
import { render } from 'react-dom';

// const Welcome: React.FC = () => {
//   return (
//     <div>
//       <StarRating
//         style={{ backgroundColor: 'lightblue' }}
//         onDoubleClick={(e) => alert('double click')}
//       />
//     </div>
//   );
// };

export const ColorContext = createContext();

const Welcome: React.FC = () => {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <ColorContext.Provider value={{ colorData }}>
        <AddColorForm
          onNewColor={(title, color) => {
            const newColors = [...colors, { id: random(), rating: 0, title, color }];
            setColors(newColors);
          }}
        />
        <ColorList
          colors={colors}
          onRateColor={(id, rating) => {
            const newColors = colors.map((color) =>
              color.id === id ? { ...color, rating } : color,
            );
            setColors(newColors);
          }}
          onRemoveColor={(id) => {
            const newColors = colors.filter((color) => color.id !== id);
            setColors(newColors);
          }}
        />
      </ColorContext.Provider>
    </>
  );
};

export default Welcome;
