import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import WalletConnect from './Buttons/WalletConnect';

const Navbar = () => {
  return (
    <div className='p-4 flex justify-between'>
        
        <WalletConnect title="Connect Wallet" />
        
        <div className='flex gap-2 items-center justify-center'>
            <button className="p-1 rounded-full bg-fayhr-gray"><IoSearchOutline /></button>
            <button className="p-1 rounded-full bg-fayhr-gray"><RxHamburgerMenu /></button>
        </div>
    </div>
  )
}

export default Navbar