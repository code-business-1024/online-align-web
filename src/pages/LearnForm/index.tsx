import { useRef, useState } from 'react';
import { useInput } from './hooks';

const AddColorForm: React.FC = ({ onNewColor = (f) => f }) => {
  // const txtTitle = useRef();
  // const hexColor = useRef();

  // const [title, setTitle] = useState('');
  // const [color, setColor] = useState('#000000');

  const [titleProps, restTitle] = useInput('');
  const [colorProps, restColor] = useInput('#000000');

  const submit = (e) => {
    // 阻止浏览器使用POST请求提交表单
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    restColor();
    restTitle();
    // const title = txtTitle.current.value;
    // const color = hexColor.current.value;
    // console.log(txtTitle);
    // console.log(hexColor);
    // onNewColor(title, color);
    // console.log(`${title} - ${color}`);
    // txtTitle.current.value = '';
    // hexColor.current.value = '';
    // setColor('');
    // setTitle('');
  };

  return (
    <form onSubmit={submit}>
      {/* <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required /> */}
      <input
        // value={title}
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
        // onChange={(event) => setTitle(event.target.value)}
      />
      <input
        // value={color}
        {...colorProps}
        type="color"
        required
        // onChange={(event) => setColor(event.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
