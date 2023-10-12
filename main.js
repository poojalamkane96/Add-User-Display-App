//Inputs from html webpage
const myform =document.querySelector("#my-form");
const nameInput=document.querySelector("#name");
const emailInput=document.querySelector("#email");
const msgdisplay=document.querySelector(".msg");
const userList=document.querySelector("#users");


//addeventlistener 
myform.addEventListener('submit' ,onSubmit);

//function onsubmit
function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value ===  "")
    {
        msgdisplay.innerHTML="please Enter all the field"

        //remove message after  3 seconds from  webpage
        setTimeout(()=> msgdisplay.remove(),3000);
    }
    else{

        //create list li
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value +":"+ emailInput.value));

        userList.appendChild(li);

        //clear fields
        nameInput.value='';
        emailInput.value='';
    }
}
