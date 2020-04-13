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







/* 1.3) Print the first list item from Gandalf's bucket list. 
    Hint 1: First select the div associated with Gandalf's bucket list.
*/




/* 1.4) Change the color of first list item from Gandalf's bucket list to Red.
    Hint 1: You have already selected this list element from previous part.
*/



/* 1.5) Add a new item in Frodo's bucket list. 
        The item should 'Sail off With the Elves.'
    Hint 1: Use .createElement() method
    Hint 2: Use .append() 
*/



/* 1.5) Remove the first item from Frodo's bucket list.
    Hint 1: First select the item
    Hint 2: Use .remove() 
*/


////////////// Part 2 (DOM Traversal) /////////////////////

/* 2.1) Print all children of the div with id="gandalf-list"
    Hint 1: select the div first
    Hint 2: use  .children 
*/

let glist = document.querySelector('#gandalf-list');

console.log(glist.children);


/* 2.2) Print the first child of the div with id="frodo-list" */

let flist = document.querySelector('#frodo-list');

console.log(flist.firstElementChild);

/* 2.3) Print the last child of the div with id="gandalf-list" */ 
//let glist = document.querySelector('#gandalf-list');

console.log(glist.lastElementChild);


/* 2.4) Print the 2nd last child of the div with id="gandalf-list" 
    Hint 1: First select the last child as you did in Part 2.3
    Hint 2: Then use  .previousElementSibling to get the 2nd last child
*/ 

//let glist = document.querySelector('#gandalf-list');

console.log(glist.previousElementSibling);

/* 2.4) Find the parent element of the div with id="frodo-list" */

//let flist = document.querySelector('#frodo-list');

console.log(flist.parentElement);


////////////// BONUS /////////////////////
/*  Find out the person who has 'Become White Wizard.' in their bucket list 
    
    Hint 1: You will need to select all <li> elements
    Hint 2: Use .textContent   and === 
    Hint 3: Use .parentElement (You are looking to find the grandparent actually)
*/


const toFind = 'Become a White Wizard';
allLiElements = document.querySelectorAll('li');


for(let i=0; i < allLiElements.length; i++){
    if(allLiElements[i].innerText === toFind){
        let grandparent = allLiElements[i].parentElement.parentElement;
        console.log(grandparent);
        console.log(grandparent.firstElementChild);
}
}