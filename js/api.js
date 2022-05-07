let apiTypeData = [
    {name: "全部", keyword: "身份证实名", isnew: false},
    {name: "生活服务", keyword: "银行卡", isnew: false},
    {name: "金融科技", keyword: "短信", isnew: false},
    {name: "交通地理", keyword: "天气", isnew: false},
    {name: "充值缴费", keyword: "短信", isnew: false},
    {name: "数据智能", keyword: "手机归属地", isnew: false},
    {name: "企业工商", keyword: "IP", isnew: false},
    {name: "应用开发", keyword: "手机归属地", isnew: false},
    {name: "电子商务", keyword: "IP", isnew: false},
    {name: "吃喝玩乐", keyword: "视频", isnew: false},
    {name: "文娱视频", keyword: "视频", isnew: false},
    {name: "免费接口大全", keyword: "短信", isnew: true},
    {name: "短信", keyword: "身份证实名", isnew: false},
    {name: "汽车", keyword: "银行卡", isnew: false},
    {name: "核验", keyword: "银行卡", isnew: false},
    {name: "最新发布", keyword: "银行卡", isnew: true},
    {name: "API私有化部署", keyword: "身份证实名", isnew: true},
]
let nav = document.querySelector("#nav")
apiTypeData.forEach(function (v, i) {
    nav.innerHTML += `<a href="" class="${v.isnew ? "bold" : ""}">${v.name}</a>`
})
let btnList = document.querySelectorAll("#nav a")

let label = document.querySelector(".search")
btnList.forEach(function (v, i) {
    v.onclick = function () {
        btnList.forEach(function (v2, i2) {
            v2.classList.remove("active")
        })
        v.classList.add("active")

        label.innerHTML = `<span class="desc fl" id="curType">${apiTypeData[i].name}</span>
        <div class="assort-search fl">
        <input class="assort-kw" id="searchInp" name="kw" placeholder="${apiTypeData[i].keyword}">
        <img alt="" class="magnifier" src="../images/magnifier.png">
        </div>`
        return false;
    }
})
let listDataArr = [
    //第一行
    {img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false},
    {img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true},
    {img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false},
    {img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true},
    {img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true},

    //第二行
    {img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false},
    {img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true},
    {img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false},
    {img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true},
    {img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true},
    //第三行
    {img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false},
    {img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true},
    {img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false},
    {img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true},
    {img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true},
    //第四行
    {img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false},
    {img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true},
    {img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false},
    {img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true},
    {img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true},

]

let apIContent = document.querySelector(".api-content")
listDataArr.forEach(function (v, i) {
    apIContent.innerHTML += `
    <li class="list-item fl tcenter">
        ${v.isSpecial ? "<span>企业专用</span>" : ""}
        <div class="content">
            <img src="../images/${v.img}" alt="">
            <p class="api-name">${v.name}</p>
            <p class="api-price ${v.price === "免费" ? "green" : "red"}">
                ${v.price}
            </p>
        </div>
        <a class="apply-data">申请数据</a>
    </li>
    `
})

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
let mask = document.querySelector('.mask')
let loginMain = document.querySelector('.login-main')
let content = document.querySelector('.content')
let listItem = document.querySelectorAll('.list-item')


mask.addEventListener('click', function () {
    mask.style.display = 'none'
    loginMain.style.display = 'none'
})
listItem.forEach(function (v, i) {
    v.addEventListener('click', function (e) {

        if (e.target.className === 'apply-data') {
            mask.style.display = 'block'
            loginMain.style.display = 'block'
        } else {
            location.href = './APIDetails.html'
        }
    })
})





