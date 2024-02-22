// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.wrapper'),
//     smooth: true
// });

function page4Animation(){
    const boxes = document.querySelectorAll(".box");
    const overlay = document.querySelector(".overlay");
    
    boxes.forEach(function(box) {
        box.addEventListener("mouseenter", () => {
            box.classList.add('active');
            const imageUrl = box.getAttribute("data-image")
            overlay.style.backgroundImage = `url(${imageUrl})`;
            overlay.classList.add('active');
            console.log("hey");
        });
    
        box.addEventListener("mouseleave", () => {
            box.classList.remove('active');
            overlay.classList.remove('active');
            console.log("heyaaa");
        });
    });
}

function swiperAnimmation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function menuAnimation(){

    const menu = document.querySelector(".nav h3")
    const full = document.querySelector(".full-scr")
    const navimg = document.querySelector(".nav img")
    let flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
            console.log(flag)
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
            console.log(flag)
        }
    })
}




function threehead() {
    const allHeadings = document.querySelectorAll(".heading-div h1");

    // Set default color for the first heading
    toggleColor(allHeadings[0]);
    togglePara(0);

    allHeadings.forEach((heading, index) => {
        heading.addEventListener("click", () => {
            allHeadings.forEach((otherHeading, otherIndex) => {
                if (otherHeading === heading) {
                    // Toggle the color for the clicked heading
                    toggleColor(heading);
                    // Toggle the corresponding paragraph
                    togglePara(index);
                } else {
                    // Reset the color for other headings
                    resetColor(otherHeading);
                    // Reset the corresponding paragraph
                    resetPara(otherIndex);
                }
            });
        });
    });

    function toggleColor(heading) {
        heading.style.color = "white";
        heading.style.borderColor = "red";
    }

    function resetColor(heading) {
        heading.style.color = "";
        heading.style.borderColor = "";
    }

    function togglePara(index) {
        const allPara = document.querySelectorAll(".pc p");
        allPara.forEach(para => para.classList.remove("active1"));
        allPara[index].classList.add("active1");
    }

    function resetPara(index) {
        const allPara = document.querySelectorAll(".pc p");
        allPara[index].classList.remove("active1");
    }
}

threehead();


// function threehead() {
//     const allHeadings = document.querySelectorAll(".heading-div h1");

//     // Set default color for the first heading
//     toggleColor(allHeadings[0]);
//     togglePara(0); // Show the first paragraph by default

//     allHeadings.forEach((heading, index) => {
//         heading.addEventListener("click", () => {
//             allHeadings.forEach((otherHeading) => {
//                 if (otherHeading === heading) {
//                     // Toggle the color for the clicked heading
//                     toggleColor(heading);
//                     togglePara(index); // Show the corresponding paragraph
//                 } else {
//                     // Reset the color for other headings
//                     resetColor(otherHeading);
//                     resetPara();
//                 }
//             });
//         });
//     });

//     function toggleColor(heading) {
//         heading.style.color = "white";
//         heading.style.borderColor = "red";
//     }

//     function resetColor(heading) {
//         heading.style.color = "";
//         heading.style.borderColor = "";
//     }

//     function togglePara(index) {
//         const allParaClass = document.querySelectorAll(`.pa${index + 1} p`);
//         allParaClass.forEach((para) => {
//             para.classList.add("active1");
//         });
//     }

//     function resetPara() {
//         const allParaClass = document.querySelectorAll(".pc p");
//         allParaClass.forEach((para) => {
//             para.classList.remove("active1");
//         });
//     }
// }

// threehead();



swiperAnimmation();
page4Animation();
menuAnimation();