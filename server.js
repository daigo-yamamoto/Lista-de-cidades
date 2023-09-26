const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; 

app.use(cors());

const cidades = [
    {
    nome: 'São José dos Campos',
    foto: 'https://media.istockphoto.com/id/1393381798/pt/foto/sao-jose-dos-campos-sao-paulo-brazil-04-2022-naerial-view-of-the-cable-stayed-bridge-in-s%C3%A3o.webp?s=2048x2048&w=is&k=20&c=NdLhem5V0GP9AjHd-ySkNp2pCryTI19gHdgx-jYWtG0=',
    texto: 'São José dos Campos (É um município brasileiro no interior do estado de São Paulo. Está situado no Vale do Paraíba Paulista, a leste da capital do estado. É sede da Região Metropolitana do Vale do Paraíba e Litoral Norte e ocupa uma área de 1 099,409 km², da qual 353,9 km² estão em perímetro urbano. No censo de 2022, a população do município era de 697 428 habitantes,[1] sendo o nono mais populoso de São Paulo e o 30.º de todo o país, além de ser o quinto mais populoso do Interior do Brasil. O município está integrado — junto com as regiões metropolitanas de São Paulo, Campinas, Sorocaba e Baixada Santista — ao Complexo Metropolitano Expandido, uma megalópole que ultrapassa os trinta milhões de habitantes (cerca de 75% da população paulista) e que é a primeira aglomeração urbana do tipo no hemisfério sul.',
    },
    {
    nome: 'Atibaia',
    foto: 'https://www.viagensecaminhos.com/wp-content/uploads/2023/03/o-que-fazer-em-atibaia-696x464.jpg',
    texto: 'Atibaia, oficialmente Estância Climática de Atibaia, é um município no estado de São Paulo, Brasil. Localiza-se a uma altitude de 803 metros acima do mar. É uma das onze cidades que integram a Região Imediata de Bragança Paulista, sendo a segunda cidade mais populosa desta região. A Região Imediata de Bragança Paulista é uma das onze regiões que compõem a Região Intermediária de Campinas, composta por 87 cidades. Maior economia da Região Bragantina em termos de Produto Interno Bruto (PIB), sua população, conforme censo do IBGE de 2022, é de 158 640 habitantes.No entanto, segundo o IBGE, a cidade trata-se de uma Conurbação com Bom Jesus dos Perdões, devido sua proximidade, que a torna a maior aglomeração urbana da região bragantina com mais de 180 mil habitantes.',
    },
    {
    nome: 'São Paulo',
    foto: 'https://www.telesintese.com.br/wp-content/uploads/2021/09/Sao-Paulo-Predio-Metropole-Cidade-Municipio-Parque.jpg',
    texto: 'São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.',
    },
    {
    nome: 'Caçu',
    foto: 'https://www.imperiohotel.com.br/media/imperiohotel/photogallery/95d9f880cbc29760af1be4023206621e.jpg',
    texto: 'Caçu é um município brasileiro do estado de Goiás. Sua população em 2020 era de 16 270 habitantes, de acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE). O município se localiza no extremo sudoeste goiano, entre os rios Claro, Verdinho e Paranaíba. A sede municipal encontra-se à margem direita do Rio Claro, próxima das cidades de Itarumã, Aparecida do Rio Doce, Cachoeira Alta, Quirinópolis, Paranaiguara, Itajá, Lagoa Santa, Aporé, Rio Verde e Jataí, em Goiás, e Cassilândia, em Mato Grosso do Sul. O município de Caçu limita-se com o de Santa Vitória, por meio do rio Paranaíba, na divisa entre Goiás e Minas. ',
    },
];

app.get('/', (req, res) => {
  res.json(cidades);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});