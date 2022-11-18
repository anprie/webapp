#!/usr/bin/env node

function allowDrop(e) {
    console.log("in allowDrop");
    console.log("e = ", e)
    e.preventDefault();
}

function drag(e) {
    console.log("in drag");
    console.log("e = ", e)
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    console.log("in drop");
    console.log("e = ", e)
    var fetchData = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(fetchData));
}

function dragStart(e) {
    console.log("in dragStart");
    console.log("e = ", e)
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData("text", e.target.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target,0,0);
    return true;
}

function dragEnter(e) {
    console.log("in dragEnter");
    console.log("e = ", e)
    e.preventDefault();
    return true;
}

function dragOver(e) {
    console.log("in dragOver");
    console.log("e = ", e)
    return false;
}

function dragDrop(e) {
    console.log("in dragDrop");
    console.log("e = ", e)
    var src = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(src));
    e.stopPropagation();
    return false;
}

console.log("hello world!")
