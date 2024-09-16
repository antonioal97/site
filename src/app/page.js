export default function Home() {
  return (
    <main className="p-10 h-[100vh] flex justify-center items-center w-full bg-gray-900">
      <div className="p-8 border border-gray-700/90 rounded-lg bg-gray-700/25 max-w-xl">
        <span className="rounded-full block mb-12 text-2xl bg-gray-700 border border-gray-500/75 w-fit p-4">🚧</span>
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
            @euantoniocorrea
          </a>
          .
        </p>
        <div className="flex items-center justify-between">
          <a href="https://api.whatsapp.com/send/?phone=5513998046083&text=Ol%C3%A1+Ant%C3%B4nio%2C+gostaria+de+um+or%C3%A7amento&type=phone_number&app_absent=0" className="px-5 py-3 bg-blue-500 text-blue-100 rounded-[4px] font-medium order-2 hover:bg-blue-500/90 cursor-pointer">
            Quero um orçamento
          </a>
          <a
            href="https://www.behance.net/correantonio"
            className="text-gray-400 inline-block relative before:block before:w-full before:bg-gray-400 before:h-[1px] before:absolute before:-bottom-[1px]"
          >
            Outros links
          </a>
        </div>
      </div>
    </main>
  )
}
