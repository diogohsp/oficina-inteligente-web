const atividades = [
  {
    nome: 'Palavra do Dia',
    descricao:
      'Exercícios diários para ampliar o vocabulário, interdisciplinar com português.',
    link: '',
  },
  {
    nome: 'Interpretação de Texto',
    descricao:
      'Exercícios para aprimorar a compreensão de textos, interdisciplinar com português.',
    link: '',
  },
]

export default function Historia() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Atividades de História</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {atividades.map((atividade) => (
          <a
            key={atividade.nome}
            href={atividade.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-4 shadow hover:bg-blue-300 transition block"
          >
            <h2 className="text-lg font-semibold mb-2">{atividade.nome}</h2>
            <p className="text-gray-600">{atividade.descricao}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
