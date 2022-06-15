import React from 'react'

const style = {
  wrapper: `flex justify-center  h-full w-full select-none bg-[#222229] text-white`,
  content: `max-w-[1400px] flex justify-between`, 
  mobile: `flex justify-center h-full w-full md:hidden select-none bg-[#222229] text-white` 
}
const login = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>Login</div>
    </div>
  )
}

export default login