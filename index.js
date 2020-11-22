//accesing the bike

const bikes = document.querySelectorAll(
  "main #bikes .bikes-container .bike-container"
);

const getElement = (num, sign, unit) => {
  let string = `${num} ${sign} ${unit}`;
  let expression = eval(string);

  switch (expression) {
    case -1:
      expression = 9;
      break;
    case 0:
      expression = 10;
      break;
    case 11:
      expression = 1;
      break;
    case 12:
      expression = 2;
      break;
  }

  return document.querySelectorAll(
    `main #bikes .bikes-container [data-num="${expression}"]`
  )[0];
};

const animateBikes = (e) => {
  let { num } = e.target.closest(".bike-container").dataset;
  const l1 = getElement(num, "-", 1);
  const r1 = getElement(num, "+", 1);
  const current = document.querySelector(
    `main #bikes .bikes-container [data-num="${num}"]`
  );

  current.className = `bike-container front`;
  l1.className = `bike-container l1 passive`;
  r1.className = `bike-container r1 passive`;

  bikes.forEach((bike) => {
    if (
      bike.isEqualNode(current) ||
      bike.isEqualNode(l1) ||
      bike.isEqualNode(r1)
    )
      return;
    else {
      bike.className = `bike-container unactive`;
    }
  });
};

const handleClick = (e) => {
  animateBikes(e);
};

let t = undefined;
const handleMouseDown = (e) => {
  clearInterval(t);
  t = undefined;

  setTimeout(() => {
    startInterval();
  }, 5000);
};

const startInterval = () => {
  let i = 0;
  if (t) return;
  t = setInterval(() => {
    if (bikes[i]) {
      bikes[i++].click();
    } else i = 0;
  }, 3500);
};

//adding eventListener
bikes.forEach((bike) => {
  bike.addEventListener("click", handleClick);
  bike.addEventListener("mousedown", handleMouseDown);
});
startInterval();
bikes[7].click()
