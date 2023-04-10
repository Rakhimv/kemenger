let w = window.innerWidth
let h = window.innerHeight

console.log(w, h);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


if (document.documentElement.clientWidth < 1356) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


if (document.documentElement.clientWidth < 829) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


if (w < 320) {
  alert("MinWidth = 320px")
}



let swp = document.querySelector(".swiper")


let over1 = document.querySelector("#tb1")
let heig1 = document.querySelector("#ss1")
let more1 = document.querySelector("#mr1")

let over2 = document.querySelector("#tb2")
let heig2 = document.querySelector("#ss2")
let more2 = document.querySelector("#mr2")

let over3 = document.querySelector("#tb3")
let heig3 = document.querySelector("#ss3")
let more3 = document.querySelector("#mr3")

let over4 = document.querySelector("#tb4")
let heig4 = document.querySelector("#ss4")
let more4 = document.querySelector("#mr4")

let over5 = document.querySelector("#tb5")
let heig5 = document.querySelector("#ss5")
let more5 = document.querySelector("#mr5")

let dlina = 900

function more_1() {
  over1.style.overflow = "auto";
  over1.style.height = "auto";
  heig1.style.height = dlina + "px"
  swp.style.height = dlina + "px"
  more1.style.display = "none"
}

function more_2() {
  over2.style.overflow = "auto";
  over2.style.height = "auto";
  heig2.style.height = dlina + "px"
  swp.style.height = dlina + "px"
  more2.style.display = "none"
}

function more_3() {
  over3.style.overflow = "auto";
  over3.style.height = "auto";
  heig3.style.height = dlina + "px"
  swp.style.height = dlina + "px"
  more3.style.display = "none"
}

function more_4() {
  over4.style.overflow = "auto";
  over4.style.height = "auto";
  heig4.style.height = dlina + "px"
  swp.style.height = dlina + "px"
  more4.style.display = "none"
}

function more_5() {
  over5.style.overflow = "auto";
  over5.style.height = "auto";
  heig5.style.height = dlina + "px"
  swp.style.height = dlina + "px"
  more5.style.display = "none"
}



let offset = 0
const sliderLine = document.querySelector(".slider-line")

document.querySelector(".next").addEventListener("click", function () {
  offset = offset + 400
  if (offset > 1400) {
    offset = 0
  }

  sliderLine.style.left = -offset + 'px';
});

document.querySelector(".prev").addEventListener("click", function () {
  offset = offset - 400
  if (offset < 0) {
    offset = 1200
  }

  sliderLine.style.left = -offset + '%';
})



let about = document.querySelector(".about")
let katalog = document.querySelector(".katalog")
let sertif = document.querySelector(".sertif")
let reviews = document.querySelector(".reviews")
let contacts = document.querySelector(".contacts")

let aboutPos = about.offsetTop
let katalogPos = katalog.offsetTop
let sertifPos = sertif.offsetTop
let reviewsPos = reviews.offsetTop
let contactsPos = contacts.offsetTop


let zbox = document.querySelector("#zayavka-box")
let zbg = document.querySelector(".zayavka-bgc")
let zblock = document.querySelector(".zayavka-block")
let bgc = document.querySelector(".bgc")
let body = document.body


let mbmenu = document.querySelector(".mobile-menu")
let mbmenu_parent = document.querySelector(".mb-bgc")
let bgcmb = document.querySelector(".bgcmb")
let exit = document.querySelector(".exit")


function aboutFNC() {
  event.preventDefault()
  scrollTo(0, aboutPos - 20)
  body.style.overflow = 'auto'
  mbmenu_parent.style.display = "none"
}

function katalogFNC() {
  event.preventDefault()
  scrollTo(0, katalogPos)
  body.style.overflow = 'auto'
  mbmenu_parent.style.display = "none"
}

function sertifFNC() {
  event.preventDefault()
  scrollTo(0, sertifPos - 20)
  body.style.overflow = 'auto'
  mbmenu_parent.style.display = "none"
}

function reviewsFNC() {
  event.preventDefault()
  scrollTo(0, reviewsPos - 20)
  body.style.overflow = 'auto'
  mbmenu_parent.style.display = "none"
}

function contactsFNC() {
  event.preventDefault()
  scrollTo(0, contactsPos - 20)
  body.style.overflow = 'auto'
  mbmenu_parent.style.display = "none"
}


// Заявка



function zayavka() {
  scroll(0, 0)
  zbox.classList.toggle("zayavka-box")
  zbox.style.display = "block"
  zbg.style.top = 50 + "%"
  body.style.overflow = "hidden"
}

bgc.onclick = () => {
  zbox.classList.toggle("zayavka-box")
  zbox.style.display = "none"
  body.style.overflow = "auto"
  zblock.innerHTML = ` <p>Заполните <span style="color: #018FA3;">форму</span><br> и мы обязательно<br> свяжемся с Вами.</p>
  <form action="#">
      <input type="text" placeholder="Ваше имя...">
      <input type="number" placeholder="Ваше телефон...">
      <input type="text" placeholder="Комментарий...">
      <button onclick="sucfil()" type="submit">Оставить Заявку</button>
  </form>`
}


function sucfil() {
  zblock.innerHTML = `
  <div class="scf">
  <img src="img/check.png" alt="">
</div>
<p class="thank"><span style="color: #018FA3;">Спасибо</span> за заявку</p>
<p class="subthank">В ближайшее<br> время мы<br><span style="color: #018FA3;">свяжемся </span> с Вами
</p>
  `
}




window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

}

let cTheme = document.querySelector(".themeChange")
let theme = document.querySelector("#theme")
let moon = document.querySelector(".moon")
let sun = document.querySelector(".sun")
let sunld = document.querySelector(".sun_ld")
let moonld = document.querySelector(".moon_ld")
let linke = document.querySelector("#linke")


let link = document.getElementById("darktheme");

theme.addEventListener("click", changeTheme)


function changeTheme() {
  moon.style.display = "block"
  sun.style.display = "block"
  body.style.overflow = "hidden"
}


sun.addEventListener("click", sunFNC);


function sunFNC() {
  sunld.style.display = "block"
  body.style.overflow = "hidden"
  setTimeout(() => {
    moon.style.display = "none"
    sun.style.display = "none"
    body.style.overflow = "auto"
    body.style.overflowX = "hidden"
  }, 5000);
  setTimeout(() => {
    sunld.style.display = "none"
  }, 8000);



  let lightTheme = "css/style.css";
  let darkTheme = "css/darktheme.css";

  let currTheme = link.getAttribute("href");
  let theme = "";


  if (currTheme === darkTheme) {
    currTheme = lightTheme;
    theme = "style";
  }



  link.setAttribute("href", currTheme);

  Save(theme);
}


moon.addEventListener("click", moonFNC);


function moonFNC() {
  moonld.style.display = "block"
  body.style.overflow = "hidden"
  setTimeout(() => {
    moon.style.display = "none"
    sun.style.display = "none"
    body.style.overflow = "auto"
  }, 5000);
  setTimeout(() => {
    moon.style.display = "none"
  }, 8000);


  let lightTheme = "css/style.css";
  let darkTheme = "css/darktheme.css";

  var currTheme = link.getAttribute("href");
  var theme = "";


  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "darktheme";
  }

  link.setAttribute("href", currTheme);

  Save(theme);

}






mbmenu.onclick = () => {
  scroll(0, 0)
  body.style.overflow = 'hidden'
  mbmenu_parent.style.display = "block"
}

exit.onclick = () => {
  body.style.overflow = 'auto'
  mbmenu_parent.style.display = "none"
}





















// Drag and Drop


let img_one = document.querySelector("#drag_1")
let img_two = document.querySelector("#drag_2")
let lesson = document.querySelectorAll("#lesson img")


for (let item of lesson) {
  console.log(item);



  item.addEventListener("dragstart", dr_start)
  item.addEventListener("dragend", dr_end)
  item.addEventListener("dragleave", dr_leave)
  item.addEventListener("dragover", dr_over)

  function dr_start() {
    console.log("Start");
    this.style.opacity = 0.5
  }

  function dr_end() {
    console.log("End");
    this.style.opacity = 1

    let src_img1 = img_one.src
    let src_img2 = img_two.src
    let one_src = src_img1.includes('lesson1')
    let two_src = src_img2.includes('lesson1')

    if (one_src === true) {
      img_one.src = "../img/lesson2.png"
    } else img_one.src = "../img/lesson1.png";


    if (two_src === true) {
      img_two.src = "../img/lesson2.png"
    } else img_two.src = "../img/lesson1.png";
  }

  function dr_leave() {
    console.log("Leave");
    this.style.cursor = "move";
  }

  function dr_over() {
    console.log("Over");
    this.style.transform = "scale(1.2)"
    event.preventDefault();
  }
}