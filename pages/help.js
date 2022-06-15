import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { BiSearch } from 'react-icons/bi'
import { BsArrowLeftShort } from 'react-icons/bs'

const style = {
  wrapper: `border-[#38444d] border-b bg-[#222229]`,
  content: `w-full h-screen flex justify-between`, 
  header: `py-1 px-3 top-0 flex `,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  backButton: `text-3xl cursor-pointer flex justify-between mr-2 rounded-full hover:bg-[#313b44] p-1`,
  primary: `bg-transparent text-white outline-none font-bold`,
  details: `text-white px-3`,
  mobile: `flex justify-center h-full w-full md:hidden select-none bg-[#222229] text-white` 
}


const help = () => {
  const router = useRouter()
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
         <div className={style.header}>
           <div onClick={() => router.push('/')} className={style.backButton}>
          <BsArrowLeftShort />
          </div>
          <div className={style.details}>
          <div className={style.primary}>Help</div>
      </div>
      </div>
      </div>
      <div> <form>
                <textarea 
            className={style.inputField}></textarea> </form></div>
      </div>
    
  )
}

export default help