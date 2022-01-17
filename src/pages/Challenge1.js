import { useState, useEffect } from 'react';

const Challenge1 = () => {
  const [counter, setCounter] = useState({ id: null, count: 0 });

  // INITIALIZE
  useEffect(() => {
    const prepareData = async () => {
      // GET DATA
      const getData = await fetch("https://reyc-testapp3.herokuapp.com/api/counter", { mode: "no-cors" });
      const gdata = await getData.json();
      if(gdata.length !== 0) {
        setCounter({ id: gdata[0]._id, count: gdata[0].count });
      }
      else {
        // POST DATA
        const postData = await fetch("https://reyc-testapp3.herokuapp.com/api/counter", 
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ count: 0 })
          }
        );
        const pData = await postData.json();
        setCounter({ id: pData[0]._id, count: pData[0].count });
      }
    }
    prepareData();
  },[])


  // UPDATE PER COUNT CHANGES
  useEffect(() => {
    const updateData = async () => {
      await fetch("https://reyc-testapp3.herokuapp.com/api/counter/" + counter.id, 
        {
          method: "PUT",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify({ count: counter.count })
        }
      );
    }
    updateData();
  },[counter.id, counter.count])

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
