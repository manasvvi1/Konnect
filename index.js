var likeSound = document.getElementById("likeAudio");
var commentSound = document.getElementById("commentAudio");

function toggleFollow(idName){
    var ele = document.getElementById(idName);
    if(ele.classList.contains("following")){
        ele.classList.remove("following");
        ele.classList.add("follow");
        ele.innerHTML = "Follow";
    }
    else{
        ele.classList.add("following");
        ele.classList.remove("follow");
        ele.innerHTML = "Followed";
    }
}

function toggleLike(idName){
    likeSound.play();
    var ele = document.getElementById(idName);
    if(ele.classList.contains("color-red")){
        ele.classList.remove("color-red");
        ele.innerHTML = "<i class=\"fa-solid fa-heart color-white\"></i>";
    }
    else{
        ele.classList.add("color-red");
        ele.innerHTML = "<i class=\"fa-solid fa-heart color-red\"></i>";
    }
}

function toggleComment(idName){
    commentSound.play();
    let comment = prompt("Add Comment:", "");
    var ele = document.getElementById(idName);
    ele.innerHTML = "<i class=\"fa-solid fa-comment color-blue\"></i>";
}