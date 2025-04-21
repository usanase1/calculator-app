import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState(""); 
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    if (operation === "divide" && n2 === 0) {
      setError("Cannot divide by zero");
      setResult(null);
      return;
    }

    setError("");
    let res;

    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n1 / n2;
        break;
      default:
        res = null;
    }

    setResult(res);
  };

  useEffect(() => {
    if (result !== null) {
      console.log("Result:", result);
    }
  }, [result]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-900 rounded-xl shadow-md space-y-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
      <h2 className="text-2xl font-bold text-center text-white">Calculator App</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select operation</option> {}
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (−)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Calculate
        </button>
      </form>

      {error && <p className="text-red-600 text-center">{error}</p>}
      {result !== null && !error && (
        <div className="text-center text-lg font-semibold text-green-600">
          Result: {result}
        </div>
      )}
    </div>
  );
}
