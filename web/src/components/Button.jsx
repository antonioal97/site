import '../styles/index.scss'


export function Button ({copy, type, icon}) {

  return(
    <>
      <a 
        className={
          "c-button"
          .concat((type != undefined ? type : ''))
        }
        href="/">{copy}</a>
    </>
  )
}