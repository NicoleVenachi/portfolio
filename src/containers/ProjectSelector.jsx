// import { useEffect } from "react"

const ProjectSelector = ({ projectsCategories, setProjectsCategories, isProjectsPage }) => {

  const handleCategoriesSelector = (e) => {
    const clickedLi = e.target.id.split(`/`)[1]

    //evito que al darle click al mismo, se setee de nuevo

    if (projectsCategories[clickedLi].active == false) {

      setProjectsCategories(prev => (
        prev.map((categorieObj, id) => {
          categorieObj.active = id == clickedLi ? true : false
          return categorieObj
        }) // al estao anterior, pongo en active al que di click
      ))

    }

  }

  return (
    <div className="projects-selector h-fit mt-12 cursor-pointer">
      <ul className={`gl-txt-main-font h-fit flex flex-row ${isProjectsPage ? '' : 'md:flex-col'} `}>
        {
          projectsCategories.map((categorieObj, id) => (
            <li
              className={` border-b-2 ${isProjectsPage ? '' : 'md:border-l-2 md:border-b-0'}
                  py-2 px-7 w-fit text-slate-400 tracking-widest  ${projectsCategories[id].active ? 'border-[#4F96CC] bg-[#4F96CC]/10' : 'border-white/20'} transition duration-300`}
              key={id}
              id={`li-selector/${id}`}
              onClick={handleCategoriesSelector}
            >{categorieObj.categorie.toUpperCase()}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProjectSelector
