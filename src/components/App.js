import { useState } from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const {
      total: objTotal,
      next: objNext,
      operation: objOperation,
    } = calculate({ total, next, operation }, buttonName);
    setTotal(objTotal);
    setNext(objNext);
    setOperation(objOperation);
  };
  return (
    <div className="Component-App">
      <>
        <Display value={next || total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </>
    </div>
  );
};

export default App;
