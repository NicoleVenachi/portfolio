import { useState } from "react";
import CardCategorie from "../components/CardCategorie";
import { technologies } from "../data";
import { sortJSONByCategorieAndString } from "../utils";

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const TableRow = ({ project }) => {
  //manejo de estilos en project
  const [idleTransition, setIdleTransition] = useState(true)
  const childIconTransition = '-translate-y-1 scale-110'


  const handleOnLinkClick = () => {
    setIdleTransition(prev => !prev)
  }

  //
  const projectTechnologiesSorted = (projectTechnologies) => {
    //saco technologies en el formato necesario y soteto
    const projectSkills = technologies.filter(technologie => projectTechnologies.technologies.includes(technologie.name))
    return sortJSONByCategorieAndString(projectSkills, 'priority', 'name')
  }

  return (
    <tr className="border-b-[1px] border-slate-300/10">
      <td className="py-4 pr-4 align-top text-slate-500 leading-5 text-base">{project.date.getFullYear()}</td>
      <td className="py-4 pr-4 align-top leading-5 font-medium opacity-[85%] text-lg tracking-normal">
        <a className='' onMouseEnter={handleOnLinkClick} onMouseLeave={handleOnLinkClick} href={project.link} target="_blank" rel="noreferrer">
          {project.name[0].toUpperCase() + project.name.substring(1)}
          <ArrowTopRightOnSquareIcon className={`ml-1 h-4 w-auto inline transition duration-300 ease-in-out transform  ${idleTransition ? '' : childIconTransition}`} />
        </a>
      </td>
      <td className="py-4 pr-4 align-top text-slate-500 leading-5 text-base hidden md:table-cell">{project.details[0].toUpperCase() + project.details.substring(1)}</td>

      <td className="py-4 pr-4 align-top w-[23%] hidden lg:table-cell">
        <div className="card-technologies flex w-full flex-wrap gap-x-2 gap-y-2 max-w-[840px] mb-0 gl-txt-main-font">
          {

            projectTechnologiesSorted(project).map((skill, id) => (
              <CardCategorie
                key={id}
                skill={skill}
                isFullList={false}
                isProjectsTable={true}
              />
            ))
          }

        </div>
      </td>

      <td className="py-4 pr-4 align-to hidden min-[400px]:table-cell max-[640px]:w-full">
        {(project.important[0] !== '') && (
          <div className="card-important text-base text-slate-500 leading-5 h-fit">
            <ul className="list-disc pl-4 mb-2">
              {
                project.important.map((importantLiItem, id) => (
                  <li key={id} className="mb-1">
                    {importantLiItem[0].toUpperCase() + importantLiItem.substring(1)}
                  </li>
                ))
              }
            </ul>
          </div>

        )}
      </td>
    </tr >
  )
}

export default TableRow
