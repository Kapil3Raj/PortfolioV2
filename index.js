
const scroller = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 0.7,
    smartphone: {
      smooth: true, // Enable smooth scrolling on smartphones
    },
    tablet: {
      smooth: true, // Enable smooth scrolling on tablets
    },
  });

//locomotive scroll

function nav_active(event) {
    const icons = document.querySelectorAll("nav > a > svg");
    
    icons.forEach(icon => icon.classList.remove("active"));

    const clickedIcon = event.currentTarget.querySelector("svg");
    clickedIcon.classList.add("active");

    event.preventDefault(); // Prevent default anchor behavior
   const targetId = event.currentTarget.getAttribute('href') !== "/" ? event.currentTarget.getAttribute('href') : null ;// Get target section ID
   const targetElement = document.querySelector(targetId);

  if (targetElement != null ) {
    scroller.scrollTo(targetElement); // Locomotive Scroll to target
  }
}





  


