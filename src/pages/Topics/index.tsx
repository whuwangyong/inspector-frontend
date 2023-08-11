import { useState } from 'react';

interface MyButtonProps {
  count: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: React.FC<MyButtonProps> = ({ count, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
};

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
