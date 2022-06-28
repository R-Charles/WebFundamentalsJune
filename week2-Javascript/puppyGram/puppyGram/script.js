
function uploadPup(element){
    console.log("helloooooo", element);
    element.innerText = "Uploaded Thankyou";
}

function removeElement(element){
    console.log("trying to remove something...hola")
element.remove()
}

function incrementLike(id){
    console.log("liking", id);
    var element = document.querySelector(id);

    let likecount =  Number(element.innerText);

    likecount++;
    element.innerText = likeCount
}