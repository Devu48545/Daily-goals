const title = document.getElementById("title");
const description= document.getElementById("description");
const form= document.querySelector("form");
const container=document.querySelector(".container");
 

const task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")):[]; //array created 

function showAlltask (){
    task.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const p= document.createElement("p");
        p.innerText=value.title;
        innerDiv.append(p);

        const span= document.createElement("span");
        span.innerText=value.description;
        innerDiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");

        btn.innerText="-";
        
        btn.addEventListener("click",()=>{
            removeTask();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            showAlltask();
        })

        div.append(btn);

        container.append(div);
        

    })
}

function removeTask (){
    task.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
        
    });
}
form.addEventListener("submit",(e)=>{   //event listener on button that work while submitting values// also page wont reload
e.preventDefault();
removeTask();




task.push({                             //fucntion to push the value in the array
    title:title.value,
    description:description.value
})
localStorage.setItem("task",JSON.stringify(task));//array string bhi hai, or json se array string mein set hogyi
showAlltask();
});