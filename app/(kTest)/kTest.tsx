import { useEffect, useMemo, useState, useRef, useCallback } from 'react';

const names = ['Liron', 'Omer'];

export default function App() {
  const [title, setTitle] = useState('title');
  const buttonColor = useRef('red');
  const styles = useMemo(() => {
    return { color: buttonColor.current };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => (buttonColor.current = 'blue'), 5999);
    return () => clearTimeout(timer);
  }, []);

  const enrichNames = names.map((name) => {
    return { name: name, handleClick: () => setTitle(name) };
  });

  const handleClick = () => {
    setTitle('omer');
  };

  return null;
  // <div className="App">
  //   <h1>{title}</h1>
  //   <h2>Start editing to see some magic happen!</h2>
  //   <button style={styles}>this button</button>
  //   {enrichNames.map(({ name, handleClick }) => (
  //     <div onClick={handleClick}>{name}</div>
  //   ))}
  // </div>
}
