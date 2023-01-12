import React, { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState();

  const getFibonacci = () => {
    if (isNaN(input)) {
      <h1 className="col-12 w-100 text-primary">Please enter a number.</h1>;
    } else {
      const sequence = [];
      let firstNumber = 0;
      let secondNumber = 1;

      for (let i = 1; i <= input; i++) {
        sequence.push(firstNumber);

        let nextTerm = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextTerm;
      }

      return sequence.map((data) => (
        <h1 className="col-12 w-100 text-primary">{data}</h1>
      ));
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
        {getFibonacci()}
      </div>
    </div>
  );
}
