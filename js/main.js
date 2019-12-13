window.onscroll = function() {
    myFunction()
};

var header = document.getElementById("header");
var sticky = document.getElementById("spacer").offsetHeight;


// Reset the position of the scroll
    
/*
function navToTop() {
    var myDiv = document.getElementById("nav-large-list");

    if (myDiv.style.height < 40) {
        myDiv.scrollTop = 0;
    } else {

    }

}
*/

// On LOAD, change the text of the "current page"    

/*
function var1() {
  document.getElementById('current-page-a').innerHTML = document.title;
}


window.onload = var1;

*/
    
// Toggle whether the mobile navigation is displaying
    
function navToggle() {
    var nav = document.getElementById("nav-container");
    var navBtn = document.getElementById("nav-btn");
    var body = document.getElementById("body");
    
    if (nav.style.width != "110%") {
        nav.style.display = "block";
        nav.style.width = "110%";
        navBtn.classList.remove("open");
        navBtn.classList.add("close");
        body.style.overflow = "none";
    } else {
        navBtn.classList.remove("close");
        navBtn.classList.add("open");
        nav.style.width = "0px";
        body.style.overflow = "auto";
    }
}

function updateHtml() {
    var textArea = document.getElementById("text-box");
    var output = document.getElementById("output");

    output.innerHTML = textArea.value;
} 

function clearText() {
    var textArea = document.getElementById("text-box");
    if (confirm('Are you sure you want to clear your work?')) {
        textArea.value = '';
    } else {
        // Do nothing!
    }
}

function copyText() {
    var textArea = document.getElementById("text-box");

    textArea.select();

    if(textArea.value != '') {
        document.execCommand("copy");
        alert('Copied the text to your Clipboard');
    } else {
        alert('It looks like there is nothing to copy.');
    }
}

//When Scrolling

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("scrolled");
        header.classList.remove("top");

    } else {
        header.classList.remove("scrolled");
        header.classList.add("top");
    }
}