const menu = document.getElementById("hamburger");
const hamburger = document.getElementById("menu");
const cancel = document.getElementById("cancel");
const navlist = document.getElementById("navlist");
const buttonBody = document.getElementById("switch")

menu.addEventListener('click',() => {
    navlist.classList.toggle("active");
    hamburger.classList.toggle("active")
    cancel.classList.toggle("active")
});

buttonBody.addEventListener('click', () => {
    buttonBody.classList.toggle("active")
})


// about info  features pricing contact

// About

let a = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
    }
});

a.from("#logo", {
    opacity: 0,
    y: 10,
    duration: 0.7
});
a.to("#logo", {
    opacity: 1,
    y: 0,
});

a.from("ul li", {
    opacity: 0,
    y: 10,
    duration: 0.7
}, "-=0.7");
a.to("ul li", {
    opacity: 1,
    y: 0,
}, "-=0.7");

a.from("#cta", {
    opacity: 0,
    y: 10,
    duration: 0.9
}, "-=0.7");
a.to("#cta", {
    opacity: 1,
    y: 0,
    duration: 0.9
}, "-=0.7");

a.from("h1", {
    opacity: 0,
    y: 10,
    duration: 0.7
}, "-=0.7");

a.from("#intro-p", {
    opacity: 0,
    y: 10,
    duration: 0.5
}, "-=0.7" );

a.from("button", {
    opacity: 0,
    y: 20,
    duration: 0.5
}, "-=0.7" );


a.from("#searchbox", {
    opacity: 0,
    y: 50,
    duration: 1.5
} );

// Info 

let b = gsap.timeline({
    scrollTrigger: {
        trigger: "#info-h1",
    }
});

b.from("#info-h1", {
    y: 140,
    duration: 0.5
})

b.to("#info-h1", {
    opacity: 1,
    y: 0,
}, "-=0.1")

let c = gsap.timeline({
    scrollTrigger: {
        trigger: "#features"
    }
})

c.from("#features-img", {
    opacity: 0,
    y: 30
})
c.to("#feautes-img", {
    opacity: 1,
    y: 0
})


let d = gsap.timeline({
    scrollTrigger: {
        trigger: "#social-scroll",
    }
});

d.from("#social-h1", {
    opacity: 0,
    y: 100,
    duration: 0.5
})
d.to("#social-h1", {
    opacity: 1,
    y: 0,
})

d.from("#social-img", {
    opacity: 0,
    y: 20,
    duration: 0.7
})
d.to("#social-img", {
    opacity: 1,
    y: 0,
})

d.from("#tweet-img", {
    opacity: 0,
    y: 20,
    duration: 0.5
})
d.to("#tweet-img", {
    opacity: 1,
    y: 0
})

let e = gsap.timeline({
    scrollTrigger: {
        trigger: "#pricing",
    }
});

e.from("#card", {
    opacity: 0,
    y: 40,
    duration: 1
})

e.to("#card", {
    opacity: 1,
    y: 0
})

let f = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
    }
});

f.from("#contact-h1", {
    opacity: 0,
    y: 40,
    duration: 1
})

f.to("#contact-h1", {
    opacity: 1,
    y: 0
})