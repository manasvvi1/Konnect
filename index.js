function toggleFollow(s){
    var ele = document.getElementById(s);
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