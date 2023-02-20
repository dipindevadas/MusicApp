import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
    const buttonStyle="border-[1px] rounded-[10px] border-[#1e293b] px-[25px] py-[10px] "
  return (
    <div className="header bg-[#081730] flex item-center justify-between px-[5rem] pt-[2rem] text-[0.9rem]" >


        <img className='logo w-[42px] h-[42px]' src={require("../img/MuzicLogo.png")} alt=""></img>


        <CenterMenu></CenterMenu>



        <div className="buttons">
            <button className={ buttonStyle +`mr-[35px] hover:bg-[#232A4E]`}>Login</button>
            <button className={buttonStyle+`bg-[#1e293b] border-[none]`}>Sign Up</button>
        </div>
    </div>
  )
}

export default Header