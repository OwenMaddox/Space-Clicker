window.onload = function load() {
    document.getElementById("total").innerHTML = localStorage.money;
    document.getElementById("total2").innerHTML = localStorage.money;
    document.getElementById("lemonbought").innerHTML = localStorage.lemon;
    document.getElementById("washbought").innerHTML = localStorage.wash;
    document.getElementById("pizzabought").innerHTML = localStorage.pizza;
    document.getElementById("moviebought").innerHTML = localStorage.movie;
    document.getElementById("carbought").innerHTML = localStorage.car;
    document.getElementById("oilbought").innerHTML = localStorage.oil;
    localStorage.clicks = Number(localStorage.clicks);
    rankcheck();
    mousecheck();
}    
    
function mousecheck() {
    if (localStorage.clicks == 1) {
        document.getElementById("x2").disabled = false;
        document.getElementById("x3").disabled = false;
        document.getElementById("x5").disabled = false;
        document.getElementById("x10").disabled = false;
    }
    else if (localStorage.clicks == 2) {
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = false;
        document.getElementById("x5").disabled = false;
        document.getElementById("x10").disabled = false;
        document.getElementById("x15").disabled = false;
        document.getElementById("x25").disabled = false;
    }
    else if (localStorage.clicks == 3) {
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = true;
        document.getElementById("x5").disabled = false;
        document.getElementById("x10").disabled = false;
        document.getElementById("x15").disabled = false;
        document.getElementById("x25").disabled = false;
    }
    else if (localStorage.clicks == 5) {
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = true;
        document.getElementById("x5").disabled = true;
        document.getElementById("x10").disabled = false;
        document.getElementById("x15").disabled = false;
        document.getElementById("x25").disabled = false;
    }
    else if (localStorage.clicks == 10) {
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = true;
        document.getElementById("x5").disabled = true;
        document.getElementById("x10").disabled = true;
        document.getElementById("x15").disabled = false;
        document.getElementById("x25").disabled = false;
    }
    else if (localStorage.clicks == 15) {
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = true;
        document.getElementById("x5").disabled = true;
        document.getElementById("x10").disabled = true;
        document.getElementById("x15").disabled = true;
        document.getElementById("x25").disabled = false;
    }
    else if (localStorage.clicks == 25) {
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = true;
        document.getElementById("x5").disabled = true;
        document.getElementById("x10").disabled = true;
        document.getElementById("x15").disabled = true;
        document.getElementById("x25").disabled = true;
    }
}   

function cash() {
    localStorage.money = Number(localStorage.money) + 1 * localStorage.clicks;
    document.getElementById("total").innerHTML = localStorage.money;
    document.getElementById("total2").innerHTML = localStorage.money;
    rankcheck();
}

function reset() {
    localStorage.money = Number(localStorage.money = 0);
    localStorage.lemon = Number(localStorage.lemon = 0);
    localStorage.wash = Number(localStorage.wash = 0);
    localStorage.pizza = Number(localStorage.pizza = 0);
    localStorage.movie = Number(localStorage.movie = 0);
    localStorage.car = Number(localStorage.car = 0);
    localStorage.oil = Number(localStorage.oil = 0);
    localStorage.clicks = 1;
    document.getElementById("total").innerHTML = localStorage.money;
    document.getElementById("lemonbought").innerHTML = localStorage.lemon;
    document.getElementById("washbought").innerHTML = localStorage.wash;
    document.getElementById("pizzabought").innerHTML = localStorage.pizza;
    document.getElementById("moviebought").innerHTML = localStorage.movie;
    document.getElementById("carbought").innerHTML = localStorage.car;
    document.getElementById("oilbought").innerHTML = localStorage.oil;
    document.getElementById("x3").disabled = false;
    document.getElementById("x2").disabled = false;
    document.getElementById("x5").disabled = false;
    document.getElementById("x10").disabled = false;
    document.getElementById("x15").disabled = false;
    document.getElementById("x25").disabled = false;
}

function rankcheck() {
    if (localStorage.money < 10) {
        document.getElementById("rank").innerHTML = "Onesinaire"
    }
    if (localStorage.money > 9) {
        document.getElementById("rank").innerHTML = "Tensinaire"
    }
    if (localStorage.money > 99) {
        document.getElementById("rank").innerHTML = "Hundredaire"
    }
    if (localStorage.money > 999) {
        document.getElementById("rank").innerHTML = "Thousandaire"
    }
    if (localStorage.money > 9999) {
        document.getElementById("rank").innerHTML = "Tenthousandaire"
    }
    if (localStorage.money > 99999) {
        document.getElementById("rank").innerHTML = "Hundredthousandaire"
    }
    if (localStorage.money > 999999) {
        document.getElementById("rank").innerHTML = "Millionaire"
    }
}

//document.onkeydown = checkkey;
function checkkey(e) {
  e = e || window.event;
  if (e.keyCode == "79") {
    localStorage.money = Number(localStorage.money) + 5000
    document.getElementById("total").innerHTML = localStorage.money;
  }
}

function lemonbuy() {
    if (localStorage.money > 49) {
            rankcheck()
            localStorage.lemon = Number(localStorage.lemon) + 1;
            document.getElementById("lemonbought").innerHTML = localStorage.lemon;
            localStorage.money = Number(localStorage.money) - 50;
            document.getElementById("total").innerHTML = localStorage.money;
    }
    else {
        alert("Not enough money!")
    }
}


function washbuy() {
    if (localStorage.money > 224) {
            rankcheck()
            localStorage.wash = Number(localStorage.wash) + 1;
            document.getElementById("washbought").innerHTML = localStorage.wash;
            localStorage.money = Number(localStorage.money) - 225;
            document.getElementById("total").innerHTML = localStorage.money;
    }
    else {
        alert("Not enough money!")
    }
}

function pizzabuy() {
    if (localStorage.money > 1249) {
            rankcheck()
            localStorage.pizza = Number(localStorage.pizza) + 1;
            document.getElementById("pizzabought").innerHTML = localStorage.pizza;
            localStorage.money = Number(localStorage.money) - 1250;
            document.getElementById("total").innerHTML = localStorage.money;
    }
    else {
        alert("Not enough money!")
    }
}


function moviebuy() {
    if (localStorage.money > 19999) {
            rankcheck()
            localStorage.movie = Number(localStorage.movie) + 1;
            document.getElementById("moviebought").innerHTML = localStorage.movie;
            localStorage.money = Number(localStorage.money) - 20000;
            document.getElementById("total").innerHTML = localStorage.money;
    }
    else {
        alert("Not enough money!")
    }
}

function carbuy() {
    if (localStorage.money > 99999) {
            rankcheck()
            localStorage.car = Number(localStorage.car) + 1;
            document.getElementById("carbought").innerHTML = localStorage.car;
            localStorage.money = Number(localStorage.money) - 100000;
            document.getElementById("total").innerHTML = localStorage.money;
    }
    else {
        alert("Not enough money!")
    }
}

function oilbuy() {
    if (localStorage.money > 999999) {
            rankcheck()
            localStorage.oil = Number(localStorage.oil) + 1;
            document.getElementById("oilbought").innerHTML = localStorage.oil;
            localStorage.money = Number(localStorage.money) - 1000000;
            document.getElementById("total").innerHTML = localStorage.money;
    }
    else {
        alert("Not enough money!")
    }
}

function x2() {
    if (localStorage.money > 499) {
            rankcheck()
            localStorage.clicks = 2;
            localStorage.money = Number(localStorage.money) - 500;
            document.getElementById("total").innerHTML = localStorage.money;
            mousecheck();
    }
    else {
        alert("Not enough money!")
    }
}

function x3() {
    if (localStorage.money > 999) {
            rankcheck();
            localStorage.clicks = 3;
            localStorage.money = Number(localStorage.money) - 1000;
            document.getElementById("total").innerHTML = localStorage.money;
            mousecheck()
    }
    else {
        alert("Not enough money!")
    }
}

function x5() {
    if (localStorage.money > 2999) {
            rankcheck();
            localStorage.clicks = 5;
            localStorage.money = Number(localStorage.money) - 3000;
            document.getElementById("total").innerHTML = localStorage.money;
            mousecheck()
    }
    else {
        alert("Not enough money!")
    }
}

function x10() {
    if (localStorage.money > 29999) {
            rankcheck();
            localStorage.clicks = 10;
            localStorage.money = Number(localStorage.money) - 30000;
            document.getElementById("total").innerHTML = localStorage.money;
            mousecheck()
    }
    else {
        alert("Not enough money!")
    }
}

function x15() {
    if (localStorage.money > 249999) {
            rankcheck();
            localStorage.clicks = 15;
            localStorage.money = Number(localStorage.money) - 250000;
            document.getElementById("total").innerHTML = localStorage.money;
            mousecheck()
    }
    else {
        alert("Not enough money!")
    }
}
function x25() {
    if (localStorage.money > 1499999) {
            rankcheck();
            localStorage.clicks = 25;
            localStorage.money = Number(localStorage.money) - 1500000;
            document.getElementById("total").innerHTML = localStorage.money;
            mousecheck()
    }
    else {
        alert("Not enough money!")
    }
}


setInterval(function () {
    localStorage.money = Number(localStorage.money) + Number(localStorage.lemon); 
    localStorage.money = Number(localStorage.money) + Number(localStorage.wash) * 5; 
    localStorage.money = Number(localStorage.money) + Number(localStorage.pizza) * 15; 
    localStorage.money = Number(localStorage.money) + Number(localStorage.movie) * 200; 
    localStorage.money = Number(localStorage.money) + Number(localStorage.car) * 5000; 
    localStorage.money = Number(localStorage.money) + Number(localStorage.oil) * 60000;
    document.getElementById("total").innerHTML = localStorage.money;
    document.getElementById("total2").innerHTML = localStorage.money;
}, 1000)
