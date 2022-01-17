import { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Challenge2 = () => {
  const [counter, setCounter] = useState({ id: null, count: 0 });
  const [isInitial, setIsInitial] = useState(true);

  // INITIALIZE
  useEffect(() => {
    const prepareData = async () => {
      const querySnapshot = await getDocs(collection(db, "counter"));
      let countData = [];
      querySnapshot.forEach((doc) => {
        countData.push({ id: doc.id, count: doc.data().count })
      });

      if(countData.length !== 0 ) {
        setCounter({ id: countData[0].id, count: countData[0].count });
      } else {
        const docRef = await addDoc(collection(db, "counter"), { count: 0 });
        setCounter({ id: docRef.id, count: 0 });
      }
    }
    prepareData();
  },[])

  // UPDATE SERVER
  useEffect(() => {
    const updateData = async () => {
      const counterDocument = doc(db, "counter", counter.id);
      const docSnap = await getDoc(counterDocument);
      if (docSnap.exists()) {
        await setDoc(counterDocument, {
            count: counter.count
        });
      }
    }

    if(!isInitial) {
      updateData();
    }
  },[counter.id, counter.count, isInitial])
  

  const incrementHandler = () => {
    setCounter(prevState => {
      const newCount = prevState.count++;
      return { id: prevState.id, count: newCount }
    });
    setIsInitial(false);
  }

  const decrementHandler = () => {
    setCounter(prevState => {
      const newCount = prevState.count--;
      return { id: prevState.id, count: newCount }
    });
    setIsInitial(false);
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
