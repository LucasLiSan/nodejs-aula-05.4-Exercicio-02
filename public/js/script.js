function lista() {
    var list = document.getElementById("switchList");
    var grid = document.getElementById("switchGrid");
    var btnList = document.getElementById("listBtn");
    var btnGrid = document.getElementById("gridBtn");
    var btnList2 = document.getElementById("listBtn-2");
    var btnGrid2 = document.getElementById("gridBtn-2");

    list.style.display = "inline-flex";
    grid.style.display = "none";
    btnList.classList.remove('transparent');
    btnList.classList.add('gray');
    btnGrid.classList.remove('gray');
    btnGrid.classList.add('transparent');
    btnList2.classList.remove('transparent');
    btnList2.classList.add('gray');
    btnGrid2.classList.remove('gray');
    btnGrid2.classList.add('transparent');
}

function grade() {
    var list = document.getElementById("switchList");
    var grid = document.getElementById("switchGrid");
    var btnList = document.getElementById("listBtn");
    var btnGrid = document.getElementById("gridBtn");
    var btnList2 = document.getElementById("listBtn-2");
    var btnGrid2 = document.getElementById("gridBtn-2");
    
    list.style.display = "none";
    grid.style.display = "flex";

    btnGrid.classList.remove('transparent');
    btnGrid.classList.add('gray');
    btnList.classList.remove('gray');
    btnList.classList.add('transparent');
    btnGrid2.classList.remove('transparent');
    btnGrid2.classList.add('gray');
    btnList2.classList.remove('gray');
    btnList2.classList.add('transparent');
}