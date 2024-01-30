import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="flex absolute bottom-12 w-[100%] mx-auto justify-evenly ">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl align-bottom"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl align-bottom"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="bg-blue-500 hover:bg-color-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setColor("blue")}
          >
            BLue
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={() => setColor("pink")}>
            Pink
          </button>
          <button className="outline-none px-4 py-1 rounded full text-white shadow-lg bg-gradiant font-bold" onClick={() => setColor("olive")}> Reset </button>
        </div>
      </div>
    </>
  );
}

export default App;
