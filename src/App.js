import { Route, Switch } from 'react-router-dom'

import LoginPage from "./pages/index.js";
import RegisterUser from "./pages/register/user.js";
import RegisterGraduated from './pages/register/graduated.js';
import RegisterIntern from './pages/register/intern.js';
import ChatUser from './pages/chat/user.js';
import ChatPsi from './pages/chat/psi.js';
// import { ChatBot } from './pages/chats/ChatBot';

import "./App.css";

function App() {
  return (
    <>
        <Switch>
          <Route path="/registerUser" exact component={RegisterUser} />
          <Route path="/registerGraduated" exact component={RegisterGraduated} /> 
          <Route path="/registerIntern" exact component={RegisterIntern} />
          <Route path="/chatUser" exact component={ChatUser} />
          <Route path="/chatPsi" exact component={ChatPsi} />
          {/* 
          <Route path="/chatBot" exact component={ChatBot} />
          */}
          <Route path="/" component={LoginPage} />
        </Switch>
    </>
  );
}

export default App;
