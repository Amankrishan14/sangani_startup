import './App.css';
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Option from './componets/Option'
import About from './componets/about'
import Landing from './componets/landing_page';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contant from './componets/contant';
import M_landing from "./componets/medi_landing";
const m_landing = () => {
  return (
    <>
    <M_landing/>
    </>
  )
}
 

const Home = () => {
  return (
    <>
    <Landing/> 
        <Option /> 
        <Contant/>
    </>
  )
}
 
function App() {
  return (
    <Router>
    <div className='total'>
      <Navbar /> 
      <Switch>
      <Route path="/" exact component={Home}/> 
      </Switch>
      <Route path="/medicon" exact component={m_landing} /> 

        <About/> 
        <Footer /> 
    </div> 
    </Router> 
  );
}

export default App;
