import React from 'react'
// import logo from './logo.svg';
import './App.css';
import { FcCopyright } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto ">
      
     <header className='flex justify-between items-center text-x1 font-bold h-20 p-10 bg-slate-200'>
            <p>리액트 기초 학습</p>
            <p><IoHome /></p>
     </header>
     <main className='grow w-full flex justify-center items-center overflow-y-auto'>
          <Lotto />
     </main>
     <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          <FcCopyright /> Kim Seong Sik 01
     </footer>
    </div>
  );
}

export default App;
