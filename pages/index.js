import Sidebar from '../components/Sidebar'
import Feed from '../components/feed'
import Widgets from '../components/widgets'
import Mobile from '../components/Mobile/Home/Mobile'

const style = {
  wrapper: `flex justify-center  h-full w-full select-none bg-black text-white`,
  content: `max-w-[1400px] flex justify-between`, 
  mobile: `flex justify-center h-full w-full md:hidden select-none bg-dark text-white` 
}

export default function Home() {
  return (
 <div className={style.wrapper}>
   <div className='hidden md:flex'>
      <div className={style.content}>
        <Sidebar /> 
        <Feed /> 
        <Widgets /> 
      </div>
   </div>
  
  <div className={style.mobile}>

      <Mobile />
      
    </div>  
 </div>
  )
}
