import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'


const style = {
  wrapper: `flex justify-center h-full w-full select-none bg-[#222229] text-white`,
  content: ` flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d]`,
}

const advertise = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
      <div className='hidden md:flex'><Sidebar initialSelectedIcon={'Profile'} /></div>
        <div className={style.mainContent}>
         advertise
        </div>
        <div className='hidden md:flex'> <Widgets /></div>
      </div>
    </div>
  )
}

export default advertise