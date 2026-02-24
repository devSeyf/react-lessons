import { useState } from "react";
import "./App.css";

function App() {
  let count = 0;
  const [count1, setCount1] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('white');

  return (
    <>
      <div>
        <h1> No use state (Js style)</h1>
        <button
          onClick={() => {
            count++;
            console.log(count);
          }}
        >
          {count}
        </button>
      </div>

      <div>
        <h1> use State (React style)</h1>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            setCount1((p) => p + 1);
          }}
        >
          {count1}
        </button>
      </div>
      <div>
        <h1>{isOn ? "💡 اللمبة شغالة" : "🔌 اللمبة مطفأة"}</h1>
        <button onClick={() => setIsOn(!isOn)}>اضغط هنا</button>
      </div>

      <div >
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </div>
      <div>
        <h1>{color}</h1>
        <button onClick={() => {
          setColor('blue');
          setColor('pink');
          setColor('red');
        }}>+3</button>
      </div>
    </>
  );
}

export default App;
