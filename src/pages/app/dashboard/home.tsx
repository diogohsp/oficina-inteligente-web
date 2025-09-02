import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const materias = [
    {
      nome: 'Desenvolvimento Infantil',
      descricao: 'Entenda o planeta e seus lugares.',
      path: 'materias/desenvolvimento-infantil',
    },
    {
      nome: 'Matemática',
      descricao: 'Aprenda sobre números, operações e lógica.',
      path: 'materias/matematica',
    },
    {
      nome: 'Português',
      descricao: 'Explore gramática, leitura e escrita.',
      path: 'materias/portugues',
    },
    {
      nome: 'Inglês',
      descricao: 'Explore gramática, leitura e escrita.',
      path: 'materias/ingles',
    },
    {
      nome: 'Inclusivas',
      descricao: 'Atividades inclusivas para crianças especiais.',
      path: 'materias/inclusivas',
    },
    {
      nome: 'Ciências',
      descricao: 'Descubra o mundo natural e suas leis.',
      disabled: true,
      path: 'materias/ciencias',
    },
    {
      nome: 'História',
      descricao: 'Conheça os fatos e personagens do passado.',
      disabled: true,
      path: 'materias/historia',
    },
    {
      nome: 'Geografia',
      descricao: 'Entenda o planeta e seus lugares.',
      disabled: true,
      path: 'materias/geografia',
    },
  ]

  return (
    <div className="min-h-screen grid antialiased items-center justify-center text-center overflow-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold mb-4">
          Escolha um módulo de matéria
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materias.map((materia) => (
            <button
              key={materia.nome}
              className={`border rounded-lg p-6 shadow transition w-full text-left ${
                materia.disabled
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                  : 'hover:bg-blue-300 cursor-pointer'
              }`}
              onClick={() => !materia.disabled && navigate(`/${materia.path}`)}
              disabled={!!materia.disabled}
            >
              <h2 className="text-xl font-semibold mb-2">{materia.nome}</h2>
              <p className="text-gray-600">{materia.descricao}</p>
              {materia.disabled && (
                <span className="mt-2 block text-sm font-semibold text-red-400">
                  Em desenvolvimento
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
