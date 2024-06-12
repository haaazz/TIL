// import "./App.css";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Button from "./components/Button.jsx";

// function App() {
//   const buttonProps = {
//     text: "버거",
//     color: "yellow",
//     birth: "1008",
//   };
//   return (
//     <>
//       <Header />
//       {/* <Button text={"버거"} color={"yellow"} /> */}
//       <Button {...buttonProps} />
//       <Button text={"르르"} color={"magenta"} />
//       <Button text={"이네"} color={"violet"} />
//       <h1>리액트 첫 코드 !</h1>
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;

// 5.6

// import "./App.css";
// import { useState } from "react";

// const Bulb = ({ light }) => {
//   return (
//     <div>
//       {light === "ON" ? (
//         <h1 style={{ backgroundColor: "orange" }}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: "grey" }}>OFF</h1>
//       )}
//     </div>
//   );
// };

// function App() {
//   const [state, setState] = useState(0);
//   console.log(state); // [undefined, ƒ]

//   const [light, setLight] = useState("OFF");

//   return (
//     <>
//       <div>
//         <Bulb light={light} />
//         {/* <h1>{light}</h1> */}
//         <button
//           onClick={() => {
//             setLight(light === "ON" ? "OFF" : "ON");
//           }}
//         >
//           딸깍
//         </button>
//       </div>
//       <div>
//         <h1>{state}</h1>
//         <button
//           onClick={() => {
//             setState(state + 1);
//           }}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;

// 5.7 불필요한 리렌더링 방지되도록 위의 코드 변경

// import "./App.css";
// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;

// 5.8
import "./App.css";
import { useState } from "react";
import Register from "./components/Register";
import HookEx from "./components/HookEx";

function App() {
  return (
    <>
      <Register />
      <HookEx />
    </>
  );
}

export default App;
