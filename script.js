const clients = [
  {
    name: "Jack",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatibus magnam. Aliquid totam quaerat reiciendis magnam rerum doloremque, officiis numquam!",
  },

  {
    name: "Linda",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 2,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ea perspiciatis deleniti!",
  },

  {
    name: "Steve",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    rating: 5,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nihil dolore iusto quaerat Aliquid.",
  },
];

const user_profile = document.getElementById("user-profile");
const user_name = document.getElementById("user-name");
const rate_stars = document.querySelectorAll(".rate-star");
const user_review = document.getElementById("user-review");

const btn_left = document.getElementById("left-btn");
const btn_right = document.getElementById("right-btn");

let slide = 0;

btn_left.addEventListener("click", function () {
  if (slide === 0) {
    slide += 1;
  } else {
    slide -= 1;
  }

  rate_stars.forEach(function (star) {
    star.classList.remove("star-glow");
  });

  let client = clients[slide];

  user_name.innerText = client.name;
  user_profile.src = client.image;
  user_review.innerText = client.review;

  let rating = client.rating;

  for (let i = 0; i < rating; i++) {
    // console.log(rate_stars[i]);
    rate_stars[i].classList.add("star-glow");
  }
});

btn_right.addEventListener("click", function () {
  // console.log("right button clicked");

  if (slide < clients.length - 1) {
    slide += 1;
  } else {
    slide = 0;
  }

  rate_stars.forEach(function (star) {
    star.classList.remove("star-glow");
  });

  let client = clients[slide];

  user_name.innerText = client.name;
  user_profile.src = client.image;
  user_review.innerText = client.review;

  let rating = client.rating;

  for (let i = 0; i < rating; i++) {
    // console.log(rate_stars[i]);
    rate_stars[i].classList.add("star-glow");
  }
});
