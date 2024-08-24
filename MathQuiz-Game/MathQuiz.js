let btns1 = document.querySelectorAll('#player1 .allbtns');
let btns2 = document.querySelectorAll('#player2 .allbtns');
let homePage = document.getElementById('homepage');
let answer = "";
let pyr1Score = 0;
let pyr2Score = 0;

function getvalue() {
    let firstVal = Math.floor(Math.random() * 30);
    let secondVal = Math.floor(Math.random() * 30 + 1);
    let symarr = ["/", "+", "×", "-"];
    let sym = symarr[Math.floor(Math.random() * 4)];
    let singlebtn = Math.floor(Math.random() * 3);
    switch (sym) {
        case '+':
            answer = eval(firstVal + secondVal);
            break;

        case '-':
            answer = eval(firstVal - secondVal);
            break;

        case '×':
            answer = eval(firstVal * secondVal);
            break;
        case '/':
            answer = Math.round(eval(firstVal / secondVal));
            break;

        default:
            break;
    }

    document.querySelectorAll(".playerdisplay").forEach((display) => {
        display.innerHTML = `${firstVal + ` ${sym} ` + secondVal}`
    })

    btns1[0].innerHTML = `${answer + 35}`;
    btns2[0].innerHTML = `${answer + 35}`;
    btns1[1].innerHTML = `${answer + secondVal}`;
    btns2[1].innerHTML = `${answer + secondVal}`;
    btns1[2].innerHTML = `${answer + firstVal}`;
    btns2[2].innerHTML = `${answer + firstVal}`;
    btns1[singlebtn].innerHTML = answer, btns2[singlebtn].innerHTML = answer;
    document.getElementById('score').children[0].innerHTML = `${pyr2Score} <b>•</b>`
    document.getElementById('score').children[1].innerHTML = `${pyr1Score}`

}


document.querySelectorAll('.allbtns').forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.innerHTML == answer) {

            if (btn.parentElement.getAttribute('id') == "player1") {
                pyr1Score += 1;
                pyr2Score += 0;
            }
            else {
                pyr1Score += 0;
                pyr2Score += 1;
            }
            btn.parentElement.style.backgroundColor = "#00ff08";
            setTimeout(() => {
                getvalue();
                btn.parentElement.style.backgroundColor = "transparent";
            }, 1000);

            Checkwinner(pyr1Score, pyr2Score);

        }
        else {
            if (btn.parentElement.getAttribute('id') == "player1") {

                pyr1Score += 0;
                pyr2Score += 1;
            }
            else {

                pyr1Score += 1;
                pyr2Score += 0;

            }

            btn.parentElement.style.backgroundColor = "rgba(67,65,78,255)";
            setTimeout(() => {
                getvalue();
                btn.parentElement.style.backgroundColor = "transparent";
            }, 1000);
            Checkwinner(pyr1Score, pyr2Score);

        }
    })
})


function Checkwinner(p1, p2){
    if (p1 == 10 || p2 == 10) {
        if (p1 == 10) {
            console.log(' player 1 winner');
            homePage.style.display = 'block';
            homePage.style.backgroundColor = 'rgb(137 193 216)';
            homePage.innerHTML = `<h1>BLUE <br>WIN</h1>`;
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
        else {
            console.log(' player 2 winner');
            homePage.style.display = 'block';
            homePage.style.backgroundColor = 'rgb(205 90 90)';
            homePage.innerHTML = `<h1>RED <br>WIN</h1>`;
            setTimeout(() => {
                location.reload();
            }, 3000);
       
        }
    }
}

function startgame() {
    homePage.style.display = 'none';
}
