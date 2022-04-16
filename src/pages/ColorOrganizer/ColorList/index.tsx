import Color from '../Color';

const ColorList: React.FC = ({ colors = [], onRemoveColor = (f) => f, onRateColor = (f) => f }) => {
  if (!colors.length) {
    return <div>No Colors Listed.</div>;
  } else {
    return (
      <div>
        {colors.map((color) => (
          <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />
        ))}
      </div>
    );
  }

  return;
};

export default ColorList;
