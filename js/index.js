let today= new Date();
console.log(today);
let thisYear= today.getFullYear();
console.log(thisYear);
let footer = document.querySelector("footer");
const copyright =  document.createElement("p");
copyright.innerText ="Elena Demidenko"+" "+ thisYear;
//document.getElementsByTagName("footer").appendChild(copyright);//
footer.appendChild(copyright);
//List your technical skills by creating an Array of String values and store it in a variable named skills//
let skills=["HTML", "CSS", "Java Script", "Articulate Storyline", "Figma", "UX Design"];
console.log(skills);
let skillsSection= document.getElementById("skills");
//Using "DOM Selection",
// query the skillsSection (instead of the entire document)
// to find the <ul> element and store it in a variable named skillsList
let skillsList=skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill=document.createElement("li");
    //On the next line, set the inner text of your skill variable to the value of the current Array element
//hint: access the Array element using bracket notation
skill.innerText=skills[i];
//On the next line, append the skill element to the skillsList element
//hint: appendChild method
skillsList.appendChild(skill);
}
const messageForm=document.getElementById("leave_message");
messageForm.addEventListener('submit',  (event)=> {
    event.preventDefault();
    const nameValue=event.target.name.value;
    const emailValue=event.target.email.value;
    const messageValue=event.target.message.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);
    const messageSection=document.getElementById("messages");
    const messageList= messageSection.querySelector('ul');
    const newMessage=document.createElement('li');
    newMessage.innerHTML=`<a href="mailto:${emailValue}">${nameValue}</a> <span> ${messageValue} </span>`;
    //newMessage.innerHTML=('<a href="mailto:emailValue">${nameValue}</a>');
    console.log(newMessage)
    messageForm.reset()
    const removeButton=document.createElement('button');
    removeButton.innerText='remove';
    console.log(removeButton);
    removeButton.type="button";
    removeButton.addEventListener('click',  (remove)=>{
        const entry=removeButton.parentNode;
        entry.remove();
        
       
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
})
//const githubRequest= new XMLHttpRequest();
//githubRequest.open('GET', 'https://api.github.com/users/elenademi/repos');
//githubRequest.send();
//githubRequest.onload= function() {
    //const repositories=JSON.parse(this.responseText);
    //console.log(repositories);
 
//};
//console.log(repositories);
 //AJAX   
//githubRequest.addEventListener('load', function() {
    //let repositories=JSON.parse(this.responseText)
    //console.log(repositories);
   // const projectSection=document.getElementById("projects");
//const projectList= projectSection.querySelector('ul');
//for (let i = 0; i < repositories.length; i++) {
    //const projects= document.createElement('li');
    //projects.innerText=repositories[i].name;
   // projectList.appendChild(projects);
   // const projectLink=document.createElement("a");
   // projectLink.innerText=repositories[i].name;
   // projectLink.href=repositories[i].html_url;
    //projectLink.target="_blank";
    //projects.appendChild(projectLink);
    //const projectDescription=document.createElement('p');
    //projectDescription.innerText=repositories[i].description;
   // projects.appendChild(projectDescription);
  //}
    // }
// );
 fetch('https://api.github.com/users/elenademi/repos')
.then( response=>response.json())  
 .then(repositories=> {
    const projectSection=document.getElementById("projects");
    const projectList= projectSection.querySelector('ul');
    for (let i = 0; i < repositories.length; i++) {
    const projects= document.createElement('li');
   // projects.innerText=repositories[i].name;
    projectList.appendChild(projects);
    const projectLink=document.createElement("a");
    projectLink.innerText=repositories[i].name;
   projectLink.href=repositories[i].html_url;
    projectLink.target="_blank";
    projects.appendChild(projectLink);
    const projectDescription=document.createElement('p');
    projectDescription.innerText=repositories[i].description;
    projects.appendChild(projectDescription);
  }
    
  });
   


