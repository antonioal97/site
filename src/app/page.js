export default function Home() {
  return (
    <main className="p-6 md:p-0 h-dvh w-full grid place-items-center bg-gray-900">
      <div className="p-6 border border-gray-700/90 rounded-lg bg-gray-700/25 max-w-xl transition-shadow hover:shadow-[2px_8px_0px_0px_rgba(59,130,246),-2px_8px_0px_0px_rgba(59,130,246)] ">
        <span className="size-14 rounded-full grid place-content-center mb-12 text-[1.5rem] bg-gray-700 border border-gray-500/75">
          🚧
        </span>
        <h1 className="font-bold text-lg md:text-2xl text-gray-300 mb-2 inline-block">
          Página em construção
        </h1>
        <p className="text-base md:text-lg text-gray-400 mb-8">
          Errrh no momento este site está em reforma. Acesse meu perfil no
          Instagram para ter acesso as novidades e serviços que tenho feito!{' '}
          <a
            className="text-blue-500 inline-block relative before:block before:w-full before:bg-blue-500 before:h-[1px] before:absolute before:-bottom-[1px]"
            href="https://www.instagram.com/euantoniocorrea"
          >
            {' '}
            @euantoniocorrea
          </a>
          .
        </p>
        <div className="flex items-center justify-between gap-6 md:gap-0">
          <a
            href="https://api.whatsapp.com/send/?phone=5513998046083&text=Ol%C3%A1+Ant%C3%B4nio%2C+gostaria+de+um+or%C3%A7amento&type=phone_number&app_absent=0"
            className="px-5 py-3 bg-blue-500 hover:bg-blue-500/90 text-blue-100 text-base md:text-lg rounded-md font-medium order-2 cursor-pointer"
          >
            Quero um orçamento
          </a>
          <a
            href="https://www.behance.net/euantoniocorrea"
            className="text-gray-400 text-base md:text-lg inline-block relative before:block before:w-full before:bg-gray-400 before:h-[1px] before:absolute before:-bottom-[1px]"
          >
            Links
          </a>
        </div>
      </div>
    </main>
  )
}
