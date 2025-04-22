//1- Objeto com todos os canais e suas listas de players
const channels = [
  {
    channel: 'espn',
    links: [
      'https://embedcanaistv.com/espn/',
      'https://reidoscanais.cc/embed/?id=espn',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=espn',
      'https://embedtv-0.icu/espn',
      'https://nossoplayeronlinehd.com/tv/espn',
      'https://embedflix.top/tv/espn',
      'https://playertv.net/e/?v=espn'
    ]
  },
  {
    channel: 'espn 2',
    links: [
      'https://embedcanaistv.com/espn2/',
      'https://reidoscanais.cc/embed/?id=espn2',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=espn2',
      'https://embedtv-0.icu/espn2',
      'https://nossoplayeronlinehd.com/tv/espn2',
      'https://embedflix.top/tv/espn-2',
      'https://playertv.net/e/?v=espn2'
    ]
  },
  {
    channel: 'espn 3',
    links: [
      'https://embedcanaistv.com/espn3/',
      'https://reidoscanais.cc/embed/?id=espn3',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=espn3',
      'https://embedtv-0.icu/espn3',
      'https://nossoplayeronlinehd.com/tv/espn3',
      'https://embedflix.top/tv/espn-3',
      'https://playertv.net/e/?v=espn3'
    ]
  },
  {
    channel: 'espn 4',
    links: [
      'https://embedcanaistv.com/espn4/',
      'https://reidoscanais.cc/embed/?id=espn4',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=espn4',
      'https://embedtv-0.icu/espn4',
      'https://nossoplayeronlinehd.com/tv/espn4',
      'https://embedflix.top/tv/espn-4',
      'https://playertv.net/e/?v=espn4'
    ]
  },
  {
    channel: 'espn 5',
    links: [
      'https://embedcanaistv.com/espn5/',
      'https://reidoscanais.cc/embed/?id=espn5',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=espn5',
      'https://embedtv-0.icu/espn5',
      'https://nossoplayeronlinehd.com/tv/espn5',
      'https://embedflix.top/tv/espn-5',
      'https://playertv.net/e/?v=espn5'
    ]
  },
  {
    channel: 'espn 6',
    links: [
      'https://embedcanaistv.com/espn6/',
      'https://reidoscanais.cc/embed/?id=espn6',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=espn6',
      'https://embedtv-0.icu/espn6',
      'https://nossoplayeronlinehd.com/tv/espn6',
      'https://embedflix.top/tv/espn-6',
      'https://playertv.net/e/?v=espn6'
    ]
  },
  {
    channel: 'sportv',
    links: [
      'https://embedcanaistv.com/sportv/',
      'https://reidoscanais.cc/embed/?id=sportv',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=sportv1',
      'https://embedtv-0.icu/sportv',
      'https://nossoplayeronlinehd.com/tv/sportv',
      'https://embedflix.top/tv/sportv-hd',
      'https://playertv.net/e/?v=sportv'
    ]
  },
  {
    channel: 'sportv 2',
    links: [
      'https://embedcanaistv.com/sportv2/',
      'https://reidoscanais.cc/embed/?id=sportv2',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=sportv2',
      'https://embedtv-0.icu/sportv2',
      'https://nossoplayeronlinehd.com/tv/sportv2',
      'https://embedflix.top/tv/sportv-2-hd',
      'https://playertv.net/e/?v=sportv2'
    ]
  },
  {
    channel: 'sportv 3',
    links: [
      'https://embedcanaistv.com/sportv3/',
      'https://reidoscanais.cc/embed/?id=sportv3',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=sportv3',
      'https://embedtv-0.icu/sportv3',
      'https://nossoplayeronlinehd.com/tv/sportv3',
      'https://embedflix.top/tv/sportv-3-hd',
      'https://playertv.net/e/?v=sportv3'
    ]
  },
  {
    channel: 'premiere clubes',
    links: [
      'https://embedcanaistv.com/premiereclubes/',
      'https://reidoscanais.cc/embed/?id=premiereclubes',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=premiereclubes',
      'https://embedtv-0.icu/premiere',
      'https://nossoplayeronlinehd.com/tv/premiere',
      'https://embedflix.top/tv/prfc-1-hd',
      'https://playertv.net/premiere/'
    ]
  },
  {
    channel: 'premiere fc',
    links: [
      'https://embedcanaistv.com/premiereclubes/',
      'https://reidoscanais.cc/embed/?id=premiereclubes',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=premiereclubes',
      'https://embedtv-0.icu/premiere',
      'https://nossoplayeronlinehd.com/tv/premiere',
      'https://embedflix.top/tv/prfc-1-hd',
      'https://playertv.net/premiere/'
    ]
  },
  {
    channel: 'premiere 2',
    links: [
      'https://embedcanaistv.com/premiere2/',
      'https://reidoscanais.cc/embed/?id=premiere2',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=premiere2',
      'https://embedtv-0.icu/premiere2',
      'https://nossoplayeronlinehd.com/tv/premiere2',
      'https://embedflix.top/tv/prfc-2-hd',
      'https://playertv.net/e/?v=premiere2'
    ]
  },
  {
    channel: 'premiere 3',
    links: [
      'https://embedcanaistv.com/premiere3/',
      'https://reidoscanais.cc/embed/?id=premiere3',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=premiere3',
      'https://embedtv-0.icu/premiere3',
      'https://nossoplayeronlinehd.com/tv/premiere3',
      'https://embedflix.top/tv/prfc-3-hd',
      'https://playertv.net/e/?v=premiere3'
    ]
  },
  {
    channel: 'premiere 4',
    links: [
      'https://embedcanaistv.com/premiere4/',
      'https://reidoscanais.cc/embed/?id=premiere4',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=premiere4',
      'https://embedtv-0.icu/premiere4',
      'https://nossoplayeronlinehd.com/tv/premiere4',
      'https://embedflix.top/tv/prfc-4-hd',
      'https://playertv.net/e/?v=premiere4'
    ]
  },
  {
    channel: 'bandsports',
    links: [
      'https://embedcanaistv.com/bandsports/',
      'https://reidoscanais.cc/embed/?id=bandsports',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=bandsports',
      'https://embedtv-0.icu/bandsports',
      'https://nossoplayeronlinehd.com/tv/bandsports',
      'https://embedflix.top/tv/bandsport',
      'https://playertv.net/e/?v=bandSports'
    ]
  },
  {
    channel: 'combate',
    links: [
      'https://embedcanaistv.com/combate/',
      'https://reidoscanais.cc/embed/?id=combate',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=combate',
      'https://embedtv-0.icu/combate',
      'https://nossoplayeronlinehd.com/tv/combate',
      'https://embedflix.top/tv/combate',
      'https://playertv.net/e/?v=combate'
    ]
  },
  {
    channel: 'Cazé TV',
    links: [
      'https://embedcanaistv.com/cazetv/',
      'https://reidoscanais.cc/embed/?id=cazetv',
      'https://embedtv-0.icu/caze1',
      'https://nossoplayeronlinehd.com/tv/caze1',
      'https://playertv.net/e/?v=caze1',

      'https://reidoscanais.cc/embed/?id=cazetv2',
      'https://embedtv-0.icu/caze2',
      'https://nossoplayeronlinehd.com/tv/caze2',
      'https://playertv.net/e/?v=caze2',

      'https://reidoscanais.cc/embed/?id=cazetv3',
      'https://embedtv-0.icu/caze3',
      'https://nossoplayeronlinehd.com/tv/caze3',
      'https://playertv.net/e/?v=caze3'
    ]
  },
  {
    channel: 'TNT',
    links: [
      'https://embedcanaistv.com/tnt/',
      'https://reidoscanais.cc/embed/?id=tnt',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=tnt',
      'https://embedtv-0.icu/tnt',
      'https://nossoplayeronlinehd.com/tv/tnt',
      'https://embedflix.top/tv/tnt',
      'https://playertv.net/e/?v=tnt'
    ]
  },
  {
    channel: 'Globo SP',
    links: [
      'https://embedcanaistv.com/globosp/',
      'https://reidoscanais.cc/embed/?id=globosp-globosaopaulo',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=bobosp',
      'https://embedtv-0.icu/globosp',
      'https://nossoplayeronlinehd.com/tv/globosp',
      'https://embedflix.top/tv/globo-sp',
      'https://playertv.net/e/?v=globoSP'
    ]
  },
  {
    channel: 'Globo RJ',
    links: [
      'https://embedcanaistv.com/globorj/',
      'https://reidoscanais.cc/embed/?id=globorj-globorio',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=boborj',
      'https://embedtv-0.icu/globorj',
      'https://nossoplayeronlinehd.com/tv/globo_rj',
      'https://embedflix.top/tv/globo-rio',
      'https://playertv.net/e/?v=globoRJ'
    ]
  },
  {
    channel: 'Globo MG',
    links: [
      'https://embedcanaistv.com/globomg/',
      'https://reidoscanais.cc/embed/?id=globomg-globominas',
      'https://nossoplayeronlinehd.com/tv/globomg',
      'https://embedflix.top/tv/globo-minas',
      'https://playertv.net/e/?v=globoMG'
    ]
  },
  {
    channel: 'record',
    links: [
      'https://embedcanaistv.com/recordsp/',
      'https://reidoscanais.cc/embed/?id=recordsp',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=record',
      'https://embedtv-0.icu/record',
      'https://nossoplayeronlinehd.com/tv/record',
      'https://embedflix.top/tv/record-tv-sp',
      'https://playertv.net/e/?v=recordSP'
    ]
  },
  {
    channel: 'Band',
    links: [
      'https://embedcanaistv.com/bandsp/',
      'https://reidoscanais.cc/embed/?id=band',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=band',
      'https://embedtv-0.icu/band',
      'https://nossoplayeronlinehd.com/tv/band',
      'https://embedflix.top/tv/band-tv-sp',
      'https://playertv.net/e/?v=band'
    ]
  },
  {
    channel: 'UFC Fight Pass',
    links: [
      'https://embedcanaistv.com/ufcfightpass/',
      'https://reidoscanais.cc/embed/?id=ufcfightpass',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=ufcfightpass',
      'https://embedtv-0.icu/ufcfightpass',
      'https://nossoplayeronlinehd.com/tv/ufcfightpass',
      'https://embedflix.top/tv/ufc-fight-pass-hd'
    ]
  },
  {
    channel: 'redetv!',
    links: [
      'https://embedcanaistv.com/redetv/',
      'https://reidoscanais.cc/embed/?id=redetv',
      '//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=redetv',
      'https://nossoplayeronlinehd.com/tv/redetv',
      'https://embedflix.top/tv/redetv',
      'https://playertv.net/e/?v=redetv'
    ]
  },
  {
    channel: 'tv brasil',
    links: [
      'https://reidoscanais.cc/embed/?id=tvbrasil',
      'https://embedmax.site/tvl/tvbrasil.php'
    ]
  }
]
//2- Função que faz requisição fetch de um JSON e retorna um objeto que exibe informações de jogos de hoje

const jogos = [
  {
    "team1": {
      "name": "Dhamk",
      "logo": "https://www.futebolnatv.com.br/upload/teams/3cc877cccc712c77ba3f6a064e00ab7f.png"
    },
    "team2": {
      "name": "Al-Nassr",
      "logo": "https://www.futebolnatv.com.br/upload/teams/b159d7d40e0cce98efe60956e5f67ff6.png"
    },
    "time": "13:05",
    "championship": "Campeonato Saudita - Rodada 29",
    "channels": [
      "CANAL GOAT"
    ]
  },
  {
    "team1": {
      "name": "Grazer AK",
      "logo": "https://www.futebolnatv.com.br/upload/teams/1c7343c7f5b6d5e4cf61cdfaa73f6b6f.png"
    },
    "team2": {
      "name": "TSV Hartberg",
      "logo": "https://www.futebolnatv.com.br/upload/teams/af6ea2657fba8f2c1b79ca3676f6205e.png"
    },
    "time": "13:30",
    "championship": "Campeonato Austríaco - Relegation Round - 5",
    "channels": [
      "ONEFOOTBALL"
    ]
  },
  {
    "team1": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "team2": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "time": "Horário não disponível",
    "championship": "Campeonato não encontrado",
    "channels": [
      "Nenhum canal disponível"
    ]
  },
  {
    "team1": {
      "name": "WSG (F)attens",
      "logo": "https://www.futebolnatv.com.br/upload/teams/e28f5684ac786912b6eb941bf2d6b806.png"
    },
    "team2": {
      "name": "SCR Altach",
      "logo": "https://www.futebolnatv.com.br/upload/teams/dc94f455dd79040ddef3ead664395d3e.png"
    },
    "time": "13:30",
    "championship": "Campeonato Austríaco - Relegation Round - 5",
    "channels": [
      "ONEFOOTBALL"
    ]
  },
  {
    "team1": {
      "name": "Valencia",
      "logo": "https://www.futebolnatv.com.br/upload/teams/4e8ac781daf20ecb0469f46b39bb88d4.png"
    },
    "team2": {
      "name": "Espanyol",
      "logo": "https://www.futebolnatv.com.br/upload/teams/a72f9f6e66f143e4c35be38844f099e1.png"
    },
    "time": "14:00",
    "championship": "La Liga - Rodada 33",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Austria Klagenfurt",
      "logo": "https://www.futebolnatv.com.br/upload/teams/475655251fa3bc6d543258351acec4c3.png"
    },
    "team2": {
      "name": "Lask Linz",
      "logo": "https://www.futebolnatv.com.br/upload/teams/09039c918546e8612516bd55b5996313.png"
    },
    "time": "15:30",
    "championship": "Campeonato Austríaco - Relegation Round - 5",
    "channels": [
      "ONEFOOTBALL"
    ]
  },
  {
    "team1": {
      "name": "Nantes",
      "logo": "https://www.futebolnatv.com.br/upload/teams/e5334e98f6627a903373565599cc1748.png"
    },
    "team2": {
      "name": "PSG",
      "logo": "https://www.futebolnatv.com.br/upload/teams/70c167fbfb6422904701e4e4d0c7dc95.png"
    },
    "time": "15:45",
    "championship": "Campeonato Francês - Rodada 29",
    "channels": [
      "CAZÉ TV"
    ]
  },
  {
    "team1": {
      "name": "Manchester City",
      "logo": "https://www.futebolnatv.com.br/upload/teams/bf26998e219811716109c201be0d5a36.png"
    },
    "team2": {
      "name": "Aston Villa",
      "logo": "https://www.futebolnatv.com.br/upload/teams/0383e639b3cf1b6e48641c30f337056a.png"
    },
    "time": "16:00",
    "championship": "Campeonato Inglês - Rodada 34",
    "channels": [
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Barcelona",
      "logo": "https://www.futebolnatv.com.br/upload/teams/60f77a3c39c22337133cc3d02af99e66.png"
    },
    "team2": {
      "name": "Mallorca",
      "logo": "https://www.futebolnatv.com.br/upload/teams/230fbcf5a7e19592e479ae04e4fcb4e1.png"
    },
    "time": "16:30",
    "championship": "La Liga - Rodada 33",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "team2": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "time": "Horário não disponível",
    "championship": "Campeonato não encontrado",
    "channels": [
      "Nenhum canal disponível"
    ]
  },
  {
    "team1": {
      "name": "Rio Ave",
      "logo": "https://www.futebolnatv.com.br/upload/teams/ac19af7915918c448ef0c6c91d728420.png"
    },
    "team2": {
      "name": "Sporting CP",
      "logo": "https://www.futebolnatv.com.br/upload/teams/3e81e1988ef101efa4860754023ee78c.png"
    },
    "time": "16:45",
    "championship": "Taça de Portugal - Semifinal",
    "channels": [
      "NSPORTS"
    ]
  },
  {
    "team1": {
      "name": "Tigre",
      "logo": "https://www.futebolnatv.com.br/upload/teams/77040416f4458ab24dd053d895d686c2.png"
    },
    "team2": {
      "name": "Belgrano Cordoba",
      "logo": "https://www.futebolnatv.com.br/upload/teams/1YQVhMVvNXiGUHwMUTom8IuckrTTdmG1HdXzPWLn.png"
    },
    "time": "19:00",
    "championship": "Campeonato Argentino - 1ª Fase - Rodada 14",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "LDU de Quito",
      "logo": "https://www.futebolnatv.com.br/upload/teams/2e2c7e4425603acc9cc192e8d5e45bd1.png"
    },
    "team2": {
      "name": "Flamengo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/680934bef5649e33691eae03c1989d23.png"
    },
    "time": "19:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "CAZÉ TV",
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Alianza Lima",
      "logo": "https://www.futebolnatv.com.br/upload/teams/c5db85da0525dcc1901dcd016fe284b7.png"
    },
    "team2": {
      "name": "Talleres Cordoba",
      "logo": "https://www.futebolnatv.com.br/upload/teams/b6b7e50804a9d17a0f28ee004ffd963a.png"
    },
    "time": "19:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Carabobo FC",
      "logo": "https://www.futebolnatv.com.br/upload/teams/3a58d15f264af057f46f7a9f8bedbb9c.png"
    },
    "team2": {
      "name": "Universidad de Chile",
      "logo": "https://www.futebolnatv.com.br/upload/teams/76736b696befe35cac5deaa4510fc026.png"
    },
    "time": "19:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Club Guarani",
      "logo": "https://www.futebolnatv.com.br/upload/teams/9c19d25c79dd647e931b34d2ea4c079f.png"
    },
    "team2": {
      "name": "Independiente",
      "logo": "https://www.futebolnatv.com.br/upload/teams/4786a9738595fbe059cf19a6f9221c71.png"
    },
    "time": "19:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "team2": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "time": "Horário não disponível",
    "championship": "Campeonato não encontrado",
    "channels": [
      "Nenhum canal disponível"
    ]
  },
  {
    "team1": {
      "name": "Boston River",
      "logo": "https://www.futebolnatv.com.br/upload/teams/e936497b4f7b2a16f84576015121e59f.png"
    },
    "team2": {
      "name": "Nacional Potosi",
      "logo": "https://www.futebolnatv.com.br/upload/teams/5e73b2b968bafba9ae55409d59f475cc.png"
    },
    "time": "19:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Atlético GO",
      "logo": "https://www.futebolnatv.com.br/upload/teams/cfd906634ba3c4bb4855b7ac15293ec8.png"
    },
    "team2": {
      "name": "Cuiabá",
      "logo": "https://www.futebolnatv.com.br/upload/teams/a55723bd105796cc7e79a044fa656b96.png"
    },
    "time": "19:30",
    "championship": "Brasileirão Série B - Rodada 4",
    "channels": [
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Independ. Rivadavia",
      "logo": "https://www.futebolnatv.com.br/upload/teams/b68d9d7362b3d6730199c3261aeb43bb.png"
    },
    "team2": {
      "name": "Aldosivi",
      "logo": "https://www.futebolnatv.com.br/upload/teams/04e4f0f5735650fc76f12e917995e74d.png"
    },
    "time": "21:15",
    "championship": "Campeonato Argentino - 1ª Fase - Rodada 14",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Internacional",
      "logo": "https://www.futebolnatv.com.br/upload/teams/57b9e4f70dff737964be642fdeab71a8.png"
    },
    "team2": {
      "name": "Club Nacional",
      "logo": "https://www.futebolnatv.com.br/upload/teams/83a73a5c22aa9952e10e9b4447e5525c.png"
    },
    "time": "21:30",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "CAZÉ TV",
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "team2": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "time": "Horário não disponível",
    "championship": "Campeonato não encontrado",
    "channels": [
      "Nenhum canal disponível"
    ]
  },
  {
    "team1": {
      "name": "Colo Colo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/d43af2afab7339e2fa5495396c28046b.png"
    },
    "team2": {
      "name": "Racing Club",
      "logo": "https://www.futebolnatv.com.br/upload/teams/95d13d3d1e9be2e2967b0d12b0f5c99b.png"
    },
    "time": "21:30",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Vasco",
      "logo": "https://www.futebolnatv.com.br/upload/teams/f3809186a5b461aeea5583666aad6156.png"
    },
    "team2": {
      "name": "Lanus",
      "logo": "https://www.futebolnatv.com.br/upload/teams/6e7adf72df4bb32f0d2cf786d2ddee14.png"
    },
    "time": "21:30",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "CAZÉ TV",
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Gualberto Villarroel SJ",
      "logo": "https://www.futebolnatv.com.br/upload/teams/9b4c29a9827c1f471ed543720f48ca46.png"
    },
    "team2": {
      "name": "Once Caldas",
      "logo": "https://www.futebolnatv.com.br/upload/teams/89c15b0378a6119cc6fe3b1e9faa95f1.png"
    },
    "time": "21:30",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Barcelona SC",
      "logo": "https://www.futebolnatv.com.br/upload/teams/d04d0ded84f7e94f245006e6f546fcd6.png"
    },
    "team2": {
      "name": "Universitario",
      "logo": "https://www.futebolnatv.com.br/upload/teams/b8272a964389cc56e9eddbafb1b85525.png"
    },
    "time": "23:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "FBC Melgar",
      "logo": "https://www.futebolnatv.com.br/upload/teams/d2b8e1ff6b7e14983de5a96392e058b1.png"
    },
    "team2": {
      "name": "Puerto Cabello",
      "logo": "https://www.futebolnatv.com.br/upload/teams/a4c749e53623d6aa9afd5d8c7dcf9072.png"
    },
    "time": "23:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "team2": {
      "name": "Desconhecido",
      "logo": "https://www.futebolnatv.com.brundefined"
    },
    "time": "Horário não disponível",
    "championship": "Campeonato não encontrado",
    "channels": [
      "Nenhum canal disponível"
    ]
  }
]

//3- Montar uma função que pega cada jogo do objeto de jogos de hoje e gera ou não opções de players baseado no objeto que contém os canais

//função que gera as thumbs de cada jogo
function makeThumbsGames() {
  const section = document.querySelector('#soccer-live')
  jogos.reverse().forEach((obj) => {

    if (!(obj.channels[0] == 'Nenhum canal disponível' || obj.channels[0] == 'Nenhum canal disponível')) {

      obj.channels.forEach((c) => {
        channels.forEach((canal) => {
          if (c.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == canal.channel.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
            const article = document.createElement('article')
            article.setAttribute('data-channels', JSON.stringify(obj.channels))//coloca os canais no data-attribute do article

            const divHour = document.createElement('div')
            divHour.className = 'hour-match'

            const spanHour = document.createElement('span')
            spanHour.innerText = obj.time

            const divMatchTeams = document.createElement('div')
            divMatchTeams.className = 'match-teams'

            const figure1 = document.createElement('figure')
            figure1.className = 'team'

            const img1 = document.createElement('img')
            img1.src = obj.team1.logo

            const figCaption1 = document.createElement('figcaption')
            figCaption1.innerText = obj.team1.name

            const divVersus = document.createElement('div')
            divVersus.className = 'versus'

            const spanVersus = document.createElement('span')

            const iVersus = document.createElement('i')
            iVersus.classList.add('fa-solid', 'fa-xmark')
            iVersus.setAttribute('aria-label', 'versus')

            const figure2 = document.createElement('figure')
            figure2.className = 'team'

            const img2 = document.createElement('img')
            img2.src = obj.team2.logo

            const figCaption2 = document.createElement('figcaption')
            figCaption2.innerText = obj.team2.name

            const divChampeonship = document.createElement('div')
            divChampeonship.className = 'champeonship'

            const spanChampeonship = document.createElement('span')
            spanChampeonship.innerText = obj.championship

            const iPlay = document.createElement('i')
            iPlay.classList.add('fa-solid', 'fa-circle-play')

            //montar thumb

            //horas
            divHour.appendChild(spanHour)

            //logo time1
            figure1.append(img1, figCaption1)

            spanVersus.appendChild(iVersus)
            divVersus.appendChild(spanVersus)

            //logo time2
            figure2.append(img2, figCaption2)

            divMatchTeams.append(figure1, divVersus, figure2)

            //champeonship
            divChampeonship.appendChild(spanChampeonship)

            article.append(divHour, divMatchTeams, divChampeonship, iPlay)

            section.appendChild(article)
          }
        })
      })

    }

  })
}

makeThumbsGames()

//função que mostra os players de cada jogo ao clicar na thumb do jogo
function showMatchPlayers(e) {
  e.stopPropagation()

  if (e.target.id !== 'btns-modal' && e.target.className !== 'btn') {//verifica se o elemento clicado não é o botão de fechar o modal ou o botão de opção de player
    const playersModal = document.querySelector('.players-modal')
    const btns = document.querySelectorAll('#btns-modal button');
    const screenModal = document.querySelector('#screen-modal iframe');

    screenModal.src = ''

    playersModal.classList.toggle('active') //ativa ou desativa o modal de players

    if (btns[0]?.value) {
      screenModal.src = btns[0].value//coloca o primeiro player na tela do modal
      //adiciona o evento de click em cada botão de player para trocar o src do iframe
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          screenModal.src = btn.value;
        });
      });
    }
  }

}

//função que insere os players de cada jogo no modal de players

function insetPlayers(e) {
  e.stopPropagation()
  e.preventDefault()
  const btn = document.querySelector('#btns-modal');
  btn.innerHTML = ''

  const matchChannels = JSON.parse(e.currentTarget.dataset.channels)


  matchChannels.forEach((canal) => {

    channels.forEach((obj) => {
      let n = 0
      if (canal.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == obj.channel.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
        obj.links.forEach((link) => {
          n++
          btn.innerHTML += `<button value="${link}" class="btn">opção ${n}</button>`
        })

      }

    })

  })

}
const arrEvents = Array.from(document.querySelectorAll('#soccer-live article'))

arrEvents.forEach((article) => {
  article.addEventListener('click', insetPlayers)
})

arrEvents.push(document.querySelector('#close-modal'), document.querySelector('.players-modal'))

arrEvents.forEach((article) => {
  article.addEventListener('click', showMatchPlayers)
})




