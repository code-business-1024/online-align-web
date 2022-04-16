import React, { useState } from 'react';
import { StarFilled } from '@ant-design/icons';

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <StarFilled style={{ color: selected ? 'red' : 'grey' }} onClick={onSelect} />
);

const createArray = (length: number) => [...Array(length)];

const StarRating: React.FC = ({ totalStars = 5, selectedStars = 0, onRate = (f) => f }) => {
  // 想为组件添加状态使用 useState 钩子
  // const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        // <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export default StarRating;
