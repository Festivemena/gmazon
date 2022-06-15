
const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-1 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-sm mr-1`,
    textGeneral: `font-hairline`,
    textActive: `font-thin`,
  }
  function NavBarOption({text, Icon, isActive, setSelected, redirect}) {
    return (
      <div
        className={style.wrapper}
        onClick={() => {
         setSelected(text)
        }}
      >
        <div className={style.iconContainer}>
          <Icon />
        </div>
        <div className={`${isActive ? style.textActive : style.textGeneral}`}>
          {text}
        </div>
      </div>
    )
  }
  
  export default NavBarOption
  