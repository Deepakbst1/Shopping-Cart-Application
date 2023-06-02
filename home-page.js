// If user is already logged in the then the user will automatically diverted to the website

if (localStorage.getItem("currentUser") === null) {
  // Event listner for the login button there is no data in local storage
  let loginButton = document.querySelector("#login-button");
  loginButton.style.cursor = "pointer";
  loginButton.addEventListener("click", () => {
    if (localStorage.length != 0) {
      location.href = "./login.html";
    } else {
      location.href = "./signup.html";
    }
  });

  // query selector for navbar login
  let navLogin = document.querySelector("#login > a");
  if (localStorage.length != 0) {
    navLogin.setAttribute("href", "./login.html");
  } else {
    navLogin.setAttribute("href", "./signup.html");
  }

  // signup button Event listener
  let signupButton = document.querySelector("#signup-button");
  signupButton.style.cursor = "pointer";
  signupButton.addEventListener("click", () => {
    location.href = "./signup.html";
  });

  // Fetching data for the demo product of the landing page
  let url = "https://fakestoreapi.com/products";
  let prom = fetch(url);

  prom
    .then((res) => res.json())
    .then((data) => {
      let min = Math.ceil(1);
      let max = Math.floor(20);
      let num = Math.floor(Math.random() * (max - min + 1) + min);

      let randomProd = data[num];

      let image = document.querySelector(".prodImage");
      image.style.backgroundImage = `url("${randomProd.image}")`;

      let title = document.querySelector(".prodTitle");
      title.innerText = randomProd.title;

      let pricetag = document.querySelector(".priceTag");
      pricetag.innerText = `Price: $${randomProd.price}`;

      let rat = document.querySelector(".prodRating");
      rat.innerText = `Rating: ${randomProd.rating.rate}/5`;
    })
    .catch(() => {
      location.reload();
    });
} else {
  location.href = "./shop.html";
}
