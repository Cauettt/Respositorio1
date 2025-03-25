let btnClick = document.querySelector("#btnClick")
let divRes = document.querySelector("#res")

btnClick.addEventListener("click", () => {
    divRes.innerHTML = "<strong>Botao clicado</strong>"
})