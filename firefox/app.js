const body = document.body
const board = document.getElementById("board-single")
/* const boardSideBar = document.getElementById("board-layout-sidebar") */

const screenWidth = body.offsetWidth
const boardWidth = board.offsetWidth

body.style.paddingLeft = `${(screenWidth - boardWidth) >> 1}px`