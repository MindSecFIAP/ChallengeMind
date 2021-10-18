import { Route, Switch } from 'react-router-dom'

import LoginPage from "./pages/index.js";
import RegisterUser from "./pages/register/User.js";
import RegisterGraduated from './pages/register/Graduated.js';
import RegisterIntern from './pages/register/Intern.js';
import ChatUser from './pages/chat/User.js';
import ChatPsi from './pages/chat/Psi.js';
import PsiProfile from './pages/profile/Psi.js';
import Error from './pages/error.js';
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
          <Route path="/profile" exact component={PsiProfile} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={LoginPage} />
          <Route path="/404" component={Error} />
        </Switch>
    </>
  );
}

export default App;
