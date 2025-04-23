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
      "name": "FC BW Linz",
      "logo": "https://www.futebolnatv.com.br/upload/teams/e61f5a38cb186203d7a18904151943e0.png"
    },
    "team2": {
      "name": "Rapid Vienna",
      "logo": "https://www.futebolnatv.com.br/upload/teams/fdcf654388815aa1545e8811bdac9b3d.png"
    },
    "time": "13:30",
    "championship": "Campeonato Austríaco - Championship Round - 5",
    "channels": [
      "ONEFOOTBALL"
    ]
  },
  {
    "team1": {
      "name": "Red Bull Salzburg",
      "logo": "https://www.futebolnatv.com.br/upload/teams/040461791042f488b3d11bb8f4bc4a15.png"
    },
    "team2": {
      "name": "Wolfsberger AC",
      "logo": "https://www.futebolnatv.com.br/upload/teams/876cafabf71c3bd75522ebb4eb62a34e.png"
    },
    "time": "13:30",
    "championship": "Campeonato Austríaco - Championship Round - 5",
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
      "name": "Parma",
      "logo": "https://www.futebolnatv.com.br/upload/teams/f9da1f15054b650395dcca8d545d0012.png"
    },
    "team2": {
      "name": "Juventus",
      "logo": "https://www.futebolnatv.com.br/upload/teams/7e17d6ad4d868addfb74f87b1f45b046.png"
    },
    "time": "13:30",
    "championship": "Campeonato Italiano - Rodada 33",
    "channels": [
      "ESPN",
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Genoa",
      "logo": "https://www.futebolnatv.com.br/upload/teams/2c631b3987b271a84cf27d7a4524cbe4.png"
    },
    "team2": {
      "name": "Lazio",
      "logo": "https://www.futebolnatv.com.br/upload/teams/6a04f494972b27f48ea5a2d75dea498e.png"
    },
    "time": "13:30",
    "championship": "Campeonato Italiano - Rodada 33",
    "channels": [
      "ESPN 4",
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Cagliari",
      "logo": "https://www.futebolnatv.com.br/upload/teams/4529b91564dd18e80cf6a4ed65005573.png"
    },
    "team2": {
      "name": "Fiorentina",
      "logo": "https://www.futebolnatv.com.br/upload/teams/3a3b2e34e60b1ebd8911d486b5bd0ce3.png"
    },
    "time": "13:30",
    "championship": "Campeonato Italiano - Rodada 33",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Athletic Club",
      "logo": "https://www.futebolnatv.com.br/upload/teams/208b620436a0f8c9d7fb5791f2e62712.png"
    },
    "team2": {
      "name": "Las Palmas",
      "logo": "https://www.futebolnatv.com.br/upload/teams/64d88086e9c7e2debe976cf028faff37.png"
    },
    "time": "14:00",
    "championship": "La Liga - Rodada 33",
    "channels": [
      "ESPN 4",
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Celta Vigo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/856766931df1d3d202c6d545ed8e0a44.png"
    },
    "team2": {
      "name": "Villarreal",
      "logo": "https://www.futebolnatv.com.br/upload/teams/417859af07d4b65a9eaadc15103c12ae.png"
    },
    "time": "14:00",
    "championship": "La Liga - Rodada 33",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Chelsea (F)",
      "logo": "https://www.futebolnatv.com.br/upload/teams/z8VaOFiWbgrpzlGCS22Ticn7dI1aCmiXlT8V1zAc.png"
    },
    "team2": {
      "name": "Crystal Palace (F)",
      "logo": "https://www.futebolnatv.com.br/upload/teams/98cb483e415b8e70186a074d038936f0.png"
    },
    "time": "15:15",
    "championship": "Campeonato Inglês Feminino - Rodada 19",
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
      "name": "Antwerp",
      "logo": "https://www.futebolnatv.com.br/upload/teams/12f43c1610d8d135030ba1202622c8f5.png"
    },
    "team2": {
      "name": "Genk",
      "logo": "https://www.futebolnatv.com.br/upload/teams/990fec737e96c31916f06cca3fbab953.png"
    },
    "time": "15:30",
    "championship": "Campeonato Belga - Championship Round - 5",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Anderlecht",
      "logo": "https://www.futebolnatv.com.br/upload/teams/320f2ecc6d6292c5110719bb10d7293a.png"
    },
    "team2": {
      "name": "Gent",
      "logo": "https://www.futebolnatv.com.br/upload/teams/99471316f06bb5f37545e0de7b2911c0.png"
    },
    "time": "15:30",
    "championship": "Campeonato Belga - Championship Round - 5",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Austria Vienna",
      "logo": "https://www.futebolnatv.com.br/upload/teams/836246f5a2b3064cf00198b3ee4195a6.png"
    },
    "team2": {
      "name": "Sturm Graz",
      "logo": "https://www.futebolnatv.com.br/upload/teams/dbf60813964be0e99aca665bc4d40daa.png"
    },
    "time": "15:30",
    "championship": "Campeonato Austríaco - Championship Round - 5",
    "channels": [
      "ONEFOOTBALL"
    ]
  },
  {
    "team1": {
      "name": "Inter",
      "logo": "https://www.futebolnatv.com.br/upload/teams/e934ecd3fe3a8be7cb7035b0c52adc14.png"
    },
    "team2": {
      "name": "AC Milan",
      "logo": "https://www.futebolnatv.com.br/upload/teams/4ab264eefa3ff52c2335e6611765c663.png"
    },
    "time": "16:00",
    "championship": "Copa Itália - Semifinal",
    "channels": [
      "CAZÉ TV",
      "NSPORTS"
    ]
  },
  {
    "team1": {
      "name": "Arsenal",
      "logo": "https://www.futebolnatv.com.br/upload/teams/77cad6aa73e055a1fd3947042445f633.png"
    },
    "team2": {
      "name": "Crystal Palace",
      "logo": "https://www.futebolnatv.com.br/upload/teams/62d6ff90229922170cac4f5cc0b177dd.png"
    },
    "time": "16:00",
    "championship": "Campeonato Inglês - Rodada 34",
    "channels": [
      "ESPN 4",
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Benfica",
      "logo": "https://www.futebolnatv.com.br/upload/teams/ba7c916112648742083ef9f47fb9bac9.png"
    },
    "team2": {
      "name": "Tirsense",
      "logo": "https://www.futebolnatv.com.br/upload/teams/780f0baab254797b70a81202777e08ee.png"
    },
    "time": "16:15",
    "championship": "Taça de Portugal - Semifinal",
    "channels": [
      "NSPORTS"
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
      "name": "Getafe",
      "logo": "https://www.futebolnatv.com.br/upload/teams/1105b3728fe7a30ed0a75b61061f98d3.png"
    },
    "team2": {
      "name": "Real Madrid",
      "logo": "https://www.futebolnatv.com.br/upload/teams/1630165beb648960865f2fdadb95cd4f.png"
    },
    "time": "16:30",
    "championship": "La Liga - Rodada 33",
    "channels": [
      "ESPN",
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Alavés",
      "logo": "https://www.futebolnatv.com.br/upload/teams/cfaa2e40f24e3f6f3a921a9f6b39f8ff.png"
    },
    "team2": {
      "name": "Real Sociedad",
      "logo": "https://www.futebolnatv.com.br/upload/teams/74ce7503f8a4cb4695cb0bdd8f7aa6b2.png"
    },
    "time": "16:30",
    "championship": "La Liga - Rodada 33",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Vasco Sub-20",
      "logo": "https://www.futebolnatv.com.br/upload/teams/cA05z3yLKjOQ3Uo6QCyN8kHWqxVnTZy0FMmBXZr2.png"
    },
    "team2": {
      "name": "São Paulo U20",
      "logo": "https://www.futebolnatv.com.br/upload/teams/IJruyHYglDTQJoD0895unUxGoJmbEpDwuVAoNd9c.png"
    },
    "time": "18:00",
    "championship": "Brasileiro Sub-20 - 1ª Fase - Rodada 7",
    "channels": [
      "SPORTV"
    ]
  },
  {
    "team1": {
      "name": "Union Espanola",
      "logo": "https://www.futebolnatv.com.br/upload/teams/b619bf790bd566bf39a504205868afef.png"
    },
    "team2": {
      "name": "Fluminense",
      "logo": "https://www.futebolnatv.com.br/upload/teams/9ef75dd3dddfc3472164bf4093b42932.png"
    },
    "time": "19:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "ESPN",
      "DISNEY+",
      "CAZÉ TV"
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
      "name": "Olimpia",
      "logo": "https://www.futebolnatv.com.br/upload/teams/369d659da7dfc58918820ac724e04085.png"
    },
    "team2": {
      "name": "Penãrol",
      "logo": "https://www.futebolnatv.com.br/upload/teams/cfa9f70d17fc12f219a36271d33c7165.png"
    },
    "time": "19:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "ESPN 4",
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "San Antonio Bulo Bulo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/7ce5b9aa039a6a95413ec4a0dc730ffc.png"
    },
    "team2": {
      "name": "Velez Sarsfield",
      "logo": "https://www.futebolnatv.com.br/upload/teams/6724c2080e45f43b2ba3f8106cfe3cd0.png"
    },
    "time": "19:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "ESPN 3",
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Huracan",
      "logo": "https://www.futebolnatv.com.br/upload/teams/a982a37d1361a674a55d518eac4b61e6.png"
    },
    "team2": {
      "name": "America de Cali",
      "logo": "https://www.futebolnatv.com.br/upload/teams/0dab46c9f330f7848d82713876ecc6a8.png"
    },
    "time": "19:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Estudiantes",
      "logo": "https://www.futebolnatv.com.br/upload/teams/41343a52a76417388aed579edcae2b99.png"
    },
    "team2": {
      "name": "Botafogo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/0c4950a285216e58387ebd7ae8e49cf1.png"
    },
    "time": "21:30",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "GLOBO",
      "ESPN 4",
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Caracas FC",
      "logo": "https://www.futebolnatv.com.br/upload/teams/03b3ef270d4452aa7c0559ebc802ed64.png"
    },
    "team2": {
      "name": "Atlético-MG",
      "logo": "https://www.futebolnatv.com.br/upload/teams/427d5b92e3e9fa5bf9be94c055f32383.png"
    },
    "time": "21:30",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Vitória",
      "logo": "https://www.futebolnatv.com.br/upload/teams/3bb8aa492c0330b0e70c2e26f0f91091.png"
    },
    "team2": {
      "name": "Cerro Largo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/6b6f88bdc1cad057107fdcdbc15debd2.png"
    },
    "time": "21:30",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Libertad Asuncion",
      "logo": "https://www.futebolnatv.com.br/upload/teams/674afb46442853c4ddec77f3c6303206.png"
    },
    "team2": {
      "name": "São Paulo",
      "logo": "https://www.futebolnatv.com.br/upload/teams/2fc3a68638eb1fd81631050de8800dea.png"
    },
    "time": "21:30",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "GLOBO",
      "ESPN",
      "DISNEY+"
    ]
  },
  {
    "team1": {
      "name": "Independiente del Valle",
      "logo": "https://www.futebolnatv.com.br/upload/teams/ndrZmsX6zdgL8p8Twpb6ZiVbBGmresA1Gy76ukOs.png"
    },
    "team2": {
      "name": "River Plate",
      "logo": "https://www.futebolnatv.com.br/upload/teams/ad6885aa15ba52171b995442ca0b3ac3.png"
    },
    "time": "21:30",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
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
      "name": "Bucaramanga",
      "logo": "https://www.futebolnatv.com.br/upload/teams/0765d4f8ff075c2d15900bab077ad4fa.png"
    },
    "team2": {
      "name": "Fortaleza",
      "logo": "https://www.futebolnatv.com.br/upload/teams/43700347673eaf5b5bc35e314db638e3.png"
    },
    "time": "23:00",
    "championship": "Copa Libertadores - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Mushuc Runa SC",
      "logo": "https://www.futebolnatv.com.br/upload/teams/af4ce60ac3bdefbdea1e251ce24b79ae.png"
    },
    "team2": {
      "name": "Union Santa Fe",
      "logo": "https://www.futebolnatv.com.br/upload/teams/3881087f025c9bbd47a84497d0346fdc.png"
    },
    "time": "23:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "DISNEY+ PREMIUM"
    ]
  },
  {
    "team1": {
      "name": "Atletico Grau",
      "logo": "https://www.futebolnatv.com.br/upload/teams/232d373e4d1e593089e1357a745dabea.png"
    },
    "team2": {
      "name": "Sportivo Luqueno",
      "logo": "https://www.futebolnatv.com.br/upload/teams/7be13d5aa722844826b22ff31d289a39.png"
    },
    "time": "23:00",
    "championship": "Copa Sul-Americana - Fase de Grupos - Rodada 3",
    "channels": [
      "PARAMOUNT+"
    ]
  },
  {
    "team1": {
      "name": "Tigres UANL",
      "logo": "https://www.futebolnatv.com.br/upload/teams/865212b5a1ac5e6d77b0321af7b4ea21.png"
    },
    "team2": {
      "name": "Cruz Azul",
      "logo": "https://www.futebolnatv.com.br/upload/teams/1bcffa82688832ef02abc2863c1d8caf.png"
    },
    "time": "23:00",
    "championship": "CONCACAF - Champions - Semifinal",
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

function filterGames() {
  const searchInput = document.querySelector('#search-input'); // Campo de entrada para pesquisa
  const articles = document.querySelectorAll('#soccer-live article'); // Todos os jogos exibidos

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Normaliza o texto digitado

    articles.forEach((article) => {
      const team1 = article.querySelector('.team:first-child figcaption').innerText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const team2 = article.querySelector('.team:last-child figcaption').innerText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      // Verifica se o texto digitado corresponde ao nome de algum dos times
      if (team1.includes(searchValue) || team2.includes(searchValue)) {
        article.style.display = ''; // Mostra o jogo
      } else {
        article.style.display = 'none'; // Esconde o jogo
      }
    });
  });
}

// Chama a função após carregar os jogos
filterGames();

function updateMatchStatus() {
  const articles = document.querySelectorAll('#soccer-live article'); // Seleciona todos os jogos
  const now = new Date(); // Obtém a data e hora atual

  articles.forEach((article) => {
    const hourSpan = article.querySelector('.hour-match > span'); // Seleciona o elemento do horário
    const matchTime = hourSpan.innerText; // Obtém o horário do jogo no formato "HH:mm"

    if (matchTime && matchTime.includes(':')) {
      const [hours, minutes] = matchTime.split(':').map(Number); // Divide o horário em horas e minutos
      const matchDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes); // Cria um objeto Date para o horário do jogo

      const matchEndTime = new Date(matchDate.getTime() + 2 * 60 * 60 * 1000); // Calcula o horário de término do jogo (2 horas após o início)

      if (now >= matchDate && now <= matchEndTime) {
        hourSpan.innerText = 'AO VIVO'; // Atualiza para "Ao Vivo" se o jogo está em andamento
        hourSpan.style.backgroundColor = '#FF0000'; // Altera a cor de fundo para vermelho
      } else if (now > matchEndTime) {
        hourSpan.innerText = 'ENCERRADO'; // Atualiza para "Encerrado" se o jogo já terminou
        hourSpan.style.backgroundColor = '#000'; // Altera a cor de fundo para preto
      }
    }
  });
}

// Chama a função para atualizar o status dos jogos
updateMatchStatus();

setInterval(updateMatchStatus, 60 * 1000); // Atualiza a cada minuto


