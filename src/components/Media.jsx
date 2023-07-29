import IconGitHub from "../assets/icons/github"
import IconLinkedin from "../assets/icons/linkedin"

const Media = () => {

  return (
    <ul className="media-list w-full h-full flex justify-between m-0">
      <li className="w-auto h-full pr-10">
        <a href="/#">
          <IconLinkedin />
        </a>
      </li>
      <li className="w-auto h-full pr-10">
        <a href="https://github.com/NicoleVenachi" target="_blank" rel="noreferrer">
          <IconGitHub />
        </a>
      </li>
    </ul>
  )
}

export default Media
