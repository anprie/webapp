#!/usr/bin/env node

function shift(curr,id,text,sibling){
    let newtext = text;
    let curr_text;
    while (curr) {
        curr_text = curr.innerHTML;
        curr.innerHTML = newtext;
        newtext = curr_text;
        if (curr.id == id){
            break;
        }
        curr = curr[sibling];
    }
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    let src_id = e.dataTransfer.getData("text");
    let source_elem = document.getElementById(src_id);
    let src_text = source_elem.innerHTML;
    let i = src_id.replace(/s_/,'');
    let j = e.target.id.replace(/s_/,'');
    let sibling = '';
    if (i<=j){
        sibling = 'previousElementSibling';
    } else {
        sibling = 'nextElementSibling';
    }
    shift(e.target, src_id, src_text, sibling);
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
