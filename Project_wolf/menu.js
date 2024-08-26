var menuItem = document.querySelectorAll('.Itens_menu')

function selectLink(){
    Itens_menu.forEach((item) =>
        item.classList.remove('ativo')
)
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

//Exp botão

var btnExp = document.querySelector('#btn-expandir')
var menuSide = document.querySelector('menu_lateral')

btnExp.addEventListener('click',function(){
    menuSide.classList.toggle('expandir')
})