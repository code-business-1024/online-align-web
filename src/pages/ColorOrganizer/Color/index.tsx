import StarRating from '@/pages/StarRating';
import { CloseOutlined } from '@ant-design/icons';

const Color: React.FC = ({ id, title, color, rating, onRemove = (f) => f, onRate = (f) => f }) => {
  return (
    <section>
      <h1>{title}</h1>
      <button
        onClick={() => {
          console.log(id);
          onRemove(id);
        }}
      >
        <CloseOutlined />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </section>
  );
};

export default Color;
