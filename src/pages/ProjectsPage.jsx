
import { useEffect, useState } from "react"
import ProjectsPageTitle from "../containers/ProjectsPageTitle"
import ProjectsTable from "../containers/ProjectsTable"
import { projectsMl, projectsWeb } from "../data"
import ProjectSelector from "../containers/ProjectSelector"

const ProjectsPage = () => {

  //estado para el selector
  const [projectsCategories, setProjectsCategories] = useState([{ categorie: 'web', active: true }, { categorie: 'ml', active: false }])

  //data total 
  const projectsData = projectsWeb.concat(projectsMl)

  //estados para cambiar data
  const [projects, setProjects] = useState(projectsWeb)

  const [projectsToDisplay, setProjectsToDisplay] = useState(projects)


  useEffect(() => {
    const categorieFiltered = projectsCategories.find(projectsCategorie => projectsCategorie.active)
    setProjects(
      projectsData.filter(project => project.categorie == categorieFiltered.categorie)
    )
  }, [projectsCategories])

  useEffect(() => {

    //un estado/efecto adicional, para optimizar rendeering.
    //fatal ria optinizar que no re rendice, si
    setProjectsToDisplay(projects)

  }, [projects])


  return (
    <section className="projects-page w-full py-20">
      <ProjectsPageTitle />

      <ProjectSelector projectsCategories={projectsCategories} isProjectsPage={true}
        setProjectsCategories={setProjectsCategories}
      />

      <ProjectsTable projectsData={projectsToDisplay} />
    </section>

  )
}

export default ProjectsPage
