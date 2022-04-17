import { useState, useEffect, useMemo, useLayoutEffect } from 'react';

export const useFetch = (uri, requestOptions) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri, requestOptions)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri, requestOptions]);

  return { loading, data, error };
};

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [{ value, onChange: (e) => setValue(e.target.value) }, () => setValue(initialValue)];
};

export const useAnyKeyToRender = () => {
  const [, forceRender] = useState();
  // js 这里要理解不变 ？ 也就是完全相等的概念
  // 如果我在元素渲染的时候定义一个数组，而通过数据的改变去决定渲染 这个数组是不可能不变的
  // 这里编译器会提示使用 useMemo 备忘值 缓存变量
  // const arrStr = ['1', '2', '3'];
  const arrStr = useMemo(() => {
    return ['1', '2', '3'];
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', forceRender);
    // console.log('xxx');
    return () => window.removeEventListener('keydown', forceRender);
  }, [arrStr]);
};

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(`${window.innerWidth} - ${window.innerHeight}`);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return [width, height];
};
