const atividades = [
  {
    nome: 'Exercícios de Inglês (Simples)',
    descricao: 'Exercícios simples para praticar inglês de forma divertida.',
    link: 'https://drive.google.com/drive/folders/18jC-kx9pUHZP8kt2EpWV9j7alFyKciGl?usp=drive_link',
  },
  {
    nome: 'Vocabulário de Inglês',
    descricao: 'Atividades para ampliar o vocabulário básico em inglês.',
    link: 'https://drive.google.com/drive/folders/1EiQOyeY5eXYiDeKFBp36dVzKxv0-AgtX?usp=drive_link',
  },
]

export default function Ingles() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold mb-4">Atividades de Inglês</h1>
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
