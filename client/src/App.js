import NewLoginPage from "./login/newLoginPage";
import{ Route,Routes,Navigate} from  'react-router-dom';
import axios from "axios";

// component
import NextPage from "./NextPage";


const {token} = JSON.parse(localStorage.loginToken);
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

function App(props) {
  return (
  <>
 <Routes>
   <Route path="/" exact element={<NewLoginPage token={token}/>}/>
   <Route path={`/${token}`} exact element={<NextPage/>}/>
 </Routes>
  </>
   )
}

export default App;
