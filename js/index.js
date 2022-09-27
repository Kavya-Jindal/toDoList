var container = document.querySelector('.container')
var value1 = document.querySelector('.input')
var add1 = document.querySelector('.add')

add1.addEventListener('click',plus)
window.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        plus()
    }
})

function todo(){
    var li=document.createElement('div')

    var input=document.createElement('input')
    input.type="text"
    input.value=value1.value
    input.classList.add('itemInput')

    var remove=document.createElement('button')
    remove.classList.add('remove')
    remove.innerHTML='<i class="fa-solid fa-xmark"></i>'

    
    li.append(remove)
    remove.addEventListener('click',()=>li.remove())
    container.appendChild(li)
    li.appendChild(input)
}
function plus(){
    if(value1.value!=""){
        todo()
        value1.value=""
    }
}
function removeAll(){
    document.querySelector('.container').innerHTML=""
}