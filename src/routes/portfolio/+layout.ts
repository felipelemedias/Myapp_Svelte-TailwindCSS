export function load(){
    return{
        //variaveis e objetos que queremos retornar no front end

        categories : [
            'Todos',
            'Websites',
            'Lojas virtuais',
            'Farmácias'
        ],

        items : [
            {slug: 'classe-a-website', title: 'Classe A', category: 'Websites', image: 'website.jpg'},
            {slug: 'jeito-de-crianca', title: 'Jeito de Criança', category: 'Lojas virtuais', image: 'loja.jpg'},
            {slug: 'auto-escola-tiguera', title: 'Autoescola Tiguera', category: 'Lojas virtuais', image: 'website.jpg'},
            {slug: 'drogaria-santa-helena', title: 'Drogaria Santa Helena', category: 'Farmácias', image: 'farmacia.jpg'}
        ]
    }
}

//tudo oq precisa pra retornar no frontend, mas é sensivel entao nao pode colocar chave de api, token de db