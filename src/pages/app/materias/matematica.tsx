const atividades = [
  {
    nome: 'Unidades de Medidas (1º ao 5º Ano)',
    descricao: 'Exercícios sobre unidades de medidas para os primeiros anos.',
    link: 'https://drive.google.com/drive/folders/1r56x2k1TKUWXLL4k20zy059NLKa11X1b?usp=drive_link',
  },
  {
    nome: 'Exercícios de Matemática (Primeiros anos)',
    descricao: 'Atividades matemáticas para crianças em fase inicial.',
    link: 'https://drive.google.com/drive/folders/1NqLJTGIByzMdiOkeE1XwnPxoA4_kxbyf?usp=drive_link',
  },
  {
    nome: 'Apostilas de Raciocínio Lógico',
    descricao: '3 apostilas para desenvolver o raciocínio lógico.',
    link: 'https://drive.google.com/drive/folders/189Ao81L2JhmapxzMSJk8VzOljVcVI-y4?usp=drive_link',
  },
]

export default function Matematica() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Atividades de Matemática</h1>
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
