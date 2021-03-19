// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
// console.log(document.title);
// document.title = 12345; 
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

//avoid selecting item from your DOM like this
// document.all[10].textContent = 'Adventure'

//GETELEMENTBYID//
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.innerText = 'Shut Down';
// headerTitle.textContent = 'Beware';
// headerTitle.innerHTML = '<h4>Browser Help</h4>';
// headerTitle.style.borderBottom = 'solid 4px white';

// const header = document.getElementById('main-header');
// header.style.border = 'solid 4px black';

//GETELEMENTSBYCLASSNAME//
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Serbian';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'grey';
// }

//GETELEMENTSBYTAGNAME//
const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[2].textContent = 'Serbian';
li[2].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'yellow';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'grey';
}

//QUARYSELECTOR// 
const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

const input = document.querySelector('input');
input.value = 'Soverign State'

const submit = document.querySelector('input[type="submit"]');
submit.value = 'Click Here'

const item = document.querySelector('.list-group-item');
item.style.color = 'pink';

const lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = 'green';

const secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color = 'crimson';

//QUERYSELECTORALL//
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[1].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)')
// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'grey';
// }

// const even = document.querySelectorAll('li:nth-child(even)')
// for (var i = 0; i < odd.length; i++){
//     even[i].style.backgroundColor = 'pink';
// } 

//TRAVERSING THE DOM
const itemList = document.querySelector('#items');
//PARENTNODE//
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.background = "purple";
//PARENTELEMENT//
// const itemlist = document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.background = "grey";
// console.log (itemlist.parentElement.parentElement);

//CHILDNODES SUGGEST AGAINST//
// console.log(itemList.childNodes);

// //CHILDRENNODES INSTEAD USE//
// const itemlist = document.querySelector('#items');
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// //FIRSTCHILD SUGGEST AGAINST//
// console.log(itemList.firstChild);

// //FIRSTELEMENTCHILD INSTEAD USE//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hausa'

// //LASTCHILD SUGGEST AGAINST//
// console.log(itemList.lastChild);

// //LASTELEMENTCHILD INSTEAD USE//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Yoruba'

// //NEXTSIBLING SUGGEST AGAINST//
// console.log(itemList.nextSibling);

// //NEXTELEMENTSIBLING INSTEAD USE//
// console.log(itemList.nextElementSibling);

//PREVIOUSSIBLING SUGGEST AGAINST//
// console.log(itemList.previousSibling);

// //PREVIOUSELEMENTSIBLING INSTEAD USE//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'orange'

//CREATEELEMENT//
//CREATE A DIV//
const newDiv = document.createElement('div');

//ADD CLASS//
newDiv.className = 'Benched';

//ADD ID//
newDiv.id = 'Winning';

//ADD ATTRIBUTE//
newDiv.setAttribute('title', 'Hello Div')

//CREATE TEXT NODE//
const newDivText = document.createTextNode('World Population');

// ADD TEXT TO DIV//
newDiv.appendChild(newDivText);
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '25px'

container.insertBefore(newDiv, h1);