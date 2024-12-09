

const SectionsTitle = ({ number, text }) => {
  return (
    <h1 className="gl-txt-section mb-10 flex flex-nowrap items-center gl-txt-main-font">
      <span className="gl-txt-highlight gl-txt-section-number mr-[2vw] md:mr-3">0{number}. </span> <span className="font-semibold opacity-[85%]"> {text} </span>
    </h1>
  )
}

export default SectionsTitle
