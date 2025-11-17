var click = document.querySelector(".stickdiv")
const container2 = document.querySelector("#container2")
const text = document.getElementById("myInput")
const para = document.querySelector("p")


click.addEventListener('click',function(){
    const stickNote = document.createElement('div');
    const textnote =  text.value;


    stickNote.innerText= textnote
    stickNote.classList.add('createNote')

    container2.appendChild(stickNote);
})




