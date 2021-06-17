//* CHANGE COLOR BUTTON *//

function changeColor(){
    let color = document.querySelector("[data-input-color]").value
    document.querySelector("[data-container-editor]").style.borderColor = color
}

//*  MENU HAM *//

var botao = document.querySelector(".headerBarra")
var nave = document.querySelector(".menu__ham")
var x = document.querySelector(".headerBarra")

function vamosla(){
    if (document.querySelector(".menu__ham").classList.contains("showMe")){
        document.querySelector(".menu__ham").classList.remove("showMe")
        x.src = "imagens/barra.svg"
    }   else{
        document.querySelector(".menu__ham").classList.add("showMe")
        x.src = "imagens/x.svg"
    }
}

//*  HIGHLIGHT*//

const areaDoCodigo = document.querySelector(".codigo-wrapper")
const linguaguem = document.querySelector("#linguagem")
const botao1 = document.querySelector(".botaoHighlight")

function mudaLinguagem(){
    const codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<code class="hljs ${linguaguem.value}" contenteditable='true' name="EditorDeCodigo" id="" cols="30" rows="10" data-code area-label="editor"></code>`
    querySelector("[data-code]").innerText = codigo.innerText
}

linguaguem.addEventListener("change", () => {
    mudaLinguagem()
})

botao1.addEventListener("click", () => {
    const codigo = areaDoCodigo.querySelector("code")
    hljs.highlightBlock(codigo)
})