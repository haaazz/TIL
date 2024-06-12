import { useState, useRef } from "react";

const Register = () => {
  //   const [name, setName] = useState("");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const refObj = useRef();
  const inputRef = useRef();
  console.log(refObj);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  //   const onChangeName = (e) => {
  //     // console.log(e);
  //     // setName(e.target.value);
  //     setInput({
  //       ...input,
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     // setBirth(e.target.value);
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     // setCountry(e.target.value);
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     // setBio(e.target.value);
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  return (
    <div>
      <input
        name="name"
        value={input.name}
        onChange={onChange}
        placeholder="이름을 입력해주세요"
      />
      {input.name}

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="">국적</option>
          <option value="kr">한국</option>
          <option value="cn">중국</option>
          <option value="jp">일본</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;

// import { useState, useRef } from "react";

// // 간단한 회원가입 폼
// // 1. 이름
// // 2. 생년월일
// // 3. 국적
// // 4. 자기소개

// const Register = () => {
//   const [input, setInput] = useState({
//     name: "",
//     birth: "",
//     country: "",
//     bio: "",
//   });
//   const countRef = useRef(0);
//   const inputRef = useRef();

//   const onChange = (e) => {
//     // countRef.current++;
//     count++;
//     console.log(count);
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = () => {
//     if (input.name === "") {
//       // 이름을 입력하는 DOM 요소 포커스
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           ref={inputRef}
//           name="name"
//           value={input.name}
//           onChange={onChange}
//           placeholder={"이름"}
//         />
//       </div>

//       <div>
//         <input
//           name="birth"
//           value={input.birth}
//           onChange={onChange}
//           type="date"
//         />
//       </div>

//       <div>
//         <select
//           name="country"
//           value={input.country}
//           onChange={onChange}
//         >
//           <option value=""></option>
//           <option value="kr">한국</option>
//           <option value="us">미국</option>
//           <option value="uk">영국</option>
//         </select>
//       </div>

//       <div>
//         <textarea
//           name="bio"
//           value={input.bio}
//           onChange={onChange}
//         />
//       </div>

//       <button onClick={onSubmit}>제출</button>
//     </div>
//   );
// };

// export default Register;
