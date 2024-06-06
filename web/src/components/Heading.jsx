

export function Heading({title, subtitle, resume}){

  return(
    <section>
      <p className="subtitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <p className="resume">{resume}</p>
    </section>
  )

}