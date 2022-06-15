import FooterOption from "./footeroption";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import { FaHamburger } from "react-icons/fa";
import { BiPlus, BiPlusCircle } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  navContainer: `flex justify-between`,
}

function Footer(initialSelectedIcon='world') {
  const[selected, setSelected]=useState(initialSelectedIcon)
  return (
<div className={style.navContainer}>
   <FooterOption
        Icon={selected === 'sidebar' ? FaHamburger : FaHamburger}
        text=''
        isActive={Boolean(selected === 'sidebar')}
        setSelected={setSelected}
        redirect={'/sidebar'}
      />
   <div className="bg-lime-700 rounded-full pr-12 pb-12 w-7 h-7"> <FooterOption 
        Icon={selected === 'post' ? BiPlus  : BiPlus} 
        text=''
        isActive={Boolean(selected === 'post')}
        setSelected={setSelected}
        redirect={'/'}
      /> </div>
   <FooterOption
        Icon={selected === 'notifications' ? FaBell : FaBell}
        text=''
        isActive={Boolean(selected === 'notificattions')}
        setSelected={setSelected}
        redirect={'/communities'}
      />
  </div>  
   )
  }

export default Footer