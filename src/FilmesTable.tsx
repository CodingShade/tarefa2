import React, { useState } from 'react';


interface Filme {
  id: number;
  nome: string;
  genero: string;
  imagem: string;
}


const filmesData: Filme[] = [
  {
    id: 1,
    nome: "Homem Aranha",
    genero: "ação",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg"
  },
  {
    id: 2,
    nome: "Super Marios Bros. - O Filme",
    genero: "animação",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
  },
  {
    id: 3,
    nome: "Luther: O Cair da Noite",
    genero: "drama",
    imagem: "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg"
  },
  {
    id: 4,
    nome: "O Beco do Pesadelo",
    genero: "suspense",
    imagem: "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg"
  },
  {
    id: 5,
    nome: "Guardiães da Galáxia",
    genero: "aventura",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg"
  },
  {
    id: 6,
    nome: "Tudo em Todo o Lugar ao Mesmo Tempo",
    genero: "comédia",
    imagem: "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg"
  }
];

const FilmesTable: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');

 
  const filteredFilmes = filmesData.filter((filme) =>
    filme.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {}
      <input
        type="text"
        placeholder="Pesquisar filme..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />

      {}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nome</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gênero</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {filteredFilmes.map((filme) => (
            <tr key={filme.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{filme.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{filme.nome}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{filme.genero}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={filme.imagem} alt={filme.nome} style={{ width: '100px', height: 'auto' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmesTable;