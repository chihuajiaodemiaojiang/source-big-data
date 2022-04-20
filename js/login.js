function get(s) {
    return document.querySelectorAll(s);
}

let LoGin = get('#LoGin');
let scanCodeToLogIn = get('#scanCodeToLogIn');
let scanCode = get('#scanCode');
let current = get('.current');
for (let i = 0; i < LoGin.length; i++) {
    LoGin[i].onclick = function () {
        for (let j = 0; j < scanCodeToLogIn.length; j++) {
            scanCodeToLogIn[j].classList.remove('active');
        }
        LoGin[i].classList.add('active');
        current[i].style.display = 'block';
        scanCode[i].style.display = 'none';
    }

}
for (let i = 0; i < LoGin.length; i++) {
    scanCodeToLogIn[i].onclick = function () {
        for (let j = 0; j < LoGin.length; j++) {
            LoGin[j].classList.remove('active');
        }
        scanCodeToLogIn[i].classList.add('active');
        scanCode[i].style.display = 'block';
        current[i].style.display = 'none';
    }
}
