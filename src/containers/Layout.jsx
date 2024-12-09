import { useEffect, useRef } from "react";
import { Outlet } from 'react-router-dom'

import Footer from "../components/Footer";

function Layout() {

  const mouseRef = useRef(null); //ref a estilos del layout

  useEffect(() => {

    let clientScrollX = 0 //por si llegase a tener scroll horizontal
    let clientScrollY = 0;
    let totalScrollY = 0;


    const updateMousePosition = (ev) => {
      if (!mouseRef.current) return; //si aun no hay ref en en DOM, manda nada
      // console.log(ev);
      const { clientX, clientY } = ev;
      // console.log(mouseRef.current.style); // con set property, las setea como inline styles
      clientScrollY = clientY
      clientScrollX = clientX
      mouseRef.current.style.setProperty("--x", `${clientX}px`);
      mouseRef.current.style.setProperty("--y", `${clientY + window.scrollY}px`); //le agrego el valor que se ha scroleado
    };


    const updateMouseScroll = (ev) => {
      if (!mouseRef.current) return;
      totalScrollY = window.scrollY + clientScrollY; //al bajar tambien actualizo

      mouseRef.current.style.setProperty("--y", `${totalScrollY}px`)
    };

    window.addEventListener("mousemove", updateMousePosition); //agrego listener de mouse movey se lo paso  l funcion

    window.addEventListener("scroll", updateMouseScroll);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateMouseScroll);
    }; //clean up function para quitar el listener por si el efecto rerun
  }, []);



  return (

    <div className='layout flex justify-center h-fit w-full' ref={mouseRef}>
      {/* <div className="layout-mouse absolute w-[inherit] h-screen z-30" ref={mouseRef}>

      </div> */}
      <div className='layout-container w-[90vw] lg:w-[80vw] md:w-[85vw] max-w-6xl'>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>

  )
}

export { Layout }
