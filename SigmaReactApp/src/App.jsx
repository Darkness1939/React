import './App.css'
import Button from './components/MySigmas/common/Button/Butcomponent';
import Counter from './components/MySigmas/counter/Counter';
import MyComponent from './components/MySigmas/MyComponent';
import Sigres from './components/MySigmas/Calculator/calculator';
import opForm from './components/MySigmas/formreg/formreg';
import Home from './components/MySigmas/pages/homeMe';
import About from './components/MySigmas/pages/aboutUss';
import { BrowserRouter, Routes, Route } from "react-router";
function App () {
  return (
      <div>
        <h1>Sigma</h1>
        <opForm />
        <MyComponent
          title = 'Do you want click this button?'
          description = 'I know you want'
        />
        <Button onClick={() => alert('hehe bomb is planted')}>Click me</Button>
        <Button onClick={() => alert(Sigres)}>1 + 2 + 3 + 4 + 5 is</Button>
        <Counter />
        <BrowserRouter>
        <Routes>
          <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <Route />
            </Route>
          </div>
        </Routes>
        </BrowserRouter>
     
      </div>
       
  )
}
export default App

