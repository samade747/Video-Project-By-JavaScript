document.addEventListener('DOMContentLoaded', function(){
    var video = document.getElementById('videomy');

    function playVideo(){
        video.play();
    }

    function pauseVideo(){
        video.pause();
    }


    document.getElementById('playButton').addEventListener('click', playVideo);
    document.getElementById('pauseButton').addEventListener('click', pauseVideo);
    
});
