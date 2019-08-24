var app = new Vue({
    el: "#app",
    data: {
        newAnime: null,
        animes: [],
        generos: [{"name" : "Ação"},{"name" : "Aventura"}
        ,{"name" : "Faroeste"},{"name" : "Romance"}
        ,{"name" : "Drama"},{"name" : "Comédia"},{"name" : "Paródia"}
        ,{"name" : "Sci-Fi"},{"name" : "Horror"},{"name" : "Guerra"}
        ,{"name" : "Policial"},{"name" : "Jogos"},{"name" : "Artes Marciais"},{"name" : "Vida Escolar"}, {"name": "Sobrenatural"}
        ],
        destaques: [],
        watching: false,
        watching_anime: [],
        myLists: [],
        load: false,
        loadLista: false,
        loadAnime: [],
        viewAnime: false
    },
    mounted() {
        this.myLists = localStorage.myLists ? JSON.parse(localStorage.myLists): []
        this.addAnime()
        for(var i = 0; i < this.generos.length; i++){
            console.log(i + " " + this.generos[i].name)
        }
    },
    methods: {
        addAnime(){
            this.animes.push({
                genero: [{"name" : "Drama"},{"name" : "Romance"},{"name" : "Vida Escolar"},{"name" : "Sobrenatural"}],
                nota: "08",
                resumo: "Mitsuha é uma estudante do ensino médio que vive numa cidade rural situada nas montanhas e tem uma personalidade honesta, mas ela não gosta dos costumes do santuário xintoísta da sua família. Taki é um estudante do ensino médio que vive no centro de Tóquio, passa o seu tempo com os seus amigos, trabalha a tempo parcial num restaurante italiano, e está interessado em arquitetura e artes plásticas. Um dia, Mitsuha tem um sonho onde é um homem jovem. Taki também tem um sonho onde ele é uma estudante do ensino médio numa cidade nas montanhas onde esteve. Qual é o segredo para seus sonhos de experiência pessoal?",
                tipo: "filme",
                titulo: "Your Name",
                url: "your-name",
                hover: false,
                background: "https://i.pinimg.com/originals/69/6b/f7/696bf7be928986048e61a11374c0863b.jpg",
                logo: "https://fanart.tv/fanart/movies/372058/hdmovielogo/your-name-587d8cb5bef81.png",
                capa: "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1578932/Latvian/1578932_Latvian_ShowMasterKeyArt_396ad78a-deff-e611-8175-020165574d09.jpg"
            })
            this.animes.push({
                genero: [{"name" : "Drama"},{"name" : "Romance"},{"name" : "Vida Escolar"},{"name" : "Sobrenatural"}],
                nota: "08",
                resumo: "A história foca em Ishida, um jovem garoto que desde pequeno é muito travesso, conseguindo passar dos seus limites por causa de alguém chamada 'Shouko Nishimiya'. É a garota transferida da sua sala, que mesmo parecendo ser alguém normal, um fator a diferenciava da maioria: sua surdez. O protagonista da história começou a odiá-la por inúmeros fatores, principalmente por não conseguir entender a língua de sinais usada pela garota e achá-la repugnante. Até que Ishida começa a fazer bullying com ela de quase todas as formas, como retirar a força seus aparelhos auditivos, fazer brincadeiras de mal gosto, riscar sua mesa com palavras que a ridicularizavam, o que era sempre motivo de risadas pelos outros colegas; porém, Shouko era gentil demais, não se importando muito com isso, tentado até ser amiga de Ishida, mas o garoto simplesmente se recusava a aceitar o pedido dela.",
                tipo: "filme",
                titulo: "Koe no Katachi",
                url: "your-name",
                hover: false,
                background: "https://www.tokkoro.com/picsup/1141881-koe-no-katachi.jpg",
                logo: "https://4.bp.blogspot.com/-1ykmfviHjpE/V0TBqFNhy9I/AAAAAAAABOw/cFvBY-frFO0UZGIyrxWZ0sK1fU3YBELLQCK4B/w0/Koe%2Bno%2BKatachi.png",
                capa: "https://miro.medium.com/max/354/1*RwMmMIMnctLlAg6DjykePA.jpeg"
            })
            this.destaques = this.animes.slice(-1)
        },
        watch(anime){
            console.log(anime.titulo)
            this.watching = true
            anime.hover = false;
            this.watching_anime = anime
            changeTitle(0, this.watching_anime.titulo)
        },
        closeWatch(){
            this.watching = false
            document.title = "NekoApp"
        },
        closeView(){
            this.viewAnime = false
            document.title = "NekoApp"
        },
        hoverOver(anime) {
            const index = this.animes.indexOf(anime)
            anime.hover = true
            this.animes[index] = anime
        },
        hoverOut(anime) {
            const index = this.animes.indexOf(anime)
            anime.hover = false
            this.animes[index] = anime
        },
        hoverOverLista(anime) {
            const index = this.myLists.indexOf(anime)
            anime.hover = true
            this.myLists[index] = anime
        },
        hoverOutLista(anime) {
            const index = this.myLists.indexOf(anime)
            anime.hover = false
            this.myLists[index] = anime
        },
        addMyList(anime){
            this.myLists.push(anime)
            anime.hover = false
            console.log(anime)
            localStorage.myLists = JSON.stringify(this.myLists)
        },
        removeMyList(anime){
            const index = this.myLists.indexOf(anime)
            this.myLists.splice(index, 1)
            localStorage.myLists = JSON.stringify(this.myLists)
        },
        view(anime, tipo){
            this.viewAnime = true
            if(tipo == 0){
                this.loadLista = false
                this.load = true
            } else{
                this.loadLista = true
                this.load = false
            }
            this.loadAnime = anime
        }
    }
})

function changeTitle(type, text){
    var newText = "";
    if(type == 0){
        newText = "NekoApp - Assistindo " + text;
    }
    document.title = newText
}