import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
  wrapper: `flex-col justify-center h-full w-full select-none bg-black text-white`,
  content: ` flex justify-between`,
  mainContent: `p-flex-[2] border-r border-l border-[#38444d]`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className='hidden md:flex'><Sidebar initialSelectedIcon={'Profile'} /></div>
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
       <div className='hidden md:flex'> <Widgets /></div> 
      </div>
    </div>
  )
}

export default profile
