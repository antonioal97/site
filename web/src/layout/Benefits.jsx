import { Heading } from "../components/Heading";

export function Benefits(){
  const listContent = {
    content: [
      {
        type: 'problema',
        title: 'Disponibilidade',
        content: 'Você não está em todo lugar ao mesmo tempo, mas seus clientes estão'
      },
      {
        type: 'solução',
        title: 'Sua solução',
        content: 'Com apenas um site institucional sua empresa fica visível para o mundo todo, 24hrs por dia, 7 dias por semana.'
      },
      {
        type: 'problema',
        title: 'Falta de confiança',
        content: 'Sua empresa já está na web, mas seu site não passa segurança, clientes não encontram seu produto e você tem baixos cliques.'
      },
      {
        type: 'solução',
        title: 'Sua solução',
        content: 'Site rápido e responsivo, com certificado HTTPS que e experiência de usuário baseada em euristicas de IA.  '
      },
    ],
  }
  
  
  return(
    <>  
      <Heading
        title={"Entre na web da forma certa"}
        resume={"Segunda década do segundo milênio e você não faz idéia de porque precisa de um produto digital? Vem cá, deixa eu te mostrar!"}
      />


    {/* <ul className="benefit__list">
      <li className="benefit__item --problem">
        <div>
        <span className="c-badge">Problema</span>
        <h3 className="benefit__title">
          Disponibilidade
        </h3>

        </div>
        <p>
        Você não está em todo lugar ao mesmo tempo, mas seus clientes estão  
        </p>        
      </li>
      <li className="benefit__item">
        <div>
        <span className="c-badge">Solução</span>
        <h3 className="benefit__title">
        Sua solução
        </h3>
        </div>
        <p>
        Com apenas <u>um site institucional</u> sua empresa fica visível para o mundo todo, <u>24hrs por dia, 7 dias por semana</u>.  
        </p>
      </li>
    </ul> */}
    </>
  )
}