
const CardCategorie = ({ skill, isFullList, isProjectsTable }) => {
  const fullListStyles = 'text-sm sm:text-base px-4 py-2'
  const smallListStyles = `text-xs px-4 py-1 ${isProjectsTable ? '' : 'sm:text-[0.84rem]'}`
  return (
    <span
      className={`card-categorie gl-txt-highlight h-fit border-transparent rounded-3xl ${isFullList ? fullListStyles : smallListStyles}`}
    >
      {skill.name[0].toUpperCase() + skill.name.substring(1)}
      {(isFullList && skill?.level) && (` ${skill.level}`)}
    </span>
  )
}

export default CardCategorie
