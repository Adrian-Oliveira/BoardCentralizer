const body = document.body
const board = document.getElementById("board-layout-main")
const sideBar = document.getElementById("sb")

const screenWidth = body.offsetWidth
const boardWidth = board.offsetWidth
const sideBardWidth = sideBar.offsetWidth

board.style.paddingLeft = `${((screenWidth - boardWidth )/2) - sideBardWidth}px`

