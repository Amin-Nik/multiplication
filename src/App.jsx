import { useState } from "react";
import "./App.css";

function App() {
  const [numbers] = useState(() => [
    Math.round(Math.random() * 10),
    Math.round(Math.random() * 10),
  ]);
  const [input, setInput] = useState();
  const [bgc, setBgc] = useState("#070014");

  function onSubmit() {
    const result = numbers[0] * numbers[1] == input;
    if (result) setBgc("forestgreen");
    else if (!result) setBgc("maroon");
  }

  return (
    <>
      <div
        style={{
          backgroundColor: `${bgc}`,
          color: "white",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section style={{}}>
          <div
            style={{
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <span>{numbers[0]}</span>
            <span>X</span>
            <span>{numbers[1]}</span>
            <span>=</span>
            <input
              onInput={(e) => setInput(e.target.value)}
              type="number"
              style={{ width: "100px", height: "50px", fontSize: "50px" }}
            />
          </div>
          <button
            onClick={onSubmit}
            style={{
              width: "100%",
              height: "40px",
              marginTop: "10px",
              fontSize: "25px",
              backgroundColor: "blueviolet",
            }}
          >
            بررسی
          </button>
          <button
            onClick={() => {
              window.location.reload();
            }}
            style={{
              width: "100%",
              height: "40px",
              marginTop: "10px",
              fontSize: "25px",
              backgroundColor: "deeppink",
            }}
          >
            دوباره
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
