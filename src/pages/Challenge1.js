import { useState, useEffect } from 'react';
import axios from 'axios';

const Challenge1 = () => {
  const [counter, setCounter] = useState({ id: null, count: 0 });
  const [isInitialDone, setIsInitialDone] = useState(false);

  // INITIALIZE
  useEffect(() => {
    const prepareData = async () => {
      // GET DATA
      const getData = await axios.get('https://reyc-testapp3.herokuapp.com/api/counter');
      const gdata = await getData.data;
      if(gdata.length !== 0) {
        setCounter({ id: gdata[0]._id, count: gdata[0].count });
      }
      else {
        // POST DATA
        const postData = await axios.post('https://reyc-testapp3.herokuapp.com/api/counter', {
          count: 0
        });
        const pData = await postData.data;
        setCounter({ id: pData[0]._id, count: pData[0].count });
      }
    }
    prepareData();
  },[])


  // UPDATE PER COUNT CHANGES
  useEffect(() => {
    const updateData = async () => {
      await axios.put('https://reyc-testapp3.herokuapp.com/api/counter/' + counter.id,
        { count: counter.count }
      );
    }
    if(isInitialDone) {
      updateData();
    } else {
      setIsInitialDone(true);
    }
  },[counter.id, counter.count, isInitialDone])


  // INCREMENT
  const incrementHandler = () => {
    setCounter(prevState => {
      const newCount = prevState.count++;
      return { id: prevState.id, count: newCount }
    });
  }

  // DECREMENT
  const decrementHandler = () => {
    setCounter(prevState => {
      const newCount = prevState.count--;
      return { id: prevState.id, count: newCount }
    });
  }

  return (
    <div>
      <div>
        <h3>Challenge 1</h3>
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

export default Challenge1;
