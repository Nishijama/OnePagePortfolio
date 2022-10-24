console.log("hello there!");

let btn = document.getElementById("myBtn")

aboutBtn.addEventListener('click', () => handleModals("about"));
resumeBtn.addEventListener('click', () => handleModals("resume"));

let images = document.querySelectorAll('.img-miniature')
let snippets = document.querySelectorAll('.project-description')
let tiles = document.querySelectorAll('.tile')

console.log(tiles);


tiles.forEach(tile => {

    let description = tile.children[1];
    description.style.visibility = 'hidden';

    tile.addEventListener('mouseover', () => {
        description.style.visibility = 'visible';
    });
    

    tile.addEventListener('mouseout', () => {
        description.style.visibility = 'hidden';
    })
})

// CANVAS

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
const particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
})

const mouse = {
    x: -10,
    y: -10,
}

canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
})


class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 11 + 1;
        this.speedX = (Math.random() * 3 -1)/5
        this.speedY = (Math.random() * 3 -1)/5
    }
    update() {
        if (this.x >= canvas.width || this.x <= 0) {
            this.speedX *= -1;
        }
        if (this.y >= canvas.height || this.y <= 0) {
            this.speedY *= -1;
        }
        this.x += this.speedX
        this.y += this.speedY

        if (this.r > 0.2) {
            this.r -= 0.1;
        }
    }
    draw() {
        let x = this.x;
        let y = this.y;
        let r = this.r;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(x, y, 0.01 , x, y, r);
        ctx.fillStyle = gradient;
        ctx.arc(x, y, r, 0, Math.PI*2);
        gradient.addColorStop(0.1, "#05D8E8");
        gradient.addColorStop(1, "rgb(13,13,13,0)");
        ctx.fill();
    }
}

function init(n) {
    for (let i = 0; i < n; i++) {
        particlesArray.push(new Particle())      ;
    }
}

function handleParticles() {

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].r < 0.2) {
            particlesArray.splice(i,1);
            particlesArray.push(new Particle());
        }
    }
}

init(15);
console.log(particlesArray);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawWhisp(mouse.x, mouse.y, 12);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();






function handleModals(modalID) {

    let modal = document.getElementById(modalID + "-modal");
    // let close = document.getElementsByClassName("close")[0];
    let close = document.getElementById(modalID + "-close");
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    window.scrollTo(0,0)
    modal.style.display = "block";
    toggleHeader();

    close.onclick = function() {
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
        modal.style.display = "none";
        toggleHeader();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
        modal.style.display = "none";
        toggleHeader();
    }
    }
}


function toggleHeader() {
    document.querySelector("#go-to-projects-arrow").classList.toggle("hidden")
    document.querySelector("#avatar").classList.toggle("hidden")
    document.querySelector("#header-text").classList.toggle("hidden")
}

function toggleResume() {
    let educationToggle = document.getElementById("education-header");
    let careerToggle = document.getElementById("career-header");
    let skillsToggle = document.getElementById("skills-header");

    educationToggle.onclick = () => {
        
    }
}