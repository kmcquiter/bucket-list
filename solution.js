// Feel free to message me if you want hints or are stuck. 

/////////// Part 1 (Selecting and ManipulatingDOM Elements) ///////////

/* 1.1) Set the first <li> item from the html and print the text from it. 
    Tip: Use console.log() to print result  
*/

let firstLi = document.querySelector("li");
console.log(firstLi);

/* 1.2) Add a full-stop at the end of each item in all the bucket lists.
    Hint 1: Select All <li> elements.
    Hint 2: Use for loop.
    Hint 3: You will need to use .innerText
*/

let all_Li_Elements = document.querySelector('li');
for(let i = 0; i < all_Li_Elements.length; i++){
    all_Li_Elements[i].innerText += ".";
}


/* 1.3) Print the first list item from Gandalf's bucket list. 
    Hint 1: First select the div associated with Gandalf's bucket list.
*/

gDiv = document.querySelector("#gandalf-list");
firstLi = gDiv.querySelector('li').textContent;
console.log(firstLi);

/* 1.4) Change the color of first list item from Gandalf's bucket list to Red.
    Hint 1: You have already selected this list element from previous part.
*/

gDiv = document.querySelector("#gandalf-list");
firstLi = gDiv.querySelector('li').style.color = 'red';


/* 1.5) Add a new item in Frodo's bucket list. 
        The item should 'Sail off With the Elves.'
    Hint 1: Use .createElement() method
    Hint 2: Use .append() 
*/

let newFlistItem = document.createElement("li");
newFlistItem.innerText = "Sail Off With the Elves.";
document.querySelector("#frodo-list ul").appendChild(newFlistItem);

/* 1.5) Remove the first item from Frodo's bucket list.
    Hint 1: First select the item
    Hint 2: Use .remove() 
*/

let firstFlistItem = document.querySelector("#frodo-list ul").children[0];
firstFlistItem.remove();


////////////// Part 2 (DOM Traversal) /////////////////////

/* 2.1) Print all children of the div with id="gandalf-list"
    Hint 1: select the div first
    Hint 2: use  .children 
*/

let gList = document.querySelector('#gandalf-list').children;

console.log(gList);


/* 2.2) Print the first child of the div with id="frodo-list" */

let fList = document.querySelector('#frodo-list').children[0];


/* 2.3) Print the last child of the div with id="gandalf-list" */ 
//let glist = document.querySelector('#gandalf-list');

console.log(document.querySelector("#gandalf-list").lastElementChild);


/* 2.4) Print the 2nd last child of the div with id="gandalf-list" 
    Hint 1: First select the last child as you did in Part 2.3
    Hint 2: Then use  .previousElementSibling to get the 2nd last child
*/ 

console.log(document.querySelector("#gandalf-list").lastElementChild.previousElementSibling);

/* 2.4) Find the parent element of the div with id="frodo-list" */

//let flist = document.querySelector('#frodo-list');

console.log(document.querySelector("#frodo-list").parentElement);


////////////// BONUS /////////////////////
/*  Find out the person who has 'Become White Wizard.' in their bucket list 
    
    Hint 1: You will need to select all <li> elements
    Hint 2: Use .textContent   and === 
    Hint 3: Use .parentElement (You are looking to find the grandparent actually)
*/


const toFind = 'Become a White Wizard';
let allLiElements = document.querySelectorAll('li');


for(let i=0; i < allLiElements.length; i++){
    if(allLiElements[i].innerText === toFind){
        let grandparent = allLiElements[i].parentElement.parentElement;
        console.log(grandparent.firstElementChild);
}
}