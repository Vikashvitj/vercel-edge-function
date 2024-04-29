import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const callAPI = async () => {
      const response = await fetch("api/hello", {
        method: "POST",
        body: JSON.stringify({ name: "Your", lastName: "Name" }),
      });
      const data = await response.json();
      console.log(data);

      const responseGet = await fetch("api/hello?name=User", {
        method: "GET",
      });
      const dataGet = await responseGet.text();
      console.log(dataGet);
    };
    callAPI();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
