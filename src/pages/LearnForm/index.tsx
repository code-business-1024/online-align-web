import React, { useEffect, useState } from 'react';
import { useInput, useAnyKeyToRender, useWindowSize, useFetch } from './hooks';
import { useColors } from '../ColorOrganizer/color-hooks';
import { response } from 'express';

const AddColorForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState();

  useAnyKeyToRender();

  useWindowSize();

  useEffect(() => {
    console.log('fresh render');
  });

  useEffect(() => {
    // if (!userInfo) return;
    // (async (name) => {
    //   const urlencoded = new URLSearchParams();
    //   urlencoded.append('username', name);
    //   urlencoded.append('password', '123456');
    //   const requestOptions = {
    //     method: 'POST',
    //     body: urlencoded,
    //     redirect: 'follow',
    //   };
    //   fetch(`http://localhost:8080/login`, requestOptions)
    //     .then((response) => response.json())
    //     .then(setUserInfo)
    //     .catch(console.error);
    // })('code-fusheng');
    // console.log(userInfo);
    // localStorage.setItem('token', JSON.stringify(userInfo));
  }, [userInfo]);

  // const txtTitle = useRef();
  // const hexColor = useRef();

  // const [title, setTitle] = useState('');
  // const [color, setColor] = useState('#000000');

  const [titleProps, restTitle] = useInput('');
  const [colorProps, restColor] = useInput('#000000');

  const [usernameProps, restUsername] = useInput('code-fusheng');
  const [passwordProps, restPassword] = useInput('password');

  const { addColor } = useColors();

  // const { loading, data, error } = useFetch('http://localhost:8080/login', requestOptions);

  const doLogin = (e) => {
    console.log('xxx');
    e.preventDefault();
    const urlencoded = new URLSearchParams();
    urlencoded.append('username', usernameProps.value);
    urlencoded.append('password', passwordProps.value);

    const requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow',
    };

    restUsername();
    restPassword();
  };

  const submit = (e) => {
    // 阻止浏览器使用POST请求提交表单
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
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
    <>
      <form onSubmit={doLogin}>
        <input type="text" {...usernameProps} placeholder="用户名" required />
        <input type="password" {...passwordProps} placeholder="密码" required />
        <button>Login</button>
      </form>

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
    </>
  );
};

export default AddColorForm;
