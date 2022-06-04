import './App.css';

import { useContext } from 'react';

import { AppContext } from './AppContext/AppContextProvider';
import Button from './Button/Button';

function App() {
  const[theme,toggleTheme]=useContext(AppContext)
  return (
    <div className="App">
       <button onClick={toggleTheme}>toggle</button>
      <Button text="THEME"/>
     
    </div>
  );
}
export default App;
