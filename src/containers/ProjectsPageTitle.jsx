import { Link } from "react-router-dom"
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { useState } from "react"

const ProjectsPageTitle = () => {

  const [idleTransition, setIdleTransition] = useState(true)
  const childIconTransition = '-translate-x-1 scale-125'


  const handleOnLinkClick = () => {
    setIdleTransition(prev => !prev)
  }

  return (
    <div className="projects-page-title">
      <Link to='/'>
        <h1 className="gl-txt-highlight text-xl w-fit m-0"
          onMouseEnter={handleOnLinkClick} onMouseLeave={handleOnLinkClick}
        >
          <ArrowSmallLeftIcon className={`ml-1 h-4 w-auto inline transition duration-300 ease-in-out transform  ${idleTransition ? '' : childIconTransition}`} /> Full portfolio </h1>
      </Link>
      <h2 className="gl-txt-main-font text-4xl sm:text-5xl tracking-tight font-semibold opacity-[85%]"> All Projects </h2>
    </div>
  )
}

export default ProjectsPageTitle
