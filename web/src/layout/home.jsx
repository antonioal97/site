import { Button } from '../components/Button'
import { Heading } from '../components/Heading'

export function Home(){
  return(
    <>
      <header>

      <nav className='navbar'>
        
        <div className='user-image'>
          <img src="https://www.github.com/antonioal97.png" alt="Este sou eu, seja bem vindo ao meu site"/>
        </div>

        <ul className="c-menu">
          <button onClick={(el)=>{
            el.currentTarget.parentElement.classList.remove('js-active')
          }} className="c-button c-menu__item js-close">Fechar</button>
          <div>
          <li className="c-menu__item">
            <a className="c-button" href="#">
              Inicio
            </a>
          </li>
          <li className="c-menu__item">
            <a className="c-button" href="#">
              Serviços
            </a>
          </li>
          <li className="c-menu__item">
            <a className="c-button" href="#">
              Contato
            </a>
          </li>
          <li className="c-menu__item">
            <a className="c-button" href="#">
              Sobre
            </a>
          </li>
          </div>
        </ul>

        <span onClick={(el)=>{
          el.currentTarget.previousElementSibling.classList.add('js-active')
        }} className="c-button c-menu__hamburguer">
          Menu
        </span>
      </nav>

      <Heading
        subtitle="Antônio Alberto"
        title="Levando seu negócio á um outro nível"
        resume="Criação de websites institucionais, landing pages e designs para web."
      />
      <div className='CallToAction'>
        <Button className="c-button" 
          copy="Contato"
          type="--brand"
        />
        <Button
          copy="Projetos"
        />
      </div>
      </header>
    </>
  )
}