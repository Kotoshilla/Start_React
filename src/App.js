import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello Mr Putin</h2>
}

// const Field = () => {
//   const holder = 'Enter here'
//   const styledField = {
//     width: '300px',
//     height: '20px'
//   }
//   return <input 
//           placeholder={holder} 
//           type='text' 
//           style={styledField}/>
// }

class Field extends Component {
  render() {
    const holder = 'Enter here'
    const styledField = {
    width: '300px',
    height: '20px'
  };
  return <input 
          placeholder={holder} 
          type='text' 
          style={styledField}/>
  }
}

function Btn() {
  const text = 'Log in'
  const logger = true
  
  return <button>{logger ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
