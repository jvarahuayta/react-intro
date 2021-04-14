import {useState, memo} from 'react';

export const Counter = memo(() => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  console.log('Counter is rendered');
  return (
    <div>
      <div>Contador: {counter}</div>
      <button onClick={handleClick}>Aumentar contador</button>
    </div>
  );
});
