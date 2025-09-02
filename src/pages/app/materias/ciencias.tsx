const atividades = [
  {
    nome: 'Os 5 Sentidos',
    descricao: 'Exercícios para aprender sobre os cinco sentidos.',
    link: '',
  },
  {
    nome: 'Contando nos Dedos',
    descricao:
      'Exercícios para aprender a contar usando os dedos, interdisciplinar com matemática.',
    link: '',
  },
]

export default function Ciencias() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Atividades de Ciências</h1>
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
