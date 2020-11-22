//accesing the bike

const bikes = document.querySelectorAll(
  "main #bikes .bikes-container .bike-container .img-container"
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
    `main #bikes .bikes-container .bike-container [data-num="${expression}"]`
  )[0];
};

const animateBikes = (e) => {
	let { num } = e.target.closest(".img-container").dataset;
  const l1 = getElement(num, "-", 1);
  const r1 = getElement(num, "+", 1);
  const current = document.querySelector(
    `main #bikes .bikes-container .bike-container [data-num="${num}"]`
  );

  current.className = `img-container front`;
  l1.className = `img-container l1 passive`;
  r1.className = `img-container r1 passive`;

  bikes.forEach((bike) => {
    if (
      bike.isEqualNode(current) ||
      bike.isEqualNode(l1) ||
      bike.isEqualNode(r1)
    )
      return;
    else {
      bike.className = `img-container unactive`;
    }
  });
}

const handleClick = (e) => {
  animateBikes(e)
};

//adding eventListener
bikes.forEach((bike) => {
  bike.addEventListener("click", handleClick);
});

// console.log(bikes)

// setInterval(() => {
// 	bikes
// }, 200);

//    transform: ;
