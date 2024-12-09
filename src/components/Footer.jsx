import { useState } from 'react'
import Media from './Media'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'


const Footer = () => {
  //hover:-translate-y-1 hover:scale-110
  const [idleTransition, setIdleTransition] = useState(true)
  const childIconTransition = '-translate-y-1 scale-110'


  const handleOnLinkClick = () => {
    setIdleTransition(prev => !prev)
  }
  return (
    <footer className='footer w-full flex flex-col items-center p-4'>

      <div className="footer-contact h-10 w-fit max-w-xs mb-4">
        <Media />
      </div>

      <div className='footer-description w-full max-w-xs flex flex-col items-center'>
        <h1 className='text-base text-center leading-4 text-slate-500'>
          Built with <a className='text-slate-400' href='https://tailwindcss.com/' target="_blank" rel="noreferrer"> Tailwind CSS</a > and deployed with  <a className='text-slate-400' target="_blank" rel="noreferrer" href="https://vercel.com">Vercel </a>
        </h1>
        <h2 className='text-sm text-center leading-4 text-slate-600 m-0'>
          Insprired by <a className='text-slate-400' onMouseEnter={handleOnLinkClick} onMouseLeave={handleOnLinkClick} href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
            Brittany Chiang
            <ArrowTopRightOnSquareIcon className={`ml-1 h-3 w-auto inline transition duration-300 ease-in-out transform  ${idleTransition ? '' : childIconTransition}`} />
          </a>
        </h2>
      </div>

    </footer>
  )
}

export default Footer
