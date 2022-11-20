import "./App.css";
import terminal from "./terminal.jpeg";
import atharv from "./Img/Atharv.jpeg";
import sam from "./Img/sam.jpg";
import vansh from "./Img/Vansh.jpeg";
import { CodeSquare } from "react-bootstrap-icons";
import { ReactComponent as Javascript } from "./logos/javascript.svg";
import { ReactComponent as Python } from "./logos/python.svg";
import { ReactComponent as ReactIcon } from "./logos/react.svg";
import { ReactComponent as Cpp } from "./logos/cpp.svg";

function App() {
  return (
    <div className="h-screen">
      <nav className="flex mt-4 px-3 justify-center bg-purple-600 title-box text-purple-300 text-outline border-y border-purple-300">
        <div className="flex">
          <CodeSquare
            style={{
              marginTop: "5px",
            }}
            className="text-2xl mr-2"
          />
          <h1
            style={{
              letterSpacing: "3px",
            }}
            className=" font-VT323 text-3xl text-center"
          >
            CODE_COMMUNITY
          </h1>
        </div>
      </nav>
      <div className="pt-16 flex flex-col">
        <div
          className="rounded-xl  w-5/6 mx-auto border-2 border-purple-700"
          style={{
            boxShadow: "6px 6px #c766ff",
          }}
        >
          <img src={terminal} alt="code community" className="rounded-xl" />
        </div>
        <div className="ml-3 mr-3 pt-5 flex glow mt-16">
          <h1 className="text-2xl font-mono text-white pr-3">{">>"}</h1>
          <h1 className="text-2xl font-mono text-white">
            Welcome to code community
          </h1>
        </div>
        <p className="ml-3 mr-3 font-mono text-white pt-3 glow">
          Code community is a place for students interested in the ancient art
          of manipulating electrons in a complex circute using mere words (AKA
          programming),no matter your skill level we accept you with open arms
          even if you dont know to code at all. all we expect is willingness to
          learn
        </p>
      </div>
      <div className="ml-3 mr-3 pt-5 flex glow mt-16">
        <h1 className="text-2xl font-mono text-white pr-3">{">>"}</h1>
        <h1 className="text-2xl font-mono text-white">
          Meet our awesome team 😎
        </h1>
      </div>
      <div className="border border-white w-3/5 mt-5 rounded mx-auto">
        <img src={atharv} alt="" className="w-3/5 ml-5 mt-3 rounded" />
        <h1 className="text-white ml-5 mt-3 font-mono text-xl">
          Atharv Parlikar
        </h1>
        <p className="text-gray-300 ml-5 mt-2 font-mono text-sm">web | DSA</p>
        <div className="flex ml-5 my-3">
          <Javascript height={30} width={30} className="mr-3" />
          <ReactIcon height={30} width={30} className="mr-3" />
          <Python height={30} width={30} />
        </div>
      </div>
      <div className="border border-white w-3/5 mt-5 rounded mx-auto">
        <img src={sam} alt="" className="w-3/5 ml-5 mt-3 rounded" />
        <h1 className="text-white ml-5 mt-3 font-mono text-xl">
          Samikshak Kaulkar
        </h1>
        <p className="text-gray-300 ml-5 mt-2 font-mono text-sm">
          404: not found!
        </p>
        <div className="flex ml-5 my-3">
          <Javascript height={30} width={30} className="mr-3" />
          <Python height={30} width={30} />
        </div>
      </div>
      <div className="border border-white w-3/5 mt-5 rounded mx-auto">
        <img src={vansh} alt="" className="w-3/5 ml-5 mt-3 rounded" />
        <h1 className="text-white ml-5 mt-3 font-mono text-xl">Vansh Choube</h1>
        <p className="text-gray-300 ml-5 mt-2 font-mono text-sm">
          Data Science
        </p>
        <div className="flex ml-5 my-3">
          <Cpp height={30} width={30} className="mr-3" />
          <Python height={30} width={30} />
        </div>
      </div>
      <div className="ml-3 mr-3 pt-5 flex glow mt-16">
        <h1 className="text-2xl font-mono text-white pr-3">{">>"}</h1>
        <h1 className="text-2xl font-mono text-white">Events and new Stuff</h1>
      </div>
      <div className="bg-gradient-to-r  via-blue-500 from-purple-600 to-green-300 w-4/5 mx-auto rounded mt-5">
        <h1 className="font-VT323 text-3xl text-white ml-3">0x00 Hackthon</h1>
      </div>
      <div className="bg-gradient-to-r  via-blue-500 from-purple-600 to-green-300 w-4/5 mx-auto rounded mt-5 ">
        <h1 className="font-VT323 text-3xl text-white ml-3">Leaderboard</h1>
      </div>
      <div className="h-3 w-full"></div>
    </div>
  );
}

export default App;
