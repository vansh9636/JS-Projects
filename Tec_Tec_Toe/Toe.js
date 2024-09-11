let turnx = `<img  src="https://cdn-icons-png.flaticon.com/512/5233/5233856.png" alt="">`
let turny = `<img  src="https://cdn-icons-png.freepik.com/512/3575/3575917.png" alt="">`
let boxs = document.querySelectorAll(".btns");
let turn = true;
let checkdraw = 0;
let wincon = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn == true) {
            box.innerHTML = turnx + "x";
            document.getElementById('turn').innerHTML = ' TURN : o'
            turn = false;
        }
        else {

            box.innerHTML = turny + "o";
            document.getElementById('turn').innerHTML = ' TURN : x'
            turn = true;
        }
        box.disabled = true;
        checkwinner();
        checkdraw++;
        isdraw();
    })


})

function checkwinner() {
    wincon.forEach(elem => {
        if ((boxs[elem[0]].innerText === boxs[elem[1]].innerText) && (boxs[elem[2]].innerText === boxs[elem[1]].innerText) && (boxs[elem[0]].innerText !== "")) {
            boxs.forEach(box => {
                box.disabled = true;
            })
            document.getElementById("winner").innerHTML = "winner is " + boxs[elem[0]].innerText;
            displaywinner();

        }
    });


}
function isdraw() {
    if (checkdraw == 9) {
        document.getElementById("winner").innerHTML = "Match is draw";
        displaywinner();
    }
}
let displaywinner = () => {
    document.querySelector("#gameupdates video").style.display = "inline"
    document.getElementById("winner").style.display = 'inline';
    document.getElementById('newGame').style.display = 'inline';
}
function newGame() {
    location.reload();
}
