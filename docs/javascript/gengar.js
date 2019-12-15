//Main JS file for landing page
/*var folderName = document.querySelector('#title');
folderName.textContent
var pic = []
for (var i = 0; i < 5; i++){
    pic.push(`./src/album/${folderName.textContent}/${i}.png`);
}*/
var pic = [
    "../src/album/gengar/0.png",
    "../src/album/gengar/1.png",
    "../src/album/gengar/2.png",
    "../src/album/gengar/3.png",
    "../src/album/gengar/4.png"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;

btn.addEventListener("click", function() {
    if (counter === 5) {
        counter = 0;
    }
    img.src = pic[counter];
    counter = counter + 1;
})