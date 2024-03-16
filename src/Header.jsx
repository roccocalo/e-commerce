import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className="flex justify-between  p-5 bg-[#374f54]">
      <NavLink to="/">
        <span className="flex flex-row items-center gap-2">
          <img className='w-8 h-8' src="./Images/icon.png" alt="" /> <h1 className="text-center text-white text-3xl font-bold">PrimeWave</h1></span>
      </NavLink>


      <nav className="hidden md:flex md:items-center ">
        <ul className="flex flex-row gap-10 -ml-28 text-white ">
          <li>
            <NavLink to="/" className={'font-semibold text-xl'} >HOME</NavLink>
          </li>
          <li>
            <NavLink to="/store" className={'font-semibold text-xl'}>STORE</NavLink>
          </li>
        </ul>
      </nav>

      <nav className={`fixed top-0 left-0 w-full h-full bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out md:hidden`} style={{ backgroundImage: `url('./Images/md_background.jpg')`, backgroundSize: 'cover' }}>
        <button className="absolute top-0 right-0 m-6" onClick={() => setIsMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
        </button>
        <div className="flex flex-col gap-5  p-5 bg-[#374f54]">
          <span className="flex flex-row items-center gap-2"><img className='w-8 h-8' src="./Images/icon.png" alt="" /> <h1 className="text-center text-white text-3xl font-bold">PrimeWave</h1></span>
          <ul className="flex flex-row justify-center p-2 text-white items-center gap-5">
            <li>
              <NavLink to="/" className={'font-semibold text-xl '} onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/store" className={'font-semibold text-xl'} onClick={() => setIsMenuOpen(false)} >STORE</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex gap-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
        <NavLink to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
        </NavLink>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </button>
      </div>


    </div>
  )
}

export default Header