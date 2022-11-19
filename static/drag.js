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

function shift_left(current,text){
    newtext = text;
    last = false;
    while (current && last != true) {
        curr_text = current.innerHTML;
        if (curr_text == text){
            last = true;
        }
        current.innerHTML = newtext;
        current = current.previousElementSibling;
        newtext = curr_text;
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
    e.dataTransfer.setData("text", e.target.innerHTML);
}

function drop(e) {
    var src_text = e.dataTransfer.getData("text");
    shift_left(e.target, src_text);
    e.target.innerHTML = src_text;
}

function dragStart(e) {
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData("text", e.target.innerHTML);
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
    var src_text = e.dataTransfer.getData("text");
    shift_left(e.target, src_text);
    e.target.innerHTML = src_text;
    e.stopPropagation();
    return false;
}
