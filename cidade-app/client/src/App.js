import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cidades, setCidades] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => {
        setCidades(data);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados das cidades:', error);
      });
  }, []);

  const handleCidadeClick = (cidade) => {
    setCidadeSelecionada(cidade);
  };

  const handleCloseClick = () => {
    setCidadeSelecionada(null);
  };

  return (
    <div className="App">
      <h1>Lista de Cidades</h1>
      <ul>
        {cidades.map((cidade, index) => (
          <li key={index} onClick={() => handleCidadeClick(cidade)}>
            {cidade.nome}
          </li>
        ))}
      </ul>

      {cidadeSelecionada && (
        <div className="cidade-info">
          <h2>{cidadeSelecionada.nome}</h2>
          <img src={cidadeSelecionada.foto} alt={cidadeSelecionada.nome} />
          <p>{cidadeSelecionada.texto}</p>
          <button onClick={handleCloseClick}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default App;


