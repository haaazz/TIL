// const Button = (props) => {
//   console.log(props);
//   return <button style={{ color: props.color }}>{props.text}</button>;
// return (
//     <button style={{color:color}}
// )
// };
const Button = ({ text, color }) => {
  // const onClickButton = () => {
  //     console.log(text)
  // }
  return (
    <button
      // onClick={onClickButton}
      onClick={() => {
        console.log(text);
      }}
      style={{ color: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
