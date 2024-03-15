import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    return (
        <div className="flex justify-between         p-5 bg-orange-400">
            <NavLink to="/">
                <span className="flex flex-row items-center gap-2">
                <img className='w-8 h-8' src="./Icons/icon.png" alt="" /> <h1 className="text-center text-3xl font-bold">PrimeWave</h1></span>
            </NavLink>

            
      <nav className={`hidden md:flex md:items-center`}>
        <ul className="flex flex-row gap-6">
          <li>
            <NavLink to="/" className={'font-semibold text-xl'} >HOME</NavLink>
          </li>
          <li>
            <NavLink to="/store" className={'font-semibold text-xl'}>STORE</NavLink>
          </li>
        </ul>
      </nav>

      <nav className={`fixed top-0 left-0 w-full h-full bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out md:hidden`}>
        <button className="absolute top-0 right-0 m-6" onClick={() => setIsMenuOpen(false)}> <img className='w-8' src="./Icons/close.svg" alt="" /> </button>
        <div className="flex flex-col gap-5  p-5 bg-orange-400">
            <span className="flex flex-row items-center gap-2"><img className='w-8 h-8' src="./Icons/icon.png" alt="" /> <h1 className="text-center text-3xl font-bold">PrimeWave</h1></span>
        <ul className="flex flex-col p-2 space-y-2">
        <li>
            <NavLink to="/" className={'font-semibold text-xl '} onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/store"  className={'font-semibold text-xl'}  onClick={() => setIsMenuOpen(false)} >STORE</NavLink>
          </li>
        </ul>
        </div>
        
      </nav>

      <div className="flex gap-3 ">
            <img className='w-8' src="./Icons/dark_mode.svg" alt="" />
             <NavLink to="/cart"> <img className='w-8' src="./Icons/shopping_cart.svg" alt="" /></NavLink>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}> <img className='w-8' src="./Icons/menu.svg" alt="" /> </button>
            </div>


        </div>
    )
}

export default Header