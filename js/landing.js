var mediaSize = window.innerWidth;
const nav1 = document.querySelector(".nav-left");
const nav2 = document.querySelector(".nav-right");
const desktopNav = document.querySelector(".desktop-menu");
const mainSection = document.querySelector(".main-content");
var topOfNav = mainSection.offsetTop;

const landingContent = document.querySelector(".landing-top");
const landingContent2 = document.querySelector(".arrow");

const landingSection = document.querySelector(".landing");
const landingGreyText = document.querySelector(".landing-intro h1");

var faders = document.querySelectorAll(".will-fade");

var triggerItem = document.querySelector("#todue-project-preview");
var todueLeft = document.querySelector("#todue-project-preview .left-project-preview");
var todueRight = document.querySelector("#todue-project-preview .right-project-preview");

var fcaRight = document.querySelector("#portal-project-preview .right-project-preview");
var fcaLeft = document.querySelector("#portal-project-preview .left-project-preview");

var fsRight = document.querySelector("#fanseekr-project-preview .right-project-preview");
var fsLeft = document.querySelector("#fanseekr-project-preview .left-project-preview");

var thirdspaceRight = document.querySelector("#route-project-preview .right-project-preview");
var thirdspaceLeft = document.querySelector("#route-project-preview .left-project-preview");

var toduePreview = document.querySelector("#todue-project-preview");
var fsPreview = document.querySelector("#fanseekr-project-preview");
var fcaPreview = document.querySelector("#portal-project-preview");
var thirdspacePreview = document.querySelector("#route-project-preview");

var previewItem = "todue";
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");

var previewContainer = document.querySelector(".desktop-project-preview-container");
var mobilePreview = document.querySelector(".mobile-project-preview");
var scrollOuter = document.querySelector(".scroll-outer");
var scrollInner = document.querySelector(".scroll-inner");

//  LOAD AT TOP OF PAGE
window.onunload = function() {
  window.scroll({top: 0});
};


window.addEventListener("resize", function() {
  topOfNav = mainSection.offsetTop;
  mediaSize = window.innerWidth;
})

// STICKY NAV
var prevScrollpos = window.pageYOffset;

  window.addEventListener("scroll", function() {
    var currentScrollpos = window.pageYOffset;

    if(window.scrollY >= topOfNav) {
      if (mediaSize <= 575) {
        if (prevScrollpos > currentScrollpos) {
          nav1.style.transform = "translateY(0px)";
          nav2.style.transform = "translateY(0px)";
          desktopNav.style.transform = "translateY(0px)";
        } else {
          nav1.style.transform = "translateY(-" + nav1.clientHeight + "px)";
          nav2.style.transform = "translateY(-" + nav1.clientHeight + "px)";
          desktopNav.style.transform = "translateY(-" + nav1.clientHeight + "px)";
        }
        prevScrollpos = currentScrollpos;
      }
    } 
  })

// LANDING TEXT POSITION
window.addEventListener("scroll", function() {
  if (window.scrollY >= topOfNav - window.innerHeight) {
    landingContent.style.position = "absolute";
    landingContent.style.bottom = "0";
    landingContent.style.top = "auto";
    landingContent2.style.opacity = "0";
    landingContent2.style.animationFillMode = "none";
  } else {
    landingContent.style.position = "fixed";
    landingContent2.style.opacity = "0.8";
  }
});

// LANDING BACKGROUND COLOR
window.addEventListener("scroll", function() {
  if (window.scrollY >= landingSection.offsetHeight * (0.9)) {
    landingSection.classList.add("change-color");
    landingGreyText.classList.add("change-text-color");
  } else if (window.scrollY < landingSection.offsetHeight) {
    landingSection.classList.remove("change-color");
    landingGreyText.classList.remove("change-text-color");
  }
})

// SCROLL DOWN BUTTON 
landingContent2.addEventListener("click", function() {
  window.scroll({top: topOfNav, behavior: "smooth"});
})

// DESKTOP PROJECT PREVIEW
scrollInner.style.paddingBottom = ((window.innerHeight - previewContainer.clientHeight) / 2) + "px";

function todueAnimate() {
  toduePreview.style.zIndex = "1";
  todueRight.classList.add("animate");
  todueLeft.classList.add("animate");
  previewItem = "todue";
}

function todueUnanimate() {
  todueLeft.classList.add("animate-on-scroll");
  todueRight.classList.add("animate-on-scroll");
  toduePreview.style.zIndex = "-1";
  todueRight.classList.remove("animate");
  todueLeft.classList.remove("animate");
}

function fcaAnimate() {
  fcaPreview.style.zIndex = "1";
  fcaRight.classList.add("animate");
  fcaLeft.classList.add("animate");
  previewItem = "fca"; 
}

function fcaUnanimate() {
  fcaPreview.style.zIndex = "-1";
  fcaRight.classList.remove("animate");
  fcaLeft.classList.remove("animate");
}

function fsAnimate() {
  fsPreview.style.zIndex = "1";
  fsRight.classList.add("animate");
  fsLeft.classList.add("animate");
  previewItem = "fs"; 
}

function fsUnanimate() {
  fsPreview.style.zIndex = "-1";
  fsRight.classList.remove("animate");
  fsLeft.classList.remove("animate");
}

function thirdspaceAnimate() {
  thirdspacePreview.style.zIndex = "1";
  thirdspaceRight.classList.add("animate");
  thirdspaceLeft.classList.add("animate");    
  previewItem = "thirdspace";
}

function thirdspaceUnanimate() {
  thirdspacePreview.style.zIndex = "-1";
  thirdspaceRight.classList.remove("animate");
  thirdspaceLeft.classList.remove("animate");
}

// (button functions)
button1.addEventListener("click", function() {
  button1.style.backgroundColor = "rgba(113,121,143, 1)";
  button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button4.style.backgroundColor = "rgba(113,121,143, 0.1)";

  if (previewItem === "fca") {
    todueAnimate();
    fcaUnanimate();
    fsUnanimate();
  } else if (previewItem === "fs") {
    todueAnimate();
    fsUnanimate();
  } else if (previewItem === "thirdspace") {
    todueAnimate();
    thirdspaceUnanimate();
  }
})

button2.addEventListener("click", function() {
  button2.style.backgroundColor = "rgba(113,121,143, 1)";
  button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button4.style.backgroundColor = "rgba(113,121,143, 0.1)";

  if (previewItem === "todue") {
    fcaAnimate();
    todueUnanimate();       
  } else if (previewItem === "fs") {
    fcaAnimate();
    fsUnanimate();  
  }
   else if (previewItem === "thirdspace") {
    fcaAnimate();
    thirdspaceUnanimate();  
  }
});

button3.addEventListener("click", function() {
  button3.style.backgroundColor = "rgba(113,121,143, 1)";
  button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button4.style.backgroundColor = "rgba(113,121,143, 0.1)";

  if (previewItem === "todue") {
    fsAnimate();
    todueUnanimate();
  } else if (previewItem === "thirdspace") {
    fsAnimate();
    thirdspaceUnanimate();  
  } else if (previewItem === "fca") {
    fsAnimate();
    fcaUnanimate()
  }
})

button4.addEventListener("click", function() {
  button4.style.backgroundColor = "rgba(113,121,143, 1)";
  button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
  if (previewItem === "todue") {
    thirdspaceAnimate();
    todueUnanimate();
  } else if (previewItem === "fs") {
    thirdspaceAnimate();
    fsUnanimate();  
  } else if (previewItem === "fca") {
    thirdspaceAnimate();
    fcaUnanimate()
  }
  
})

// (desktop preview container fade in)
const animateOptions = {
  threshold: 0.5
};

const animateOnScroll = new IntersectionObserver(function(entries, animateOnScroll) {
  todueLeft.classList.add("animate-on-scroll");
  todueRight.classList.add("animate-on-scroll");
  previewContainer.classList.add("fade-in");
  if (!entries[0].isIntersecting) {
    return;
  } else {
    previewContainer.classList.add("apply");
    todueLeft.classList.add("animate");
    todueRight.classList.add("animate");
    animateOnScroll.unobserve(entries[0].target);
  }
}, animateOptions);

animateOnScroll.observe(triggerItem);

// (mobile preview container fade in)
const mobileAnimate = new IntersectionObserver(function(entries, mobileAnimate) {
  mobilePreview.classList.add("fade-in");
    if (!entries[0].isIntersecting) {
      return;
    } else {
      mobilePreview.classList.add("apply");
      mobileAnimate.unobserve(entries[0].target);
  }
}, animateOptions);

mobileAnimate.observe(mobilePreview);

// (scrolljacking)
function previewOffset(element) {
  var yPosition = 0;

  while(element) {
    yPosition += element.offsetTop;
    element = element.offsetParent;
  }

  return yPosition;
}

var previewHeight = previewOffset(scrollInner);

scrollOuter.style.height = (window.innerHeight * 3) + "px";

window.addEventListener("resize", function() {
  scrollInner.style.paddingBottom = ((window.innerHeight - previewContainer.clientHeight) / 2) + "px";
})

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= previewHeight) {
    scrollInner.style.position = "sticky";
    scrollInner.style.top = "0";
  } 
  if (window.pageYOffset >= previewHeight && window.pageYOffset < (previewHeight + window.innerHeight * 0.75)) {
    button1.style.backgroundColor = "rgba(113,121,143, 1)";
    button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button4.style.backgroundColor = "rgba(113,121,143, 0.1)";

    if (previewItem === "fca") {
      todueAnimate();
      fcaUnanimate();
    } else if (previewItem === "thirdspace") {
      todueAnimate();
      thirdspaceUnanimate();
    } else if (previewItem === "fs") {
      todueAnimate();
      fsUnanimate();
    }
  } 
  if (window.pageYOffset >= (previewHeight + window.innerHeight * 0.75) && window.pageYOffset < (previewHeight + window.innerHeight * 1.5)) {
    button2.style.backgroundColor = "rgba(113,121,143, 1)";
    button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button4.style.backgroundColor = "rgba(113,121,143, 0.1)";

    if (previewItem === "todue") {
      fcaAnimate();
      todueUnanimate();       
    } else if (previewItem === "thirdspace") {
      fcaAnimate();
      thirdspaceUnanimate();  
    } else if (previewItem === "fs") {
      fcaAnimate();
      fsUnanimate();
    }
  } 
  if (window.pageYOffset >= (previewHeight + window.innerHeight * 1.5) && window.pageYOffset < (previewHeight + window.innerHeight * 2)) {
    button3.style.backgroundColor = "rgba(113,121,143, 1)";
    button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button4.style.backgroundColor = "rgba(113,121,143, 0.1)";

    if (previewItem === "todue") {
      fsAnimate();
      todueUnanimate();
    } else if (previewItem === "fca") {
      fsAnimate();
      fcaUnanimate()
    }
    else if (previewItem === "thirdspace") {
      fsAnimate();
      thirdspaceUnanimate();
    }
  }

  if (window.pageYOffset >= (previewHeight + window.innerHeight * 2)) {
    button4.style.backgroundColor = "rgba(113,121,143, 1)";
    button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button3.style.backgroundColor = "rgba(113,121,143, 0.1)";

    if (previewItem === "todue") {
      thirdspaceAnimate();
      todueUnanimate();
    } else if (previewItem === "fca") {
      thirdspaceAnimate();
      fcaUnanimate()
    }
    else if (previewItem === "fs") {
      thirdspaceAnimate();
      fsUnanimate();
    }
  }
});

//  SUBTITLE FADE IN
const appearOptions = {
  threshold: 1
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    entry.target.classList.add("fade-in");
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("apply");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
