let erros = 0
let acertos = 0
let categoriatela
let palavratela
let palavraescolhida
let categoriaescolhida
let listapalavra = []
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria: "LUGARES"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria: "TV E CINEMA"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria: "TV E CINEMA"
    },
    palavra053 = {
        nome: "CASA MONSTRO",
        categoria: "TV E CINEMA"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria: "TV E CINEMA"
    },
    palavra055 = {
        nome: "STRANGER THINGS",
        categoria: "TV E CINEMA"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria: "TV E CINEMA"
    },
    palavra057 = {
        nome: "MULHER MARAVILHA",
        categoria: "TV E CINEMA"
    },
    palavra058 = {
        nome: "O INCRIVEL HULK",
        categoria: "TV E CINEMA"
    },
    palavra059 = {
        nome: "BOB ESPONJA",
        categoria: "TV E CINEMA"
    },
    palavra060 = {
        nome: "PANICO NA TV",
        categoria: "TV E CINEMA"
    }
];

palavraSecreta();
function palavraSecreta() {
    let sorteio = parseInt(Math.random() * palavras.length);
    palavraescolhida = palavras[sorteio].nome
    categoriaescolhida = palavras[sorteio].categoria
    console.log(palavraescolhida)
    console.log(categoriaescolhida)
}
function mudarTela() {
    categoriatela = document.getElementById("categoria");
    categoriatela.innerHTML = "<h2>" + categoriaescolhida + "</h2>";

    palavratela = document.getElementById("palavra");
    palavratela.innerHTML = "";

    for (let i = 0; i < palavraescolhida.length; i++) {
        if(listapalavra[i] == undefined){
            if (palavraescolhida[i] == " ") {
                listapalavra[i] = " ";
                palavratela.innerHTML = palavratela.innerHTML + "<div class='espacovazio'>" + listapalavra[i] + "</div>"
            }
            else{
                listapalavra[i] = "&nbsp;"
                palavratela.innerHTML = palavratela.innerHTML + "<div class='letras'>" + listapalavra[i] + "</div>"
            }     
        }
        else{
            if (palavraescolhida[i] == " ") {
                listapalavra[i] = " ";
                palavratela.innerHTML = palavratela.innerHTML + "<div class='espacovazio'>" + listapalavra[i] + "</div>"
            }
            else{
                palavratela.innerHTML = palavratela.innerHTML + "<div class='letras'>" + listapalavra[i] + "</div>"
            }    
        }
    }
}
function verificaLetra(letra) {
    semespaco = palavraescolhida.replace(/\s/g, '')
    const posi = palavraescolhida.indexOf(letra)
    if (posi < 0 && erros < 6) {
        erros++
        document.getElementById("imgforca").src = "forca" + erros + ".png"
        document.getElementById(letra).style.backgroundColor = "#ff0000"
        document.getElementById(letra).onclick = ""
    }
    else {
        document.getElementById(letra).style.backgroundColor = "#ace420"
        document.getElementById(letra).onclick = ""
    }
    
    for(let i = 0;i<palavraescolhida.length; i++){
        if(palavraescolhida[i] == letra){
            listapalavra[i] = letra
            mudarTela()
            acertos++
        }
    }
    if (erros == 6) {
        derrota();
    }
    if(acertos == semespaco.length){
        vitoria();
    }
}
function vitoria(){
    let telinha = document.getElementById("modalv")
    telinha.style.display = "block"
}
function derrota(){
    let menor = palavraescolhida.fontsize(4)
    let telinha = document.getElementById("modald")
    let respost = document.getElementById("resposta")
    telinha.style.display = "block"
    respost.innerHTML = palavraescolhida
}

function fechar() {
    let telinha = document.getElementById("modal")
    telinha.style.display = "none";
}
function reiniciar(){
    location.reload()
}
function modaladd(){
    document.getElementById("addmodal").style.display = "block"
}
function adicionar(){
    palavraescolhida = document.getElementById("addpalavra").value
    palavraescolhida = palavraescolhida.toUpperCase()
    categoriaescolhida = document.getElementById("addcategoria").value
    categoriaescolhida = categoriaescolhida.toUpperCase() 
    let addtelinha = document.getElementById("addmodal")
    if(palavraescolhida == ""){
        location.reload()
    }
    if(categoriaescolhida == ""){
        location.reload()
    }
    addtelinha.style.display = "none" 
    mudarTela()
}