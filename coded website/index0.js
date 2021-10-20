//TODO: Button zum Hochscrollen zum Laufen bringen
//Syntax-Error aus Console lösen

// Click-Event: Pfeil zum Runterscrollen
// Bonus: Design des Pfeils anpassen
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 15);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }

//Leistungsangebot. Für die enthaltenen Überschriften Dropdown-Funktion hinterlegen, aber nur für die mobile Version
//TODO: Create On-Klick-Event für anzeigen und verbergen
/* function showText() */


/* //TEST of a input field
let clickButton = document.querySelector("#click-button");
clickButton.addEventListener('click', eingabe);

function eingabe(){
    console.log("Hallo!");
}
 */

/* CLick-Event: Pfeil-Button zum Hochscrollen */
/* Methode 1 */
/* const btnScrollToTop = document.getElementById("btnScrollToTop");
btnScrollToTop.addEventListener("click", function() { */
    /* Three methods to make it scroll up */
    /* window.scrollTo(0,0) */
    
   /*  window.scrollTo({
        top: 50,
        left:0, 
        behavior: "smooth"
    }); */
    /* $("html, body").animate({ scrollTop: 0 }, "slow");
}); */

/* Methode 2 */
const btnScrollToTop = document.querySelector("#btnScrollUp");

window.addEventListener("scroll", scrollFunction);

function scrollFunction () {
    if (window.pageYOffset > 300) {
        btnScrollToTop.style.display = "block";
    }
    else { //Hide btnScrollToTop
        btnScrollToTop.style.display = "none";
    }
}

btnScrollToTop.addEventListener("click", backToTop)

function backToTop () {
    window.scrollTo(0,0);
}