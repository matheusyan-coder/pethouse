import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import FormCadastro from './components/Cadastro';


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/FormCadastro" component={FormCadastro} />
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
