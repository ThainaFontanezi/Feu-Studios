export function Home() {
  return (
    <main className="pt-24 text-white">

      {/* HERO */}
      <section
        className="min-h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-bg.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              Bem-vindo à Feu Studios
            </h1>

            <p className="text-zinc-300 mb-8 max-w-xl">
              Desenvolvemos experiências digitais criativas, focadas em jogos,
              inovação e entretenimento.
            </p>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition">
              Conheça Nossos Jogos
            </button>
          </div>

          {/* Espaço visual (imagem já está no background) */}
          <div />
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        
        <div className="border border-orange-500/30 rounded-xl p-6 bg-black/40 backdrop-blur">
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Jogos Autorais
          </h3>
          <p className="text-zinc-300 text-sm">
            Projetos criados com foco em criatividade e diversão.
          </p>
        </div>

        <div className="border border-blue-500/30 rounded-xl p-6 bg-black/40 backdrop-blur">
          <h3 className="text-xl font-semibold text-orange-400 mb-2">
            Tecnologia Moderna
          </h3>
          <p className="text-zinc-300 text-sm">
            Utilizamos ferramentas modernas para máxima performance.
          </p>
        </div>

        <div className="border border-orange-500/30 rounded-xl p-6 bg-black/40 backdrop-blur">
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Equipe Criativa
          </h3>
          <p className="text-zinc-300 text-sm">
            Um time apaixonado por desenvolvimento e inovação.
          </p>
        </div>

      </section>
    </main>
  );
}
