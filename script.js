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
        channel: 'CazéTV',
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
        "name": "Woking",
        "logo": "https://www.futebolnatv.com.br/upload/teams/351ab417c2751ce93a06af7205aed6f8.png"
      },
      "team2": {
        "name": "Aldershot Town",
        "logo": "https://www.futebolnatv.com.br/upload/teams/b4c44913e4a8106eb719e082e208d743.png"
      },
      "time": "08:30",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Newport County",
        "logo": "https://www.futebolnatv.com.br/upload/teams/55ceba45ef51fded49e79e51277cd519.png"
      },
      "team2": {
        "name": "Walsall",
        "logo": "https://www.futebolnatv.com.br/upload/teams/955471f3066e89933b5e9632a40f5731.png"
      },
      "time": "08:30",
      "championship": "Inglês 4ª Divisão - Rodada 44",
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
        "name": "FC Halifax Town",
        "logo": "https://www.futebolnatv.com.br/upload/teams/6bce191e88e247eeb8039ec008f3c761.png"
      },
      "team2": {
        "name": "Altrincham",
        "logo": "https://www.futebolnatv.com.br/upload/teams/99777e4384c01a722c30e3d2d414c608.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Ebbsfleet United",
        "logo": "https://www.futebolnatv.com.br/upload/teams/7e05c1820f17a082c48bc4afb5571c00.png"
      },
      "team2": {
        "name": "Southend",
        "logo": "https://www.futebolnatv.com.br/upload/teams/e98daa1fcad58c2c7b1b4550e820535e.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Leeds",
        "logo": "https://www.futebolnatv.com.br/upload/teams/287e359a1efdca022d683032316dd6dc.png"
      },
      "team2": {
        "name": "Stoke City",
        "logo": "https://www.futebolnatv.com.br/upload/teams/dff8dcd00d7cb46b6a7aa3e3e7ff1b30.png"
      },
      "time": "11:00",
      "championship": "Inglês 2ª Divisão - Rodada 44",
      "channels": [
        "DISNEY+ PREMIUM"
      ]
    },
    {
      "team1": {
        "name": "West Brom",
        "logo": "https://www.futebolnatv.com.br/upload/teams/779c891ea27e11efed19032d9e96c915.png"
      },
      "team2": {
        "name": "Derby",
        "logo": "https://www.futebolnatv.com.br/upload/teams/382471f9050f1193c680f62488ab654f.png"
      },
      "time": "11:00",
      "championship": "Inglês 2ª Divisão - Rodada 44",
      "channels": [
        "DISNEY+ PREMIUM"
      ]
    },
    {
      "team1": {
        "name": "Sutton Utd",
        "logo": "https://www.futebolnatv.com.br/upload/teams/e325861919c7c23ca993662b9ddc294f.png"
      },
      "team2": {
        "name": "Barnet",
        "logo": "https://www.futebolnatv.com.br/upload/teams/51900dc3fcb05374440397e02f269a8e.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Solihull Moors",
        "logo": "https://www.futebolnatv.com.br/upload/teams/9b8e03a379178ab08382a482aa086ab2.png"
      },
      "team2": {
        "name": "Boston United",
        "logo": "https://www.futebolnatv.com.br/upload/teams/11aaef75fb6d418993484ebae66dbfd7.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
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
        "name": "Braintree",
        "logo": "https://www.futebolnatv.com.br/upload/teams/1e4787aa4438a5f723b7cf744ef1580c.png"
      },
      "team2": {
        "name": "Dagenham & Redbridge",
        "logo": "https://www.futebolnatv.com.br/upload/teams/82451d3674d14de48a41d33e4467043f.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "York",
        "logo": "https://www.futebolnatv.com.br/upload/teams/943e56c98d6dec4e82f782bb6bd276f0.png"
      },
      "team2": {
        "name": "Oldham",
        "logo": "https://www.futebolnatv.com.br/upload/teams/64786ec707a76d15219bb60d88f08230.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Eastleigh",
        "logo": "https://www.futebolnatv.com.br/upload/teams/66b614179c0e3ba5621dbaf489322521.png"
      },
      "team2": {
        "name": "Yeovil Town",
        "logo": "https://www.futebolnatv.com.br/upload/teams/b15325b629d41906ef614c0cece211c8.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Rochdale",
        "logo": "https://www.futebolnatv.com.br/upload/teams/b9595927ffa090be17905f240e9eb962.png"
      },
      "team2": {
        "name": "AFC Fylde",
        "logo": "https://www.futebolnatv.com.br/upload/teams/1bc7dc7e4403fb8a8abe5d2d64a1b860.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Hartlepool",
        "logo": "https://www.futebolnatv.com.br/upload/teams/20af95d4e64de48e89c4d28e467c8904.png"
      },
      "team2": {
        "name": "Gateshead",
        "logo": "https://www.futebolnatv.com.br/upload/teams/aded6e32eb38c1bdffcb067c63e7faa2.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Forest Green",
        "logo": "https://www.futebolnatv.com.br/upload/teams/dd3ba1c641c3f23e248a63410ffe7b4b.png"
      },
      "team2": {
        "name": "Tamworth",
        "logo": "https://www.futebolnatv.com.br/upload/teams/7f9faf88396d3e62ea26a720f88a3c4e.png"
      },
      "time": "11:00",
      "championship": "National League - Rodada 44",
      "channels": [
        "DAZN"
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
        "name": "Legia Warszawa",
        "logo": "https://www.futebolnatv.com.br/upload/teams/009e5f0e53f96a908abc81b96cfcac9b.png"
      },
      "team2": {
        "name": "Lechia Gdansk",
        "logo": "https://www.futebolnatv.com.br/upload/teams/d02c608cf62f17c791a295e837209aee.png"
      },
      "time": "12:30",
      "championship": "Campeonato Polonês - Rodada 29",
      "channels": [
        "ONEFOOTBALL"
      ]
    },
    {
      "team1": {
        "name": "Al-Hilal",
        "logo": "https://www.futebolnatv.com.br/upload/teams/WYpgF8giva0DgnseCZCgw9kMUb361E8LG0NxPJyK.png"
      },
      "team2": {
        "name": "Al Shabab",
        "logo": "https://www.futebolnatv.com.br/upload/teams/b6a7f7074d44062fca8aa772279e50e0.png"
      },
      "time": "12:55",
      "championship": "Campeonato Saudita - Rodada 29",
      "channels": [
        "BANDSPORTS",
        "CANAL GOAT"
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
      "time": "13:00",
      "championship": "Campeonato Italiano - Rodada 33",
      "channels": [
        "ESPN 4",
        "DISNEY+ PREMIUM"
      ]
    },
    {
      "team1": {
        "name": "Burnley",
        "logo": "https://www.futebolnatv.com.br/upload/teams/83d96dbaff232b5f64f25a2e1174c28b.png"
      },
      "team2": {
        "name": "Sheffield Utd",
        "logo": "https://www.futebolnatv.com.br/upload/teams/25ec26b8809d2bb0c0890ce6d3c7ab56.png"
      },
      "time": "13:30",
      "championship": "Inglês 2ª Divisão - Rodada 44",
      "channels": [
        "ESPN 3",
        "DISNEY+"
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
        "name": "Al-Ittihad FC",
        "logo": "https://www.futebolnatv.com.br/upload/teams/a6f1367d27479746dbddcbdaee840b11.png"
      },
      "team2": {
        "name": "Al-Ettifaq",
        "logo": "https://www.futebolnatv.com.br/upload/teams/e4d6eccfef5d2b0bcd616dda06e09c7b.png"
      },
      "time": "15:00",
      "championship": "Campeonato Saudita - Rodada 29",
      "channels": [
        "BANDSPORTS",
        "CANAL GOAT"
      ]
    },
    {
      "team1": {
        "name": "Lech Poznan",
        "logo": "https://www.futebolnatv.com.br/upload/teams/aaa4bca04a23ab72c6ead41dcc66bd03.png"
      },
      "team2": {
        "name": "Cracovia Krakow",
        "logo": "https://www.futebolnatv.com.br/upload/teams/aeaff97625ba57e08d6d65091ad2d04e.png"
      },
      "time": "15:15",
      "championship": "Campeonato Polonês - Rodada 29",
      "channels": [
        "ONEFOOTBALL"
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
      "time": "15:45",
      "championship": "Campeonato Italiano - Rodada 33",
      "channels": [
        "ESPN",
        "DISNEY+"
      ]
    },
    {
      "team1": {
        "name": "Girona",
        "logo": "https://www.futebolnatv.com.br/upload/teams/393570be2e47d419592878fe37762782.png"
      },
      "team2": {
        "name": "Real Betis",
        "logo": "https://www.futebolnatv.com.br/upload/teams/86a47b6c90912f0b5833c906e2ef0145.png"
      },
      "time": "16:00",
      "championship": "La Liga - Rodada 32",
      "channels": [
        "ESPN 4",
        "DISNEY+ PREMIUM"
      ]
    },
    {
      "team1": {
        "name": "Tottenham",
        "logo": "https://www.futebolnatv.com.br/upload/teams/b363b16789e994249cabe5d31ef62d3b.png"
      },
      "team2": {
        "name": "Nottingham Forest",
        "logo": "https://www.futebolnatv.com.br/upload/teams/855526f7723a6748a2edc522fa308009.png"
      },
      "time": "16:00",
      "championship": "Campeonato Inglês - Rodada 33",
      "channels": [
        "DISNEY+ PREMIUM"
      ]
    },
    {
      "team1": {
        "name": "Amazonas",
        "logo": "https://www.futebolnatv.com.br/upload/teams/0TCYLywZawOIkCnSSinMidmlT87TEzJmYLP0fglk.png"
      },
      "team2": {
        "name": "Avai",
        "logo": "https://www.futebolnatv.com.br/upload/teams/43a381ab976bf94c25db8785c5ed19b4.png"
      },
      "time": "18:00",
      "championship": "Brasileirão Série B - Rodada 4",
      "channels": [
        "ESPN 4",
        "DISNEY+ PREMIUM"
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
        "name": "Novorizontino",
        "logo": "https://www.futebolnatv.com.br/upload/teams/0d99400313544f7ac63e69d4221773bb.png"
      },
      "team2": {
        "name": "Criciúma",
        "logo": "https://www.futebolnatv.com.br/upload/teams/c570f3ac6a24ea378265c723170e6677.png"
      },
      "time": "19:00",
      "championship": "Brasileirão Série B - Rodada 4",
      "channels": [
        "ESPN",
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
        "name": "ABC",
        "logo": "https://www.futebolnatv.com.br/upload/teams/30e425d431ef9d56ac456f27e727db77.png"
      },
      "team2": {
        "name": "CSA",
        "logo": "https://www.futebolnatv.com.br/upload/teams/cf0b07339dc5a0c485f7fd0268dc0ca8.png"
      },
      "time": "19:30",
      "championship": "Brasileirão Série C - Rodada 2",
      "channels": [
        "NOSSO FUTEBOL+"
      ]
    },
    {
      "team1": {
        "name": "Tombense",
        "logo": "https://www.futebolnatv.com.br/upload/teams/862184a670cc011e5fe6006f3ce12940.png"
      },
      "team2": {
        "name": "Figueirense",
        "logo": "https://www.futebolnatv.com.br/upload/teams/bfcfdb64df63dc70123c2d7587afacd0.png"
      },
      "time": "19:30",
      "championship": "Brasileirão Série C - Rodada 2",
      "channels": [
        "NOSSO FUTEBOL+",
        "DAZN"
      ]
    },
    {
      "team1": {
        "name": "Bahia",
        "logo": "https://www.futebolnatv.com.br/upload/teams/3aff5415f2580a01cfb1d04a8135ab76.png"
      },
      "team2": {
        "name": "Ceará",
        "logo": "https://www.futebolnatv.com.br/upload/teams/e79caa61713980b1bf546319e62e27ba.png"
      },
      "time": "20:00",
      "championship": "Brasileirão Série A - Rodada 5",
      "channels": [
        "SPORTV",
        "PREMIERE FC"
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
        "name": "Remo",
        "logo": "https://www.futebolnatv.com.br/upload/teams/bFzKrXBLjrHuA4JxelvKk6OQLZKTNzoSRbgemPcD.png"
      },
      "team2": {
        "name": "Coritiba",
        "logo": "https://www.futebolnatv.com.br/upload/teams/7e0803466477dced41a5154b3e75eec4.png"
      },
      "time": "21:30",
      "championship": "Brasileirão Série B - Rodada 4",
      "channels": [
        "ESPN",
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
//a-gerar as thumbs a partir do objeto jogos

function makeThumbsGames() {
    const section = document.querySelector('#soccer-live')
    jogos.forEach((obj, index) => {

        if (!(obj.channels[0] == 'Nenhum canal disponível')) {

            const article = document.createElement('article')
            article.setAttribute('data-channels', JSON.stringify(obj.channels))

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
}

makeThumbsGames()

function showMatchPlayers(e) {
    e.stopPropagation()

    const playersModal = document.querySelector('.players-modal')

    playersModal.classList.toggle('active')
}

const arrEvents = Array.from(document.querySelectorAll('#soccer-live article'))

function insetPlayers(e) {
    const matchChannels = JSON.parse(e.currentTarget.dataset.channels)

    matchChannels.forEach((canal) => {
        channels.forEach((obj) => {
            if (canal == obj.channel) {
                obj.links.forEach((link) => {
                    const btn = document.querySelectorAll('#btns-modal');

                    btn.innerHTML += `<button value="${link}">opção</button>`
                })
            }
        })
    })
}

arrEvents.forEach((article) => {
    article.addEventListener('click', insetPlayers)
})


arrEvents.push(document.querySelector('#close-modal'), document.querySelector('.players-modal'))

arrEvents.forEach((article) => {
    article.addEventListener('click', showMatchPlayers)
})




