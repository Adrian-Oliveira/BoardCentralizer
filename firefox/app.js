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
    const body = document.body
    const sideBar = document.getElementById("sb")
    const topPlayer = document.getElementById("board-layout-player-top")
    const board = document.getElementById("board-layout-main")
    const boardLayout = document.getElementById("board-layout-main")

    const computedStyleBoard = window.getComputedStyle(board);
    const paddingLeft = parseFloat(computedStyleBoard.paddingLeft);
    const paddingRight = parseFloat(computedStyleBoard.paddingRight);
    const contentBoardWidthWithoutPadding = board.clientWidth - paddingLeft - paddingRight;

    const screenWidth = body.offsetWidth
    const computedStyleBody = window.getComputedStyle(body)
    const bodyPaddingLeft =  parseFloat(computedStyleBody.getPropertyValue('padding-left'));

    if(sideBar.offsetWidth>0){
        boardLayout.style.paddingLeft = `${((screenWidth - contentBoardWidthWithoutPadding )/2) - bodyPaddingLeft}px`
    }
    else{
        const computedStyle = window.getComputedStyle(body)
        const rect = topPlayer.getBoundingClientRect();
        const topPlayerWidthWithMargins = rect.width + 
                                          parseFloat(getComputedStyle(topPlayer).marginLeft) + 
                                          parseFloat(getComputedStyle(topPlayer).marginRight);

        const boardEvaluation = document.getElementById("board-layout-evaluation")
        
        boardLayout.style.paddingLeft = `${((screenWidth - contentBoardWidthWithoutPadding )/2) - bodyPaddingLeft - boardEvaluation.offsetWidth}px`

    }
}
centralize();


const sideBar = document.getElementById("sb")
const board = document.getElementById("board")
const resizeObserver = new ResizeObserver(() => {
    centralize();
});

resizeObserver.observe(sideBar);
resizeObserver.observe(board);



// fixing sidebar-component width
const liveStats = document.querySelector(".live-stats-component")
const sideBarComponent = document.querySelector(".sidebar-component")

sideBarComponent.style.width = `${sideBarComponent.offsetWidth +25}px`


