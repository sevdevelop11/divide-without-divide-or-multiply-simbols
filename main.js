function countNumbers(number) {
  let num = number.toString().split(".")[1];
  return num ? num.length : 0;
}

function multiply(a, b, aux = b, quotient = 0, result = "") {
  console.log(a, b, aux, quotient, result);
  if (a > aux) {
    quotient++;
    return multiply(a, b, aux + b, quotient, result);
  } else if (a < aux) {
    let rem = a - aux + b;
    let auxRem = rem;
    result = result.includes(".") ? result + quotient : result + quotient + "." ;
    if (result.length>5) { return parseFloat(result).toFixed(3); };
    for (let i = 0; i < 9; i++) {
      rem = rem + auxRem;
    }
    return multiply(rem, b, b, 0, result);

} else {
    quotient++;
    result = result + quotient;
    return result;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const a = Number(formData.get("dividend"));
    const b = Number(formData.get("divisor"));

    let result = multiply(a, b);
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(result));
    span.textContent = result;
    document.getElementById("result").textContent = span.innerHTML;
  });
});
