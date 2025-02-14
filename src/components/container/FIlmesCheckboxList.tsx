import React, { useState } from 'react';


interface Filme {
  id: number;
  nome: string;
  genero: string;
  imagem: string;
  checked: boolean; 
}


const filmesData: Filme[] = [
  {
    id: 1,
    nome: "Homem Aranha",
    genero: "ação",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg",
    checked: false,
  },
  {
    id: 2,
    nome: "Super Marios Bros. - O Filme",
    genero: "animação",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
    checked: false,
  },
  {
    id: 3,
    nome: "Luther: O Cair da Noite",
    genero: "drama",
    imagem: "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg",
    checked: false,
  },
  {
    id: 4,
    nome: "O Beco do Pesadelo",
    genero: "suspense",
    imagem: "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg",
    checked: false,
  },
  {
    id: 5,
    nome: "Guardiães da Galáxia",
    genero: "aventura",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg",
    checked: false,
  },
  {
    id: 6,
    nome: "Tudo em Todo o Lugar ao Mesmo Tempo",
    genero: "comédia",
    imagem: "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg",
    checked: false,
  },
];

const FilmesCheckboxList: React.FC = () => {

  const [filmes, setFilmes] = useState<Filme[]>(filmesData);


  const handleCheckboxChange = (id: number) => {
    const updatedFilmes = filmes.map((filme) =>
      filme.id === id ? { ...filme, checked: !filme.checked } : filme
    );
    setFilmes(updatedFilmes);


    const filmeSelecionado = updatedFilmes.find((filme) => filme.id === id && filme.checked);
    if (filmeSelecionado) {
      alert(`Filme selecionado: ${filmeSelecionado.nome}`);
    }
  };

  return (
    <div>
      <h2>Lista de Filmes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filmes.map((filme) => (
          <li key={filme.id} style={{ marginBottom: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={filme.checked}
                onChange={() => handleCheckboxChange(filme.id)}
                style={{ marginRight: '10px' }}
              />
              {filme.nome}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmesCheckboxList;