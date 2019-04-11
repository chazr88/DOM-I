const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const myH1 = document.querySelector(".cta-text h1")
myH1.textContent = siteContent["cta"]["h1"];

const myNav = document.querySelectorAll("nav a")
myNav.forEach((nav, i)=>{
  nav.textContent = siteContent["nav"]["nav-item-"+i]
})


const myButton = document.querySelector(".cta-text button")
myButton.textContent = siteContent["cta"]["button"];

const myImg = document.querySelector("#cta-img")
myImg.setAttribute('src', siteContent["cta"]["img-src"])

const myNewTopTextH4 = document.querySelectorAll(".top-content .text-content h4")
myNewTopTextH4[0].textContent = siteContent["main-content"]["features-h4"]
myNewTopTextH4[1].textContent = siteContent["main-content"]["about-h4"]

const myNewTopText = document.querySelectorAll(".top-content .text-content p")
myNewTopText[0].textContent = siteContent["main-content"]["features-content"]
myNewTopText[1].textContent = siteContent["main-content"]["about-content"]

const myMiddleImg = document.getElementById("middle-img")
myMiddleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const myNewBottomTextH4 = document.querySelectorAll(".bottom-content .text-content h4")
myNewBottomTextH4[0].textContent = siteContent["main-content"]["services-h4"]
myNewBottomTextH4[1].textContent = siteContent["main-content"]["product-h4"]
myNewBottomTextH4[2].textContent = siteContent["main-content"]["vision-h4"]

const myNewBottomText = document.querySelectorAll(".bottom-content .text-content p")
myNewBottomText[0].textContent = siteContent["main-content"]["services-content"]
myNewBottomText[1].textContent = siteContent["main-content"]["product-content"]
myNewBottomText[2].textContent = siteContent["main-content"]["vision-content"]

const myContactH4 = document.querySelector(".contact h4")
myContactH4.textContent = siteContent["contact"]["contact-h4"];

const myContactText = document.querySelectorAll(".contact p")
myContactText[0].textContent = siteContent["contact"]["address"]
myContactText[1].textContent = siteContent["contact"]["phone"]
myContactText[2].textContent = siteContent["contact"]["email"]

const myFooter = document.querySelector("footer p")
myFooter.textContent = siteContent["footer"]["copyright"];



// myNav.prepend("First Nav Item")

const newNav = document.querySelector("nav")
const newNavItem = document.createElement("a")
newNavItem.textContent = "New Nav Item"
newNav.prepend(newNavItem)

const newNavItem2 = document.createElement("a")
newNavItem2.textContent = "Another Nav Item"
newNav.appendChild(newNavItem2)

myNav.forEach(function (element) {
  element.style.color = 'green'
})
