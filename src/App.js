import { Route, Switch } from 'react-router-dom'

import LoginPage from "./pages/index.js";
import RegisterUser from "./pages/register/user.js";
// import { RegisterFormado } from './pages/register/RegisterFormado';
// import { RegisterEstagiario } from './pages/register/RegisterEstagiario';
// import {ChatUser} from './pages/chats/ChatUser'
// import {ChatVoluntario} from './pages/chats/ChatVoluntario';
// import { ChatBot } from './pages/chats/ChatBot';

import "./App.css";

function App() {
  return (
    <>
        <Switch>
          <Route path="/registerUser" exact component={RegisterUser} />
          {/* 
          <Route path="/chatBot" exact component={ChatBot} />
          <Route path="/chatVoluntario" exact component={ChatVoluntario} />
          <Route path="/chatUser" exact component={ChatUser} />
          <Route path="/registerEstagiario" exact component={RegisterEstagiario} />
          <Route path="/registerFormado" exact component={RegisterFormado} /> 
        */}
          <Route path="/" component={LoginPage} />
        </Switch>
    </>
  );
}

export default App;
