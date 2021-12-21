// задание 4
document.querySelectorAll('p').forEach((elem) => {
    elem.insertAdjacentHTML('afterend', '<hr/>');
});

// задание 5
let el = document.getElementById('count');
el.remove();
function myFunc() {
    const firstUl = document.getElementById("sweet"),
        firstChild = firstUl.firstChild,
        newChild = document.createElement("div" ),
        text = document.createTextNode("Canned Fish");

    newChild.appendChild(text);
    firstUl.replaceChild(newChild, firstChild);
}
console.log(myFunc())
function Func() {
    const firstUl = document.getElementById("bar"),
        firstChild = firstUl.firstChild,
        newChild = document.createElement("span"),
        text = document.createTextNode("x 4");

    newChild.appendChild(text);
    firstUl.replaceChild(newChild, firstChild);
}
console.log(Func())



// задание 3
function myContainer(){
	var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	for(var i=0;i<5;i++){
	 var newLi = document.createElement('li');
	 newLi.className="task";
	
  newLi.innerHTML = tasks[i];

  todolist.appendChild(newLi);
}
}

// задание 2
let redColor = document.getElementsByClassName('element');
for (let i = 0; i < redColor.length; i++){
    redColor[i].style.color = "#ff0000"
}
let greenColor = document.getElementsByClassName('element');
for (let i = 3; i < greenColor.length; i++){
    greenColor[i].style.color = "#008000"
}


// задание 1
function ochered(){
    var end = document.getElementById("string-6").childNodes[0].nodeValue;
    document.getElementById("string-6").innerHTML = document.getElementById("string-1").childNodes[0].nodeValue;
 	document.getElementById("string-1").innerHTML = document.getElementById("string-3").childNodes[0].nodeValue;
    document.getElementById("string-3").innerHTML = document.getElementById("string-2").childNodes[0].nodeValue;
    document.getElementById("string-2").innerHTML = document.getElementById("string-5").childNodes[0].nodeValue;
    document.getElementById("string-5").innerHTML = document.getElementById("string-4").childNodes[0].nodeValue;
    document.getElementById("string-4").innerHTML = end;
}
ochered();

// задание 6
function information(){
	var ul = document.createElement('ul');
	document.body.appendChild(ul);
	 while (true) {
    var newLi = prompt("Введите текст для создания списка задач", "");
    if (newLi === null || newLi===0) {
       break;
    }
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(newLi));
    ul.appendChild(li);
}
}
information()
