
function cliquemenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}

function cliquemenu01() {
  if (itens01.style.display == 'block') {
    itens01.style.display = 'none'
  } else {
    itens01.style.display = 'block'

  }
}

function clickMenu() {
  if (section.style.display == 'block') {
    section.style.display = 'none'
  } else {
    section.style.display = 'block'

  }
}


function fechando() {

  if (itens01.style.display == 'block') {
    itens01.style.display = 'none'

  }
}

function fechando01() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'

  }
}



document.getElementById("itens01").addEventListener("click", fechando)
document.getElementById("itens01").addEventListener("click", clickMenu)


document.getElementById("itens").addEventListener("click", fechando01)
document.getElementById("itens").addEventListener("click", clickMenu)




