import "./Main.css";

const Main = () => {
  const number = 10;
  const user = {
    name: "햠",
    isLogin: true,
  };

  if (user.isLogin) {
    return <button className="logout">로그아웃</button>;
  } else {
    return (
      <button style={{ color: "blue", borderBottom: "5px solid grey" }}>
        로그인
      </button>
    );
  }

  //   return (
  //     <>
  //       <h1>main</h1>
  //       <h2>{number % 2 === 0 ? "짝" : "홀"}</h2>
  //   {
  /* {user.isLogin ? <button>로그아웃</button> : <button>로그인</button>} */
  //   }
  //     </>
  //   );
};

export default Main;
