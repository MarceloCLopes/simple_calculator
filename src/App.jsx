import { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

const initialState = {
  result: 0,
  input: [],
};

function App() {
  const [calculation, setCalculation] = useState(initialState);

  const handleClick =
    ({ key, value }) =>
    () => {
      if (key === "=") {
        const result = eval(calculation.input.join(""));
        setCalculation((calculation) => ({
          ...calculation,
          result,
        }));
      } else if (value.type === Number || value.type === "Math") {
        setCalculation((calculation) => ({
          ...calculation,
          input: [...calculation.input, key],
        }));
      } else if (value.type === "Back") {
        setCalculation(initialState);
      } else if (value.type === "Backspace") {
        setCalculation((calculation) => ({
          ...calculation,
          input: calculation.input.slice(0, -1),
        }));
      }
    };

  return (
    <div className="flex justify-center">
      <main className="bg-gray-300 h-screen flex flex-col w-[500px] min-h-[500px]">
        <Header calculation={calculation} />
        <Body handleClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
