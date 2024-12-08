import './App.css'
import Button from './components/MySigmas/common/Button/Butcomponent';
import Counter from './components/MySigmas/counter/Counter';
import MyComponent from './components/MySigmas/MyComponent';

function App () {
  return (
      <div>
        <h1>Sigma</h1>
        <MyComponent
          title = 'Do you want click this button?'
          description = 'I know you want'
        />
        <Button onClick={() => alert('hehe bomb is planted')}>Click me</Button>
        <Counter />
      </div>
  )
}

export default App

