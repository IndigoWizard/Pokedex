//Main JS file for landing page
var folderName = document.querySelector('#title');
folderName.textContent
var pic = []
for (var i = 0; i < 5; i++){
    pic.push(`./src/album/${folderName.textContent}/${i}.png`);
}
// var pics = [
//     "./src/album/Alakazam/0.jpg",
//     "./src/album/Alakazam/1.png",
//     "./src/album/Alakazam/2.jpg",
//     "./src/album/Alakazam/3.jpg",
//     "./src/album/Alakazam/4.jpg"
// ];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;

btn.addEventListener("click", function () {
    if (counter === 5) {
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
})
