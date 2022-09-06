import './App.css';
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Option from './componets/Option'
import About from './componets/about'
import Landing from './componets/landing_page';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contant from './componets/contant';

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
      <Route path="/" component={Home}/> 
      </Switch>
        <About/> 
        <Footer />  
      <Route path="/medicon/:id" > 
        {/* <About/>  */}
      </Route>  
    </div> 
    </Router> 
  );
}

export default App;
