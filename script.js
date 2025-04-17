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

async function getMatches() {
    try {
        const response = await fetch('https://jogosdehoje.live/data/jogos.json');

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json()
        console.log(data)
    } catch (erro) {
        console.error('Erro ao buscar os dados:', erro);
    }
}
getMatches()
//3- Montar uma função que pega cada jogo do objeto de jogos de hoje e gera ou não opções de players baseado no objeto que contém os canais