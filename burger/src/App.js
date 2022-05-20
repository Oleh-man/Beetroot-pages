// STYLES
import './styles/reset.css'
import './styles/main-styles.css'

// JSX
import Header from "./compnents/Header/Header";
import Builder from './compnents/Builder/Builder';




function App() {
const ingredients = [{name: 'meat', price: 5}, {name: 'chease', price: 3}, {name: 'salad', price: 2.5}, {name: 'tomatoes', price: 1.75}, {name: 'picles', price: 2.25}, {name: 'bacon', price: 4}]

  return (
    <div className='wrapper'>
      <Header></Header>
      <Builder ingredients= {ingredients} />
    </div>
  );
}





export default App;
