var nextThing;
function doSomething(ev) {
    if(nextThing!=null){
      nextThing.style.backgroundColor="blue";}
      
    // get the target from the click
    console.log("Next node is: ");
    r = ev.target;

    if(r.firstElementChild){
        nextThing=r.firstElementChild;
    }
    else if(r.nextElementSibling){
        nextThing=r.nextElementSibling;
    }
     else {
        while(!r.parentNode.nextElementSibling) {
            r = r.parentNode;
        }
        if(r.parentNode.nextElementSibling.tagName == 'SCRIPT')
        {
            r = r.parentNode.nextElementSibling;
            while(r.parentNode.tagName != 'BODY') {
                r = r.parentNode;
            }
            nextThing = r.parentNode.firstElementChild;
        }
        else 
        {
            nextThing = r.parentNode.nextElementSibling;
        }
    }
    console.log(nextThing);
    nextThing.style.backgroundColor = "white";
    }

window.onclick = next;
    /*
    // get dom relationships from the element
    r.firstChild;
    r.firstElementChild;
    r.lastChild;

    r.parentNode;
    r.nextSibling;
    r.nextElementSibling;*/


function next(win){
    console.log("Next node is: ");
    winner = win.target;
    var nextThing = null;
    if(winner.firstElementChild) {
        nextThing = winner.firstElementChild;
    }
    else if(winner.nextElementSibling) {
        nextThing = winner.nextElementSibling;
    }
    else
    {
        while(!winner.parentNode.nextElementSibling) {
            winner = winner.parentNode;
        }
        if(winner.parentNode.nextElementSibling.tagName == 'SCRIPT')
        {
            winner = winner.parentNode.nextElementSibling;
            while(winner.parentNode.tagName != 'BODY') {
                winner = winner.parentNode;
            }
            nextThing = winner.parentNode.firstElementChild;
        }
        else 
        {
            nextThing = winner.parentNode.nextElementSibling;
        }
    }
    console.log(nextThing);
}
