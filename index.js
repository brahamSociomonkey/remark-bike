//Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fadeIn 3s cubic-bezier(0, 0.6, 0.58, 1) forwards, slideDown 2s cubic-bezier(0, 1, 0.58, 1) forwards`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});

const bikes = document.querySelectorAll("#bikes .slider-container .bike");
bikes.forEach((bike) => {
  observer.observe(bike);
});

let position = 1;
let delay = 10;
//change the sources

const visible = (items, condition, right) => {
  if (condition) {
    if (right) {
      items.forEach((item, index) => {
        item.style.animation = `slideDown 1s ${
          index * 0.05
        }s ease forwards, fadeIn cubic-bezier(0, 0.6, 0.58, 1) forwards`;
      });
    } else {
      items.forEach((item, index) => {
        item.style.animation = `slideDown 1s ${
          index * 0.05
        }s ease forwards, fadeIn cubic-bezier(0, 0.6, 0.58, 1) forwards`;
      });
    }
  } else {
    items.forEach((item) => {
      item.style.animation = `none`;
    });
  }
};

const bikeData = [
  {
    positon: 10,
    innerHtml: `<h2 class= "innerHTML"><em>ATEN</em></h2>`,
  },
  {
    positon: 1,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>plus</small></em></h2>`,
  },
  {
    positon: 2,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>plus</small></em></h2>`,
  },
  {
    positon: 3,
    innerHtml: `
    <h2 class= "innerHTML"><em>HIP-HOP<small>plus</small></em></h2>  `,
  },
  {
    positon: 4,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>plus</small></em></h2>`,
  },
  {
    positon: 5,
    innerHtml: `<h2 class= "innerHTML"><em>ATEN</em></h2>`,
  },
  {
    positon: 6,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>dlx</small></em></h2>`,
  },
  {
    positon: 7,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>dlx</small></em></h2>`,
  },
  {
    positon: 8,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>dlx</small></em></h2>`,
  },
  {
    positon: 9,
    innerHtml: `<h2 class= "innerHTML"><em>ATEN</em></h2>`,
  },
  {
    positon: 10,
    innerHtml: `<h2 class= "innerHTML"><em>ATEN</em></h2>`,
  },
  {
    positon: 1,
    innerHtml: `<h2 class= "innerHTML"><em>HIP-HOP<small>plus</small></em></h2>`,
  },
];

const handleClick = (e) => {
  //compare target and node
  const { target } = e;
  if (bike1.isEqualNode(target)) {
    if (position <= 1) position = 10;
    --position;

    //toggle animation and put src and innerHTML
    visible([bike1, bike2, bike3], false);
    bike1.style.backgroundImage = `url(./assets/variants/${
      bikeData[position - 1].positon
    }.png)`;
    bike1.innerHTML = bikeData[position - 1].innerHtml;
    bike2.style.backgroundImage = `url(./assets/variants/${bikeData[position].positon}.png)`;
    bike2.innerHTML = bikeData[position].innerHtml;
    bike3.style.backgroundImage = `url(./assets/variants/${
      bikeData[position + 1].positon
    }.png)`;
    bike3.innerHTML = bikeData[position + 1].innerHtml;

    setTimeout(() => {
      visible([bike1, bike2, bike3], true, false);
    }, delay);
  } else if (bike3.isEqualNode(target)) {
    if (position >= 9) position = 1;
    ++position;

    visible([bike1, bike2, bike3], false);
    bike1.style.backgroundImage = `url(./assets/variants/${
      bikeData[position - 1].positon
    }.png)`;
    bike1.innerHTML = bikeData[position - 1].innerHtml;
    bike2.style.backgroundImage = `url(./assets/variants/${bikeData[position].positon}.png)`;
    bike2.innerHTML = bikeData[position].innerHtml;
    bike3.style.backgroundImage = `url(./assets/variants/${
      bikeData[position + 1].positon
    }.png)`;
    bike3.innerHTML = bikeData[position + 1].innerHtml;

    setTimeout(() => {
      visible([bike1, bike2, bike3], true, true);
    }, delay);
  }
};

const bike1 = document.querySelector(
  "#bikes .slider-container .bikes-container .bike-container-1"
);

const bike2 = document.querySelector(
  "#bikes .slider-container .bikes-container .bike-container-2"
);

const bike3 = document.querySelector(
  "#bikes .slider-container .bikes-container .bike-container-3"
);

[bike1, bike2, bike3].forEach((item) => {
  item.addEventListener("click", handleClick);
});

let t = null

t = setInterval(() => {
  bike3.click()
}, 3000);

//Handling the forms
const data = {};

const handlPayLoad = (data) => {
  console.log(data);
  //Backend Setup
  Email.send({
    SecureToken: "a010d42a-7d03-4066-b834-6514db9ecdd2",
    To: "braham9922@gmail.com",
    From: "braham@sociomonkey.com",
    Subject: "Data from the remark ev",
    Body: data,
  }).then((message) => console.log(message));
};
const handleSubmit = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll(
    "#contact-form form .form-container input"
  );

  inputs.forEach((input) => {
    const { name, value } = input;
    data[name] = value.trim();
  });

  handlPayLoad(data);
};

const handleSub = (e) => {
  e.preventDefault();
  const input = document.querySelector("footer form input");
  const { name, value } = input;
  data[name] = value.trim();
  handlPayLoad(data);
};

//event listener for form
const mainForm = document.querySelector("#contact-form form");
const subsForm = document.querySelector("footer form");
mainForm.addEventListener("submit", handleSubmit);
subsForm.addEventListener("submit", handleSub);
