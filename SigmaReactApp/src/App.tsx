import './App.css'
import Header from './components/MySigmas/common/Header/Header';
import {Outlet} from 'react-router-dom'
import Counter from './components/MySigmas/counter/Counter';
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Counter/>
    </div>
  );
}

export default App;