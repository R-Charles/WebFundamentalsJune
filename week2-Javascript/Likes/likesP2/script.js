function incrementLikes(id){ 
    console.log("liking", id);
    var element = document.querySelector(id)
    console.log("element looks like this", element.innerText);
    let likeCount = Number(element.innerText);
    console.log(likeCount)
    likeCount+=1;
    element.innerText = likeCount;
}
function incrementLikes(id){ 
    console.log("liking", id);
    var element = document.querySelector(id)
    console.log("element looks like this", element.innerText);
    let likeCount2 = Number(element.innerText);
    console.log(likeCount2)
    likeCount2+=1;
    element.innerText = likeCount2;
}