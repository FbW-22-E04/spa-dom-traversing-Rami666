let heading = document.querySelector('h1');
let header = heading.closest('header');
header.style.border = '5px solid darkblue';

const infos = document.querySelector('.info-package');
const result = infos.matches('.info-package');
console.log(result);


const titles = document.querySelectorAll('.package-title');
titles.forEach(title => {
    title.previousElementSibling.style.border = '2px solid black';
    });


const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
    const item = document.createElement("li");
    item.innerText = listItems[i].innerText;
    siteMap.appendChild(item);
}





