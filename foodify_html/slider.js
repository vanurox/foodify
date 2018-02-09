var start_point = 1;

function initiateSlideShow() {
    var imgs = document.getElementsByClassName("img");
    setInterval(function() {
        hideAll();
        if (start_point == 4) {
            start_point = 0;
        }
        // imgs[start_point].style.display = "block";
        imgs[start_point].style.opacity = 1;
        // imgs[start_point].style.width = "0px";
        start_point++;
    }, 4000);
}

function hideAll() {
    for (i = 0; i < 4; i++) {
        document.getElementById("img" + i).style.opacity = 0;
        // document.getElementById("img" + i).style.width = "500px";
    }
    // var imgs = document.getElementsByClassName("img");
    // for (i = 0; i < imgs.length; i++) {
    //     // imgs[i].style.display = "none";
    //     console.log(i);
    //     imgs[start_point].style.opacity = 0;
    // }
}