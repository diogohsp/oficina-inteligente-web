const atividades = [
  {
    nome: 'Coordenação Motora',
    descricao: 'Atividades para desenvolver a coordenação motora das crianças.',
    link: 'https://drive.google.com/drive/folders/1tkY9Bzhi3wyMyQvqwJ0wSkoAKX_ZKIt_?usp=drive_link',
  },
  {
    nome: 'Caligrafia (Apenas letras)',
    descricao: 'Exercícios de caligrafia para treinar a escrita das letras.',
    link: 'https://drive.google.com/drive/folders/1Bay-LfIGpGODlcDmIKn5bICPj2WD-QiG?usp=drive_link',
  },
  {
    nome: 'Recorte Pontilhado',
    descricao:
      'Atividades de recorte para aprimorar a coordenação motora fina.',
    link: 'https://drive.google.com/drive/folders/1vC_d3Tx5sqNEpW8pikfTZ-gZTH8FCecM?usp=drive_link',
  },
  {
    nome: 'Os 5 Sentidos',
    descricao: 'Exercícios para aprender sobre os cinco sentidos.',
    link: 'https://drive.google.com/drive/folders/1Juh2-8JC--aIcH7Et3yDfaW4EDs7vHUl?usp=drive_link',
  },
  {
    nome: 'Palavra do Dia',
    descricao:
      '100 páginas de exercícios, 1 por dia, para ampliar o vocabulário.',
    link: 'https://drive.google.com/drive/folders/1ep5HiUOhbhiAPvAaz0XaF723-kuQ42jf?usp=drive_link',
  },
  {
    nome: 'Livrinhos de Cores',
    descricao: 'Atividades simples para aprender sobre as cores.',
    link: 'https://drive.google.com/drive/folders/19G8tp3Ec7OPNq0d4YWpH2dOP12y1vPUi?usp=drive_link',
  },
  {
    nome: 'Contando nos Dedos',
    descricao: 'Exercícios para aprender a contar usando os dedos.',
    link: 'https://drive.google.com/drive/folders/1HM5KbiecfV7dzOOrHQ3FDhqq2WT5Pxrz?usp=drive_link',
  },
]

export default function DesenvolvimentoInfantil() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">
        Atividades de Desenvolvimento Infantil
      </h1>
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
