// STYLES
import './styles/reset.css'
import './styles/main-styles.css'

// JSX
import Header from "./compnents/Header/Header";
import Builder from './compnents/Builder/Builder';




function App() {
  return (
    <div className='wrapper'>
      <Header></Header>
      <Builder />
    </div>
  );
}





export default App;
