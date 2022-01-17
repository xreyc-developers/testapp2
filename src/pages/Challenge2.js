import { useState, useEffect } from 'react';

const Challenge2 = () => {
  const [counter, setCounter] = useState({ id: null, count: 0 });

  // INITIALIZE
  useEffect(() => {
    const prepareData = async () => {
    }
    prepareData();
  },[])

  const updateData = async (cnt) => {

  }

  const incrementHandler = () => {
    setCounter(prevState => {
      const newCount = prevState.count++;
      updateData(prevState.count);
      return { id: prevState.id, count: newCount }
    });
  }

  const decrementHandler = () => {
    setCounter(prevState => {
      const newCount = prevState.count--;
      updateData(prevState.count);
      return { id: prevState.id, count: newCount }
    });
  }

  return (
    <div>
      <div>
        <h3>Challenge 2</h3>
      </div>
      <div className="counter-wrap">
          <div>{counter.count}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
      </div>
    </div>
  );
}

export default Challenge2;
