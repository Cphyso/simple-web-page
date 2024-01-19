const myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    const myName = prompt('Enter your name.');

    if(!myName){
        setUserName();
    }else{

        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome ${myName}`;
    }
   
}

myImage.onclick = () =>{
    const mySrc =  myImage.getAttribute('src');
    if(mySrc === "./images/blue.jpeg"){
        myImage.setAttribute("src","./images/red.avif");
}else {
    myImage.setAttribute("src","./images/blue.jpeg");
}
};

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  