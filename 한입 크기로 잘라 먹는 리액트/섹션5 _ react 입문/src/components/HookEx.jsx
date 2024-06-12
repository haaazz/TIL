// import { useState } from "react";

// const state = useState();
// Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// You might have mismatching versions of React and the renderer (such as React DOM)

import useGetInput from "../hooks/useGetInput";

const HookEx = () => {
  const [input, onChange] = useGetInput();
  const [input2, onChange2] = useGetInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookEx;
