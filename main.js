let x = []
let lp = document.getElementById("lp");
for (let i = 0; i <= 9; i++) {
  let num = document.getElementById(i);
  x.push(num);
}
let num = document.getElementById(j);
let kl = document.getElementById("kl");

function ww(as) {
  x[as].onclick = function() {
    j.innerHTML += as;
    lp.innerHTML += as;
    v.innerHTML = j.innerHTML;
    cc();
    loo();
    vb();
  }
}
kl.onclick = function() {
  j.innerHTML += '.';
  lp.innerHTML += '.';
  vb();
}
ww(0);
ww(1);
ww(2);
ww(3);
ww(4);
ww(5);
ww(6);
ww(7);
ww(8);
ww(9);
let c = document.getElementById("c");
c.onclick = function() {
  j.innerHTML = '';
  lp.innerHTML = '';
  j.style.fontSize = "40px";
  loo();
  vb();
  wha();
  qw();
}

function cc() {
  if (j.innerHTML.length >= 14) {
    j.style.fontSize = "18px";
  } else if (j.innerHTML.length == 31) { j.innerHTML += "<br></br>" }
}
let z = document.getElementById("z");
let dell = document.getElementById("dell");
let delll = document.getElementById("delll");

function ddd() {
  if (j.innerHTML.length == 13) { j.style.fontSize = "40px" }
}
dell.onclick = function() {
  j.innerHTML = j.innerHTML.slice(0, -1);
  lp.innerHTML = lp.innerHTML.slice(0, -1);
  qw();
  vb();
  ddd();
  loo();
  wha();
}
delll.onclick = function() {
  j.innerHTML = j.innerHTML.slice(0, -1);
  lp.innerHTML = lp.innerHTML.slice(0, -1);
  qw();
  ddd();
  loo();
  vb();
  wha();
}

function loo() {
  if (j.innerHTML == '') {
    dell.style.background = '#838BDAA6';
    delll.style.borderRight = '10px solid #838BDAA6';
  } else {
    dell.style.background = '#838BDA';
    delll.style.borderRight = '10px solid #838BDA';
  }
}
let zg = document.getElementById("zg");
zg.onclick = function() {
  j.innerHTML += '+';
  lp.innerHTML += '+';
  vb();
}
let na = document.getElementById("na");
na.onclick = function() {
  j.innerHTML += '-';
  lp.innerHTML += '-';
  vb();
}
let v = document.getElementById("v");

let ei = document.getElementById("ei");

ei.onclick = function() {
  j.innerHTML = eval(lp.innerHTML);
  lp.innerHTML = eval(lp.innerHTML);
  cc();
  v.innerHTML = '';
}
let gl = document.getElementById("gl");
gl.onclick = function() {
  lp.innerHTML += '/';
  j.innerHTML += '÷';
  vb();
}
let fl = document.getElementById("fl");
fl.onclick = function() {
  j.innerHTML += '×';
  lp.innerHTML += '*';
  vb()
}
let mai = document.getElementById("mai");
mai.onclick = function() {
  j.innerHTML += '%';
  lp.innerHTML += "/100";
  vb();
}
tt = 'x';
let cco = document.getElementById("cco");
cco.onclick = function() {
  if (tt == 'x')
  {
    j.innerHTML += '(';
    tt = 'o';
    lp.innerHTML += "(";
    v.innerHTML = eval(lp.innerHTML);
  }
  else if (tt == 'o') {
    j.innerHTML += ")";
    tt = "x";
    lp.innerHTML += ")";
    v.innerHTML = eval(lp.innerHTML);
  }
}
let znn = document.getElementById("znn");
znn.onclick = function() {
  j.innerHTML += "(-";
  lp.innerHTML += "(-";
  tt = "o";
  vb();
}

function vb() {
  v.innerHTML = eval(lp.innerHTML);
}

function wha() {
  if (v.innerHTML == 'undefined') {
    v.innerHTML = '';
  }
}

function qw() {
  if (j.innerHTML == '') {
    tt = 'x';
  }
}