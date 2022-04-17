import StarRating from '@/pages/StarRating';
import { CloseOutlined } from '@ant-design/icons';
import { useColors } from '../color-hooks';

const Color: React.FC = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button
        onClick={() => {
          console.log(id);
          removeColor(id);
        }}
      >
        <CloseOutlined />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => rateColor(id, rating)} />
    </section>
  );
};

export default Color;
