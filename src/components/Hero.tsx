export function Hero() {
  return (
    <div className="">
      <div className="w-full bg-white shadow-md">
        <div className="container flex justify-between pt-5 pb-5 mx-auto ">
          <div>
            <p className="text-3xl">Receitas do Gustavo</p>
          </div>
          <div className="flex items-center space-x-16">
            <p className="text-gray-700 underline cursor-pointer">Receitas</p>
            <p className="text-gray-700 cursor-pointer hover:underline">
              Sobre Mim
            </p>
            <p className="text-gray-700 cursor-pointer hover:underline">
              Contato
            </p>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center w-full mx-auto mt-10 ">
        <h1 className="relative text-4xl tracking-wider title-header text-normal">
          Desfrute das minhas Receitas Favoritas
        </h1>
        <p className="w-7/12 pt-10 text-base italic text-center text-gray-700">
          Inspire-se com refeições que eu preparei para os meus filhos e esposa
          - eu apresento os que mais gostei. Illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo nemo enim ipsam
          voluptatem quia voluptas sit.
        </p>
      </div>
      <div className="container grid w-10/12 grid-flow-col grid-rows-2 gap-20 pt-10 pb-32 mx-auto border-b border-gray-300">
        <div className="flex flex-col justify-center">
          <img className="w-full h-64 rounded-sm" src="comida1.png" alt="" />
          <p className="pt-5 text-lg text-center">Lanche Saudável</p>
          <p className="pt-3 text-base text-center text-gray-700">
            Clique aqui e comece a escrever. Illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-full h-64 rounded-sm" src="comida2.png" alt="" />
          <p className="pt-5 text-lg text-center ">Lanche Saudável</p>
          <p className="pt-3 text-base text-center text-gray-700">
            Clique aqui e comece a escrever. Illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <img className="w-full h-64 rounded-sm" src="comida3.png" alt="" />
          <p className="pt-5 text-lg text-center">Lanche Saudável</p>
          <p className="pt-3 text-base text-center text-gray-700">
            Clique aqui e comece a escrever. Illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-full h-64 rounded-sm" src="comida4.png" alt="" />
          <p className="pt-5 text-lg text-center">Lanche Saudável</p>
          <p className="pt-3 text-base text-center text-gray-700">
            Clique aqui e comece a escrever. Illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut.
          </p>
        </div>
      </div>
      <div className="container flex flex-col items-center w-full pt-16 pb-10 mx-auto">
        <p className="text-sm tracking-wider text-gray-700 text-semibold">
          © 2020 Receitas do Gustavo. Todos os direitos reservados.
        </p>
        <p className="text-sm tracking-wider text-gray-700 text-semibold">
          Desenvolvido por{' '}
          <span className="underline cursor-pointer hover:text-black">
            Gustavo
          </span>
        </p>
      </div>
    </div>
  )
}
