import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Header = () => {
  let[menu,setMenu]= useState(false)
  let handalMenu= ()=>{
    setMenu(!menu)
  }
  return (
    <section>
        <Container>
       <div className='flex justify-between items-center '>
         <div className='' >
        <img src={Logo} alt=''/>
       </div>
       <div  className='relative mx-auto z-9'>
        <div>
        <ul className={`lg:flex text-center gap-x-5 lg:static duration-500 ease-in-out ${menu == true ? "bg-[green] absolute left-0 top-[25px] w-full":"absolute left-[-950px] top-[15px] w-full z-[99]"}`}>
            <li className='font-dm text-[14px] text-headerColor hover:text-headerHover' ><a className='font-dm font-bold inline-block p-2' href='#'>Home</a></li>
            <li className='font-dm text-[14px] text-headerColor hover:text-headerHover' ><a className='font-dm font-bold inline-block p-2' href='#'>Shop</a></li>
            <li className='font-dm text-[14px] text-headerColor hover:text-headerHover' ><a className='font-dm font-bold inline-block p-2' href='#'>About</a></li>
            <li className='font-dm text-[14px] text-headerColor hover:text-headerHover' ><a className='font-dm font-bold inline-block p-2' href='#'>Contacts</a></li>
            <li className='font-dm text-[14px] text-headerColor hover:text-headerHover' ><a className='font-dm font-bold inline-block p-2' href='#'>Journal</a></li>
        </ul>
        </div>
        </div>
        <div onClick={handalMenu} className='lg:hidden' >
         {menu == true ? <RxCross2 /> : <FaBars />}
        </div>
        </div>
        
       </Container>
    </section>
  )
}

export default Header