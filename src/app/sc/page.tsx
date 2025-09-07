// import { useState } from "react";

const ServerComponent = () => {
  console.log('ServerComponent'); // このログはブラウザのコンソールには表示されない、サーバー側のターミナルに表示される
//   [state, setState] = useState("a") // Server ComponentではuseStateは使えない、You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

//  ⨯ Error: Event handlers cannot be passed to Client Component props.
//   <div onClick={function onClick} children=...>
//                ^^^^^^^^^^^^^^^^^^
// If you need interactivity, consider converting part of this to a Client Component.
//   return <div onClick={()=>{console.log("clicked")}}>ServerComponent</div>;
  return <div>ServerComponent</div>;
};

export default ServerComponent;