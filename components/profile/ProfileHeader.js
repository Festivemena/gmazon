import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { BsPencilFill } from 'react-icons/bs';
import 'tw-elements';

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 top-0 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] justify-center  flex text-sm`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center w-full h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 px-3`, 
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `text-center px-3`,
    nav: `flex mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
    about:`font-hairline`,
    follows: `text-xs`
  }

const image = 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/18907/products/cIkAZXNyRZimRw4uqXVX_gDvYTtwQsC33KZqCtbpB_image.jpg'

const ProfileHeader = () => {
    const router = useRouter()
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton}>
          <BsArrowLeftShort />
          </div>
          <div className={style.details}>
          <div className={style.primary}>Innovator_29</div>
          <div className={style.secondary}>4 Messages</div>
      </div>
      </div>
       <div className='relative pb-2 h-full justify-center items-center'>
         <div className='flex flex-col pb-5'>
           <div className='relative flex flex-col mb-1'>
             <div className='flex flex-col justify-center items-center'>
               <img
               src={image}
               className='w-full h-[28vh]  shadow-lg object-cover'
               alt='banner'
               />
               <img
               className='rounded-full w-28 h-28 -mt-10 shadow-xl object-cover'
               src='data:image/jpeg;base64,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'
               />
             </div>
           </div>
         </div>
        
        <div className={style.details}>
        <div>
          <div className= {style.secondary} >Innovator_29 </div> 
        </div>
        <div className={style.primary}> Da_Innovator </div>
        <div className={style.about}>A stubborn Human that can Disturb</div>
        <div className={style.follows}>3.8k <span className='text-gray-500'>following</span> 10.6k <span className='text-gray-500'>followers</span></div>
      </div>
      <div className={style.nav}>
      <div class="flex w-full justify-right">
  <div>
    <div class="dropdown relative">
      <button
        class="dropdown-toggle inline-block px-6 py-2.5 bg-lime-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-800 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800"
        aria-labelledby="dropdownMenuButton2"
      >
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
            href="#"
            >Post</a
          >
        </li>
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
            href="#"
            >    Media</a
          >
        </li>
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
            href="#"
            >Documents</a
          >
        </li>
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
            href="#"
            >Saved</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
        
      </div>
      </div>
      </div>
     
        
        
  )
}

export default ProfileHeader