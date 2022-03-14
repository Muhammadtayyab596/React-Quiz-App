import "./App.css";
// import firebase from "firebase";
// import firebaseConfig from "./Components/firebaseConfig/FirebaseConfig.js"
// import SignUp from "./Components/SignUp/SignUp"
// import Login from "./Components/Login/Login";
import Quiz from "./Components/Quiz/Quiz";
// import QuizResult from "./Components/QuizResult/QuizResult";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";






function App() {

  return (
    <Quiz />
  );
}

export default App;

// import React, { useState } from "react";

// export default function App() {
//   const [checked, setChecked] = useState({ apple: false, orange: false });
//   const [userValue, setUserValue] = useState("")

//   const changeRadio = (e) => {
//     setUserValue(e.target.value)
//     // console.log(e.target.value);
//     console.log(userValue);

//     setChecked(() => {
//       return {
//         apple: false,
//         orange: false,
//         [e.target.value]: true
//       };
//     });

//   };


//   const addBtn = () => {
//     setChecked({
//       apple: false, orange: false
//     })
//   }

//   return (
//     <>
//       <button
//         onClick={addBtn}
//       >
//         uncheck
//       </button>
//       <label>
//         <input
//           type="radio"
//           checked={checked.apple}
//           value="apple"
//           name="choice"
//           onChange={changeRadio}
//         />
//         apple
//       </label>

//       <label>
//         <input
//           type="radio"
//           checked={checked.orange}
//           value="orange"
//           name="choice"
//           onChange={changeRadio}
//         />
//         orange
//       </label>
//     </>
//   );
// }