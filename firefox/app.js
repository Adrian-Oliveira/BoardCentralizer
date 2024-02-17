//troubleshooting

// Create a new div element
const line = document.createElement('div');

// Style the div to represent the vertical red line
line.style.position = 'fixed';
line.style.top = '0';
line.style.bottom = '0';
line.style.left = '50%'; // Position in the middle horizontally
line.style.width = '2px'; // Width of the line
line.style.backgroundColor = 'red'; // Color of the line

// Append the div to the body of the document
document.body.appendChild(line);





const centralize = ()=>{
    console.log("run")
    const body = document.body
    const board = document.getElementById("board-layout-main")

    const boardCoordinates = board.getBoundingClientRect();
    const leftDistanceBoard = boardCoordinates.left

    const computedStyleBoard = window.getComputedStyle(board);
    const paddingLeft = parseFloat(computedStyleBoard.paddingLeft);
    const paddingRight = parseFloat(computedStyleBoard.paddingRight);
    const contentBoardWidthWithoutPadding = board.clientWidth - paddingLeft - paddingRight;

    const screenWidth = body.offsetWidth

    board.style.paddingLeft = `${((screenWidth - contentBoardWidthWithoutPadding )/2) - leftDistanceBoard}px`
 

}
centralize();


const sideBar = document.getElementById("sb")
const board = document.getElementById("board-layout-main")
const resizeObserver = new ResizeObserver(() => {
    centralize();
});

resizeObserver.observe(sideBar);
resizeObserver.observe(board);



// fixing sidebar-component width
const liveStats = document.querySelector(".live-stats-component")
const sideBarComponent = document.querySelector(".sidebar-component")
if (sideBarComponent)
    sideBarComponent.style.width = `${sideBarComponent.offsetWidth +25}px`


