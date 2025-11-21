

// header responsive nav bar 
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // change icon to 'X'
    navlist.classList.toggle("open"); // show menu
};

// close menu when a link is clicked
document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navlist.classList.remove("open");
    });
});




let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letter = word.textContent.split("");
    word.textContent = "";
    letter.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";


let changeText = () => {
    let currenWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currenWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)



// show more skills button
  const toggleBtn = document.getElementById("toggleSkillsBtn");
  const hiddenSkills = document.querySelector(".hidden-skills");

  toggleBtn.addEventListener("click", () => {
    if (hiddenSkills.style.display === "none") {
      hiddenSkills.style.display = "block";
      toggleBtn.textContent = "Show Less";
    } else {
      hiddenSkills.style.display = "none";
      toggleBtn.textContent = "Show More";
    }
  });


//   circle animation
const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots*marked/100);
    let points = "";
    let rotate = 360 / dots;

    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked');
    }
});




// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery')
;


let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach(link => link.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50);
})



AOS.init({
  duration: 1000,
  once: true
});



// Certificates.html ka content dynamically load karne ke liye
fetch('../Certificates/certificates.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('certificates-section').innerHTML = data;

    // Scroll animation certificates ke liye yahan bhi chalayenge
    const boxes = document.querySelectorAll('.certificate-box');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom){
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    });
  })
  .catch(err => console.error('Error loading certificates:', err));



