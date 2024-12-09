
const AsideMenu = ({ isCheckoutSideMenuOpen, children }) => {


  return (
    // bg-slate-900/75
    <aside
      className={`aside-navbar ${isCheckoutSideMenuOpen ? 'flex' : 'hidden'}  flex-col justify-center w-fit h-[100vh] fixed right-[-5vw] top-0 z-10 backdrop-blur bg-[#102241]/100`}
    >
      <div className="flex flex-col justify-between h-full max-h-[250px] w-[100vw] min-[400px]:w-[400px]">
        {children}
      </div>
    </aside>

  )
}

export default AsideMenu
