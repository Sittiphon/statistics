var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    var overlayBg = document.getElementById("myOverlay").style.display = "block";
    // if (document.getElementById("mySidebar").style.display == "block") {
    //     document.getElementById("mySidebar").style.display = "none";
    //     document.getElementById("myOverlay").style.display = "none";
    // } else {
    //     mySidebar.style.display = 'block';
    //     overlayBg.style.display = "block";
    // }
}

// Close the sidebar with the close button
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
     var overlayBg = document.getElementById("myOverlay").style.display = "none";
}