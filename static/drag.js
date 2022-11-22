#!/usr/bin/env node

function shift_left(curr,id,text){
    var newtext = text;
    var curr_text;
    while (curr){
        curr_text = curr.innerHTML;
        curr.innerHTML = newtext;
        newtext = curr_text;
        if (curr.id == id){
            break;
        }
        curr = curr.previousElementSibling;
    } 
}

function shift_right(curr,id,text){
    var newtext = text;
    var curr_text;
    while (curr) {
        curr_text = curr.innerHTML;
        curr.innerHTML = newtext;
        newtext = curr_text;
        if (curr.id == id){
            break;
        }
        curr = curr.nextElementSibling;
    }
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    var src_id = e.dataTransfer.getData("text");
    var source_elem = document.getElementById(src_id);
    var src_text = source_elem.innerHTML;
    var i = src_id.replace(/s_/,'');
    var j = e.target.id.replace(/s_/,'');
    if (i<=j){
        shift_left(e.target, src_id, src_text);
    } else {
        shift_right(e.target, src_id, src_text);
    }
    e.stopPropagation();
    return false;
}

//https://www.geeksforgeeks.org/what-are-valid-values-for-the-id-attribute-in-html/
function dragStart(e) {
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData("text", e.target.id);
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
