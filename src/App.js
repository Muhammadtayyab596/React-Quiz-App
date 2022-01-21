import "./App.css";
import firebase from "firebase";
import firebaseConfig from "./Components/firebaseConfig/FirebaseConfig.js"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login";
import Quiz from "./Components/Quiz/Quiz";
import QuizResult from "./Components/QuizResult/QuizResult";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




  

function App() {
  
  return (
    <Router>
      <div>

      <Route exact path="/"> 
          <SignUp />
      </Route>

      <Route path="/login"> 
          <Login />
      </Route>

      <Route path="/quiz"> 
          <Quiz />
      </Route>

      <Route path="/quizResult"> 
          <QuizResult />
      </Route>


        

      </div>

    </Router>
  );
}

export default App;
