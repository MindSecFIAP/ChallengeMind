import { Route, Switch } from 'react-router-dom'

import LoginPage from "./pages/index.js";
import RegisterUser from "./pages/register/User.js";
import RegisterGraduated from './pages/register/Graduated.js';
import RegisterIntern from './pages/register/Intern.js';
import ChatBot from './pages/chat/Chatbot.js';
import ChatUser from './pages/chat/User.js';
import ChatPsi from './pages/chat/Psi.js';
import PsiProfile from './pages/profile/Psi.js';
import "./App.css";

function App() {
  return (
    <>
        <Switch>
          <Route path="/registerUser" component={RegisterUser} />
          <Route path="/registerGraduated" component={RegisterGraduated} /> 
          <Route path="/registerIntern" component={RegisterIntern} />
          <Route path="/chatbot" component={ChatBot} />
          <Route path="/chatUser" component={ChatUser} />
          <Route path="/chatPsi" component={ChatPsi} />
          <Route path="/profile" component={PsiProfile} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
    </>
  );
}

export default App;
