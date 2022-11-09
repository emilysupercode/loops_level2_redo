// ==================================
// lvl 2_1
// ==================================
function imageArray() {
    let returnArray = [];
    for (i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push(`image_00${i}.jpg`)
        } else if (i < 100) {
            returnArray.push(`image_0${i}.jpg`)
        } else {
            returnArray.push(`image_${i}.jpg`)
        }
    } console.log(returnArray)
}
imageArray()

// ==================================
// lvl 2_2
// ==================================

let loopMe = document.querySelector("#loopButton");
loopMe.addEventListener("click", loopDeLoop)

function loopDeLoop() {
    let loopArray = [];
    let numberInput = document.querySelector("#numberInput");
    let numberInputValue = Number(numberInput.value);
    let outputLoop = document.querySelector("#outputLoop")
    let o = "o";

    console.log(numberInputValue)

    for (i = numberInputValue; i > 0; i--) { // if i is greater than 0, use decrement to prevent dauerschleife
        loopArray.push(o);
    }
    let allOhs = (loopArray.toString()).replaceAll(",", "")

    outputLoop.innerHTML = `L${allOhs}p`;
}


