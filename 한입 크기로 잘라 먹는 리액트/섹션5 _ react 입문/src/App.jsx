import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button.jsx";

function App() {
  const buttonProps = {
    text: "버거",
    color: "yellow",
    birth: "1008",
  };
  return (
    <>
      <Header />
      {/* <Button text={"버거"} color={"yellow"} /> */}
      <Button {...buttonProps} />
      <Button text={"르르"} color={"magenta"} />
      <Button text={"이네"} color={"violet"} />
      <h1>리액트 첫 코드 !</h1>
      <Main />
      <Footer />
    </>
  );
}

export default App;
