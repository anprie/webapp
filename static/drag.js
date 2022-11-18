#!/usr/bin/env node

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    var fetchData = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(fetchData));
}

function dragStart(e) {
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData("text", e.target.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target,0,0);
    return true;
}

function dragEnter(e) {
    e.preventDefault();
    return true;
}

function dragOver(e) {
    return false;
}

function dragDrop(e) {
    var src = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(src));
    e.stopPropagation();
    return false;
}
