let dropdownMenuLink = document.querySelectorAll(".dropdown-toggler");
let dropdownMenu = document.querySelectorAll(".dropdowned-menu");
let backMenuBtn = document.querySelectorAll(".back-menu-btn");

for (let i = 0; i < dropdownMenuLink.length; i++) {
  
  dropdownMenuLink[i].onclick = () => {
    dropdownMenu[i].classList.add('active-menu');
  }; 

  backMenuBtn[i].onclick = () => {
    dropdownMenu[i].classList.remove('active-menu');
  }  
}

burgerBtn = document.querySelector('.burger-btn');
burgerBtn.onclick = () => {
  document.body.classList.toggle('scroll-lock');
}


  
