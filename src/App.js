import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [isModal,setIsModal] = useState(false)
  return (
   <>
   <button onClick={()=>{setIsModal(true)}}>Click to open</button>
   {isModal===true?<Modal isModal={isModal} setIsModal={setIsModal} />:''}
   </>
  );
}

export default App;
