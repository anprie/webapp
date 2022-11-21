#!/usr/bin/env node

function insert(L,i,j){
        s_j = L[i];
        if (i<=j){
            for (let k=i+1; k<=j; k++){
                L[k-1] = L[k];
            }
        } else {
            for (let k=i-1; k>=j; k--){
                L[k+1] = L[k];
            }
        }
        L[j] = s_j;
        return L;
}

function shift_left(curr,id,text){
    newtext = text;
    last = false;
    while (curr && last != true) {
        curr_text = curr.innerHTML;
        if (curr.id == id){
            last = true;
        }
        curr.innerHTML = newtext;
        curr = curr.previousElementSibling;
        newtext = curr_text;
    }
}

function shift_right(curr,id,text){
    newtext = text;
    last = false;
    while (curr && last != true) {
        if (curr.id == id){
            last = true;
        }
        curr_text = curr.innerHTML;
        curr.innerHTML = newtext;
        newtext = curr_text;
        curr = curr.nextElementSibling;
    }
}

function rearrange(elem,L,i,j){
    for (var i = 0; i<L.length; i++){
        elem.appendChild(document.getElementById(L[i]));
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
    source_elem = document.getElementById(src_id);
    src_text = source_elem.innerHTML;
    shift_left(e.target, src_id, src_text);
    e.target.innerHTML = src_text;
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

function dragDrop(e) {
    var src_id = e.dataTransfer.getData("text");
    source_elem = document.getElementById(id);
    src_text = source_elem.innerHTML;
    shift_left(e.target, src_id, src_text);
    e.target.innerHTML = src_text;
    e.stopPropagation();
    return false;
}
