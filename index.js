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