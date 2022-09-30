const dataJson = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

//MON

function show0() {
  let x = document.getElementById("mon");
  return(  x.style.display = "block");
}

function hide0() {
  let y = document.getElementById("mon");
  return( y.style.display = "none");
}

  let a = document.getElementById("monday")
  a.innerHTML = dataJson[0].amount;
  a.style.color = "white";
  a.style.fontSize = "10px";
  a.style.textAlign = "left";
  a.style.paddingTop = "8px";

//TUE

function show1() {
  let x = document.getElementById("tue");
  return(  x.style.display = "block");
}

function hide1() {
  let y = document.getElementById("tue");
  return( y.style.display = "none");
}

  let b = document.getElementById("tuesday")
  b.innerHTML = dataJson[1].amount;
  b.style.color = "white";
  b.style.fontSize = "10px";
  b.style.textAlign = "left";
  b.style.paddingTop = "8px";

//WED

function show2() {
  let x = document.getElementById("wed");
  return(  x.style.display = "block");
}

function hide2() {
  let y = document.getElementById("wed");
  return( y.style.display = "none");
}

  let c = document.getElementById("wednesday")
  c.innerHTML = dataJson[2].amount;
  c.style.color = "white";
  c.style.fontSize = "10px";
  c.style.textAlign = "left";
  c.style.paddingTop = "8px";

//THU

function show3() {
  let x = document.getElementById("thu");
  return(  x.style.display = "block");
}

function hide3() {
  let y = document.getElementById("thu");
  return( y.style.display = "none");
}

  let d = document.getElementById("thursday")
  d.innerHTML = dataJson[3].amount;
  d.style.color = "white";
  d.style.fontSize = "10px";
  d.style.textAlign = "left";
  d.style.paddingTop = "8px";

//FRI

function show4() {
  let x = document.getElementById("fri");
  return(  x.style.display = "block");
}

function hide4() {
  let y = document.getElementById("fri");
  return( y.style.display = "none");
}

  let e = document.getElementById("friday")
  e.innerHTML = dataJson[4].amount;
  e.style.color = "white";
  e.style.fontSize = "10px";
  e.style.textAlign = "left";
  e.style.paddingTop = "8px";

//SAT

function show5() {
  let x = document.getElementById("sat");
  return(  x.style.display = "block");
}

function hide5() {
  let y = document.getElementById("sat");
  return( y.style.display = "none");
}

  let f = document.getElementById("saturday")
  f.innerHTML = dataJson[5].amount;
  f.style.color = "white";
  f.style.fontSize = "10px";
  f.style.textAlign = "left";
  f.style.paddingTop = "8px";

//SUN

function show6() {
  let x = document.getElementById("sun");
  return(  x.style.display = "block");
}

function hide6() {
  let y = document.getElementById("sun");
  return( y.style.display = "none");
}

  let g = document.getElementById("sunday")
  g.innerHTML = dataJson[6].amount;
  g.style.color = "white";
  g.style.fontSize = "10px";
  g.style.textAlign = "left";
  g.style.paddingTop = "8px";