

    

   

   
        


 /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const ul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavigationBar() {
for (const section of sections) {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${section.id} class="menu__link">${section.dataset.nav}</a>`
    li.addEventListener ("click", function scrollToSection(event) {
        event.preventDefault();
        section.scrollIntoView({behavior:"smooth", block:"center"});
    });
    fragment.appendChild(li);
}
ul.appendChild(fragment);
}
function handleObserver(entries){
    entries.forEach(entry => {
        let link= document.querySelector(`a[href="${entry.target.id}"]`);
        if(entry.isIntersecting){
    entry.target.classList.add("your-active-class")
    link.classList.add("active-link")
        }else{
            entry.target.classList.remove("your-active-class")
    link.classList.remove("active-link")
        }
    });
    }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.addEventListener('DOMContentLoaded', () => {
    createNavigationBar();
});

//

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function toggleActiveState() {
    let options={
        root:null,
        rootMargin:'0px',
        threshold:0.5
    }
    
    const observer= new IntersectionObserver(handleObserver, options)
    sections.forEach(section=> {
        observer.observe(section)
    
    })

})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
