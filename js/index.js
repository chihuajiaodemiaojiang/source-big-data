let liArr = document.querySelectorAll('.api-item a');
liArr.forEach(function (v, i) {
    v.onmouseover = function () {
        let imgUrl = v.children[0].src;
        let str = imgUrl.lastIndexOf('/') + 1;
        let end = imgUrl.lastIndexOf('.');
        imgName = imgUrl.substring(str, end);
        v.children[0].src = `../images/${imgName}-c.svg`;
        v.parentNode.style.backgroundColor = '#1270ed';
    }
    v.onmouseout = function () {
        v.children[0].src = `../images/${imgName}.svg`;
        v.parentNode.style.backgroundColor = '#fff';
    }
});

