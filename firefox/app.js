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


const body = document.body
const board = document.getElementById("board-layout-main")
const sideBar = document.getElementById("sb")
const topPlayer = document.getElementById("board-layout-player-top")

let computedStyle = window.getComputedStyle(body)
let rect = topPlayer.getBoundingClientRect();
let topPlayerWidthWithMargins = rect.width + parseFloat(getComputedStyle(topPlayer).marginLeft) + parseFloat(getComputedStyle(topPlayer).marginRight);


const screenWidth = body.offsetWidth
let bodyPaddingLeft =  parseFloat(computedStyle.getPropertyValue('padding-left'));
let boardWidth = board.offsetWidth


const centralize = ()=>{
    if(sideBar.offsetWidth>0){
        bodyPaddingLeft =  parseFloat(computedStyle.getPropertyValue('padding-left'))
        board.style.paddingLeft = `${((screenWidth - boardWidth )/2) - bodyPaddingLeft}px`
    }
    else{

        computedStyle = window.getComputedStyle(body)
        rect = topPlayer.getBoundingClientRect();
        topPlayerWidthWithMargins = rect.width + 
                                          parseFloat(getComputedStyle(topPlayer).marginLeft) + 
                                          parseFloat(getComputedStyle(topPlayer).marginRight);

        const boardEvaluation = document.getElementById("board-layout-evaluation")
        
        board.style.paddingLeft = `${((screenWidth - boardWidth )/2) - bodyPaddingLeft - boardEvaluation.offsetWidth}px`

    }
}
centralize();

const resizeObserver = new ResizeObserver(() => {
    centralize();
});

resizeObserver.observe(sideBar);



// fixing sidebar-component width
const liveStats = document.querySelector(".live-stats-component")
const sideBarComponent = document.querySelector(".sidebar-component")

sideBarComponent.style.width = `${sideBarComponent.offsetWidth +25}px`


