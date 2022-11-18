import "./App.css";
import code_community from "./code_community.png";
import Ticker from "react-ticker";
import { useState } from "react";

function App() {
  const [binary_text, set_binary] = useState("1011001");

  const change = () => {
    let binary = parseInt(Math.random() * 255).toString(2);
    binary = "0".repeat(8 - binary.length) + binary;
    set_binary(binary);
  };

  return (
    <div className="h-screen">
      <Ticker>
        {() => {
          change();
          return (
            <>
              <h1 style={{ paddingRight: "0.5em" }} className="text-white">
                {binary_text}
              </h1>
            </>
          );
        }}
      </Ticker>
      <h1 className="text-white font-VT323 text-3xl text-center">
        CODE_COMMUNITY
      </h1>
      <div className="pt-16 flex flex-col">
        <img src={code_community} alt="code community" />
        <div className="ml-3 mr-3 pt-5 flex glow">
          <h1 className="text-2xl font-mono text-white pr-3">{">>"}</h1>
          <h1 className="text-2xl font-mono text-white">
            Welcome to code community
          </h1>
        </div>
        <p className="ml-3 mr-3 font-mono text-white pt-3 glow">
          Code community is a place for students interested in the ancient art
          of menipulating electrons in a complex circute using mere words (AKA
          programming),no matter your skill level we accept you with open arms
          even if you dont know to code at all. all we expect is willingness to
          learn
        </p>
      </div>
      <button
        onClick={() => {
          console.log("Hello world");
        }}
        className="bg-white rounded font-mono px-2 py-1 "
      >
        change
      </button>
    </div>
  );
}

export default App;
