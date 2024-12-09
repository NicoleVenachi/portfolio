import CardCategorie from "../components/CardCategorie";
import SectionsTitle from "../components/SectionsTitle";
import { technologies } from "../data"
import { sortJSONByCategorieAndString } from "../utils";

const Skills = () => {

  const skillsList = sortJSONByCategorieAndString(technologies, 'priority', 'name')

  return (
    <section id="skills" className="skills gl-txt-main-font">
      <SectionsTitle number={'2'} text={'Skills'} />
      <div className="skills-lists flex justify-around w-full flex-wrap gap-x-2 gap-y-3 max-w-[840px] mb-24">
        {
          skillsList.map((skill, id) => (
            <CardCategorie
              key={id}
              skill={skill}
              isFullList={true}
            />
          ))
        }

      </div>
    </section>
  )
}

export default Skills
