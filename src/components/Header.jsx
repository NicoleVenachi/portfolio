import Ham from '../assets/icons/Ham'
import logoBG from '../assets/logo-bg.svg'
import IconLogoN from '../assets/icons/logoN'
import AsideMenu from './AsideMenu'
import { useEffect, useState } from 'react'

const Header = () => {

  const categories = ['about', 'skills', 'projects']

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

  // const links = <p> asas </p>
  const links = () => (
    categories.map((categorie, id) => (
      <a key={id} className='text-xl text-center md:text-sm px-5' href={`#${categorie}`}
        onClick={() => { screenSize < 768 && setIsCheckoutSideMenuOpen(prev => !prev) }}
      >
        <span className='gl-txt-highlight'> 0{id + 1}. </span> {categorie[0].toUpperCase() + categorie.substring(1)}
      </a>
    ))
  )

  //efects para cerrar cuando se hace menor a md
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    //apenas inice, seteo el screen size
    const handleResize = () => setScreenSize(window.innerWidth)

    //al haber un resize llama a esta funcion
    window.addEventListener('resize', handleResize)

    handleResize(); //lamo esa funcion

    //return en useEffect es como el did onmount, para limpiar la funcion
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {

    if (screenSize > 768) {
      setIsCheckoutSideMenuOpen(false)
      //si es menor que dispositivos mobiles, por defecto lo escondo,
      //ya el usuario lo prendera con el bootn
    }
  }, [screenSize])


  return (
    <header className='gl-font-sans w-[inherit] h-16 sm:h-20 z-20 top-0 sticky backdrop-blur'>
      <nav className="header-container flex justify-between items-center w-full h-full">
        <div className="header-logo h-12 sm:h-16 w-auto relative">
          <IconLogoN />
          <img src={logoBG} className='h-12 sm:h-16 w-auto absolute top-0 -z-10' alt="logo" />
        </div>

        <div className="header-info z-20">
          <div className="header-links hidden md:block">
            {links()}
          </div>
          <div className="header-menu md:hidden h-12 sm:h-16"
            onClick={() => setIsCheckoutSideMenuOpen(prev => !prev)}
          >
            <Ham isCheckoutSideMenuOpen={isCheckoutSideMenuOpen} />
          </div>
        </div>

        <AsideMenu isCheckoutSideMenuOpen={isCheckoutSideMenuOpen} setIsCheckoutSideMenuOpen={setIsCheckoutSideMenuOpen}>
          {links()}
        </AsideMenu>
      </nav>
    </header>
  )
}

export default Header

