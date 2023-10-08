function resultado() {
  var p1 = document.querySelector("input[name='p1']:checked").value;
  var p2 = document.querySelector("input[name='p2']:checked").value;
  var p3 = document.querySelector("input[name='p3']:checked").value;
  var p4 = document.querySelector("input[name='p4']:checked").value;
  var p5 = document.querySelector("input[name='p5']:checked").value;
  var p6 = document.querySelector("input[name='p6']:checked").value;
  var p7 = document.querySelector("input[name='p7']:checked").value;
  var p8 = document.querySelector("input[name='p8']:checked").value;
  var p9 = document.querySelector("input[name='p9']:checked").value;
  var p10 = document.querySelector("input[name='p10']:checked").value;
  var contador = 0;
  if (p1 == "c") {
    contador += 1;
  }

  if (p2 == "b") {
    contador += 1;
  }
  if (p3 == "b") {
    contador += 1;
  }
  if (p4 == "a") {
    contador += 1;
  }
  if (p5 == "a") {
    contador += 1;
  }
  if (p6 == "a") {
    contador += 1;
  }
  if (p7 == "b") {
    contador += 1;
  }
  if (p8 == "a") {
    contador += 1;
  }
  if (p9 == "b") {
    contador += 1;
  }
  if (p10 == "d") {
    contador += 1;
  }
  if (contador <= 5) {
    alert(`você acertou    ${contador} `);

    document.body.innerHTML = '<img src="imgs/images.jpg" heigth="200px"/> ';
    alert("você é horrivel");
  } else if (contador == 6) {
    alert(` você acertour ${contador},  acima da média`);
  } else {
    alert(`você acertou   ${contador} `);
    document.body.innerHTML = '<img src="imgs/chore.jpg" heigth="200px"/> ';
    document.body.style.backgroundColor = "red";
  }
}
