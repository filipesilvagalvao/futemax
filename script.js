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
            "name": "Derby",
            "logo": "https://www.futebolnatv.com.br/upload/teams/382471f9050f1193c680f62488ab654f.png"
        },
        "team2": {
            "name": "Luton",
            "logo": "https://www.futebolnatv.com.br/upload/teams/f3b16598ce214914a8b0d82f7b6dffc6.png"
        },
        "time": "08:30",
        "championship": "Inglês 2ª Divisão - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Gateshead",
            "logo": "https://www.futebolnatv.com.br/upload/teams/aded6e32eb38c1bdffcb067c63e7faa2.png"
        },
        "team2": {
            "name": "York",
            "logo": "https://www.futebolnatv.com.br/upload/teams/943e56c98d6dec4e82f782bb6bd276f0.png"
        },
        "time": "08:30",
        "championship": "National League - Rodada 43",
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
            "name": "Altrincham",
            "logo": "https://www.futebolnatv.com.br/upload/teams/99777e4384c01a722c30e3d2d414c608.png"
        },
        "team2": {
            "name": "Rochdale",
            "logo": "https://www.futebolnatv.com.br/upload/teams/b9595927ffa090be17905f240e9eb962.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "AFC Fylde",
            "logo": "https://www.futebolnatv.com.br/upload/teams/1bc7dc7e4403fb8a8abe5d2d64a1b860.png"
        },
        "team2": {
            "name": "FC Halifax Town",
            "logo": "https://www.futebolnatv.com.br/upload/teams/6bce191e88e247eeb8039ec008f3c761.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Maidenhead",
            "logo": "https://www.futebolnatv.com.br/upload/teams/3faeafe68ee7c1fd23decc5def002247.png"
        },
        "team2": {
            "name": "Woking",
            "logo": "https://www.futebolnatv.com.br/upload/teams/351ab417c2751ce93a06af7205aed6f8.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Dagenham & Redbridge",
            "logo": "https://www.futebolnatv.com.br/upload/teams/82451d3674d14de48a41d33e4467043f.png"
        },
        "team2": {
            "name": "Ebbsfleet United",
            "logo": "https://www.futebolnatv.com.br/upload/teams/7e05c1820f17a082c48bc4afb5571c00.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Aldershot Town",
            "logo": "https://www.futebolnatv.com.br/upload/teams/b4c44913e4a8106eb719e082e208d743.png"
        },
        "team2": {
            "name": "Sutton Utd",
            "logo": "https://www.futebolnatv.com.br/upload/teams/e325861919c7c23ca993662b9ddc294f.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Yeovil Town",
            "logo": "https://www.futebolnatv.com.br/upload/teams/b15325b629d41906ef614c0cece211c8.png"
        },
        "team2": {
            "name": "Forest Green",
            "logo": "https://www.futebolnatv.com.br/upload/teams/dd3ba1c641c3f23e248a63410ffe7b4b.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
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
            "name": "Oldham",
            "logo": "https://www.futebolnatv.com.br/upload/teams/64786ec707a76d15219bb60d88f08230.png"
        },
        "team2": {
            "name": "Hartlepool",
            "logo": "https://www.futebolnatv.com.br/upload/teams/20af95d4e64de48e89c4d28e467c8904.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Southend",
            "logo": "https://www.futebolnatv.com.br/upload/teams/e98daa1fcad58c2c7b1b4550e820535e.png"
        },
        "team2": {
            "name": "Braintree",
            "logo": "https://www.futebolnatv.com.br/upload/teams/1e4787aa4438a5f723b7cf744ef1580c.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Boston United",
            "logo": "https://www.futebolnatv.com.br/upload/teams/11aaef75fb6d418993484ebae66dbfd7.png"
        },
        "team2": {
            "name": "Wealdstone",
            "logo": "https://www.futebolnatv.com.br/upload/teams/7770032fc96ada917c1565a6bfe4fecb.png"
        },
        "time": "11:00",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Watford",
            "logo": "https://www.futebolnatv.com.br/upload/teams/0d541f246dab2089586807fdfb3e7ec4.png"
        },
        "team2": {
            "name": "Burnley",
            "logo": "https://www.futebolnatv.com.br/upload/teams/83d96dbaff232b5f64f25a2e1174c28b.png"
        },
        "time": "11:00",
        "championship": "Inglês 2ª Divisão - Rodada 43",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Rio Ave",
            "logo": "https://www.futebolnatv.com.br/upload/teams/ac19af7915918c448ef0c6c91d728420.png"
        },
        "team2": {
            "name": "Santa Clara",
            "logo": "https://www.futebolnatv.com.br/upload/teams/69e2109fa6093d0e59b1bb77df1ba939.png"
        },
        "time": "11:30",
        "championship": "Campeonato Português - Rodada 30",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Atletico Madrid (F)",
            "logo": "https://www.futebolnatv.com.br/upload/teams/a54f5e2fde986bb42c68b1e9d585d946.png"
        },
        "team2": {
            "name": "Granad. Tenerife (F)",
            "logo": "https://www.futebolnatv.com.br/upload/teams/a07e6ad93b9ed3d0148aec29b6b67f6f.png"
        },
        "time": "12:30",
        "championship": "Espanhol Feminino - Rodada 26",
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
            "name": "Barnet",
            "logo": "https://www.futebolnatv.com.br/upload/teams/51900dc3fcb05374440397e02f269a8e.png"
        },
        "team2": {
            "name": "Eastleigh",
            "logo": "https://www.futebolnatv.com.br/upload/teams/66b614179c0e3ba5621dbaf489322521.png"
        },
        "time": "13:30",
        "championship": "National League - Rodada 43",
        "channels": [
            "DAZN"
        ]
    },
    {
        "team1": {
            "name": "Sheffield Utd",
            "logo": "https://www.futebolnatv.com.br/upload/teams/25ec26b8809d2bb0c0890ce6d3c7ab56.png"
        },
        "team2": {
            "name": "Cardiff",
            "logo": "https://www.futebolnatv.com.br/upload/teams/b2328282da36cdb83a7a53d3910fff51.png"
        },
        "time": "13:30",
        "championship": "Inglês 2ª Divisão - Rodada 43",
        "channels": [
            "ESPN 4",
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Galatasaray",
            "logo": "https://www.futebolnatv.com.br/upload/teams/95c8588661f1802949bc05dedb69e616.png"
        },
        "team2": {
            "name": "BB Bodrumspor",
            "logo": "https://www.futebolnatv.com.br/upload/teams/cbb7fa5db0ca8eb3049f7d3742e116be.png"
        },
        "time": "14:00",
        "championship": "Campeonato Turco - Rodada 32",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Danubio",
            "logo": "https://www.futebolnatv.com.br/upload/teams/8ce6f5fada36bb1b8a83bdcdeaf54a45.png"
        },
        "team2": {
            "name": "Boston River",
            "logo": "https://www.futebolnatv.com.br/upload/teams/e936497b4f7b2a16f84576015121e59f.png"
        },
        "time": "14:00",
        "championship": "Campeonato Uruguaio - Apertura - 12",
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
            "name": "FC Porto",
            "logo": "https://www.futebolnatv.com.br/upload/teams/2e25accb30d27e4bedf5b087abe4aba6.png"
        },
        "team2": {
            "name": "Famalicão",
            "logo": "https://www.futebolnatv.com.br/upload/teams/41a672cecb1bf47833df53f33bbc3a1a.png"
        },
        "time": "14:00",
        "championship": "Campeonato Português - Rodada 30",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Lask Linz",
            "logo": "https://www.futebolnatv.com.br/upload/teams/09039c918546e8612516bd55b5996313.png"
        },
        "team2": {
            "name": "WSG (F)attens",
            "logo": "https://www.futebolnatv.com.br/upload/teams/e28f5684ac786912b6eb941bf2d6b806.png"
        },
        "time": "14:30",
        "championship": "Campeonato Austríaco - Relegation Round - 4",
        "channels": [
            "ONEFOOTBALL"
        ]
    },
    {
        "team1": {
            "name": "Al-Qadisiyah FC",
            "logo": "https://www.futebolnatv.com.br/upload/teams/93f77a70b8da5d6403fd8337b3f4b2d2.png"
        },
        "team2": {
            "name": "Al-Nassr",
            "logo": "https://www.futebolnatv.com.br/upload/teams/b159d7d40e0cce98efe60956e5f67ff6.png"
        },
        "time": "15:00",
        "championship": "Campeonato Saudita - Rodada 28",
        "channels": [
            "CANAL GOAT"
        ]
    },
    {
        "team1": {
            "name": "Espanyol",
            "logo": "https://www.futebolnatv.com.br/upload/teams/a72f9f6e66f143e4c35be38844f099e1.png"
        },
        "team2": {
            "name": "Getafe",
            "logo": "https://www.futebolnatv.com.br/upload/teams/1105b3728fe7a30ed0a75b61061f98d3.png"
        },
        "time": "16:00",
        "championship": "La Liga - Rodada 32",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Oxford United",
            "logo": "https://www.futebolnatv.com.br/upload/teams/7d45ebe5dfedfa75fb778483fc3785ee.png"
        },
        "team2": {
            "name": "Leeds",
            "logo": "https://www.futebolnatv.com.br/upload/teams/287e359a1efdca022d683032316dd6dc.png"
        },
        "time": "16:00",
        "championship": "Inglês 2ª Divisão - Rodada 43",
        "channels": [
            "ESPN 4",
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Miramar",
            "logo": "https://www.futebolnatv.com.br/upload/teams/ca9b60857338d4e7449c1c7f2c511cb4.png"
        },
        "team2": {
            "name": "Club Nacional",
            "logo": "https://www.futebolnatv.com.br/upload/teams/83a73a5c22aa9952e10e9b4447e5525c.png"
        },
        "time": "16:00",
        "championship": "Campeonato Uruguaio - Apertura - 12",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Sporting CP",
            "logo": "https://www.futebolnatv.com.br/upload/teams/3e81e1988ef101efa4860754023ee78c.png"
        },
        "team2": {
            "name": "Moreirense",
            "logo": "https://www.futebolnatv.com.br/upload/teams/7ce22700d3e014710e5e9d42d7d11897.png"
        },
        "time": "16:30",
        "championship": "Campeonato Português - Rodada 30",
        "channels": [
            "ESPN",
            "DISNEY+"
        ]
    },
    {
        "team1": {
            "name": "Gimnasia L.P.",
            "logo": "https://www.futebolnatv.com.br/upload/teams/97bee07f5a59582cf88943a6c1e3ed53.png"
        },
        "team2": {
            "name": "River Plate",
            "logo": "https://www.futebolnatv.com.br/upload/teams/ad6885aa15ba52171b995442ca0b3ac3.png"
        },
        "time": "17:00",
        "championship": "Campeonato Argentino - 1ª Fase - Rodada 14",
        "channels": [
            "ESPN 2",
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
            "name": "Cerro Largo",
            "logo": "https://www.futebolnatv.com.br/upload/teams/6b6f88bdc1cad057107fdcdbc15debd2.png"
        },
        "team2": {
            "name": "River Plate URU",
            "logo": "https://www.futebolnatv.com.br/upload/teams/74bca2971a6b4292ca3ffefe66a9e131.png"
        },
        "time": "18:30",
        "championship": "Campeonato Uruguaio - Apertura - 12",
        "channels": [
            "DISNEY+ PREMIUM"
        ]
    },
    {
        "team1": {
            "name": "Assisense",
            "logo": "https://www.futebolnatv.com.br/upload/teams/4995f0814e2b5f7955bf073e3934e2a0.png"
        },
        "team2": {
            "name": "Olimpia",
            "logo": "https://www.futebolnatv.com.br/upload/teams/14cf7f19eb23a463408c735933f77697.png"
        },
        "time": "19:30",
        "championship": "Paulista Série B - 1ª Fase - Rodada 1",
        "channels": [
            "YOUTUBE Paulistao"
        ]
    },
    {
        "team1": {
            "name": "Union Santa Fe",
            "logo": "https://www.futebolnatv.com.br/upload/teams/3881087f025c9bbd47a84497d0346fdc.png"
        },
        "team2": {
            "name": "Newells Old Boys",
            "logo": "https://www.futebolnatv.com.br/upload/teams/539abac5f851a883f239702cd7393b77.png"
        },
        "time": "21:30",
        "championship": "Campeonato Argentino - 1ª Fase - Rodada 14",
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
 //a-gerar as thumbs a partir do objeto jogos

function makeThumbsGames() {
    const section = document.querySelector('#soccer-live')
    jogos.forEach((obj, index)=>{

        if(!(obj.channels[0] == 'Nenhum canal disponível')){

        const a = document.createElement('a')
        a.href = '#'

        const article = document.createElement('article')

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
        figure1.append(img1,figCaption1)

        spanVersus.appendChild(iVersus)
        divVersus.appendChild(spanVersus)

        //logo time2
        figure2.append(img2,figCaption2)

        divMatchTeams.append(figure1,divVersus,figure2)

        //champeonship
        divChampeonship.appendChild(spanChampeonship)

        article.append(divHour,divMatchTeams, divChampeonship, iPlay)

        a.appendChild(article)

        section.appendChild(a)}

    })
}

makeThumbsGames()