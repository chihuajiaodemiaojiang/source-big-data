function get(s) {
    return document.querySelectorAll(s);
}

let form = get('.reg-item input');
let phoneNumber = get('#phoneNumber')[0];
let regBtn = get('#regBtn')[0];
let error = get('.error')
let argeeChkbox = get('#argeeChkbox')[0];
let clearImg = get('.clear-img');
let flag = true;
form.forEach(function (v, i) {
    clearImg[i].onclick = function () {
        v.value = '';
        clearImg[i].style.display = 'none';
    }
    let arr = [/^[a-zA-Z\d]{6,20}$/, /^1[34578]\d{9}$/, /^\d{4}$/, /^[a-zA-Z\d]{6,20}$/];
    v.oninput = function () {
        if (v.value.length > 0) {
            clearImg[i].style.display = 'block';
        } else {
            clearImg[i].style.display = 'none';
        }
        if (arr[i].test(v.value) || v.value.length === 0) {
            v.style.borderColor = '#ccc';
            error[i].style.display = 'none';
        } else {
            v.style.borderColor = 'red';
            error[i].style.display = 'block';

        }
        flag = true;
        form.forEach(function (v2, i2) {
            if (!arr[i2].test(v2.value)) {
                flag = false;
            }
        })
        if (flag && argeeChkbox.checked) {
            regBtn.style.backgroundColor = '#005ade';
            regBtn.style.color = 'white';
            regBtn.disabled = false;
        } else {
            regBtn.style.backgroundColor = '#e0e0e0';
            regBtn.disabled = true;
        }
    }
    argeeChkbox.onclick = function () {
        console.log(arr[i].test(v.value))
        flag = true;
        form.forEach(function (v, i) {
            if (!arr[i].test(v.value)) {
                flag = false;
            }
        })
        if (flag && argeeChkbox.checked) {
            regBtn.style.backgroundColor = '#005ade';
            regBtn.style.color = 'white';
            regBtn.disabled = false;
        } else {
            regBtn.style.backgroundColor = '#e0e0e0';
            regBtn.disabled = true;
        }
    }

    let blue = true;
    regBtn.onclick = function () {
        if (arr[i].test(v.value) && argeeChkbox.checked) {
            console.log(arr[i].test(v.value) && argeeChkbox.checked)
            blue = true;
            alert('????????????,?????????');
            location.href = 'login.html';
        } else {
            alert('????????????????????????');
            blue = false;
            regBtn.style.backgroundColor = '#e0e0e0';
            regBtn.disabled = true;
        }
    }
})
let getVerificationCode = document.querySelector('#getVerificationCode');
let time = 60;
let timer = null;
getVerificationCode.onclick = function () {
    let phoneNum = phoneNumber.value;
    if (phoneNum === '') {
        getVerificationCode.innerHTML = '?????????????????????';
        return;
    }
    if (!/^1[34578]\d{9}$/.test(phoneNum)) {
        getVerificationCode.innerHTML = '????????????????????????';
        return;
    }
    getVerificationCode.disabled = true;
    timer = setInterval(function () {
        time--;
        getVerificationCode.innerHTML = time + '??????????????????';
        if (time <= 0) {
            clearInterval(timer);
            getVerificationCode.innerHTML = '???????????????';
            getVerificationCode.disabled = false;
            time = 60;
        }
    }, 1000)
}

