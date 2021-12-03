window.onload = () => {
  let article = document.querySelector('article');
  let heads = article.querySelectorAll('h1, h2, h3, h4, h5');
  let list = document.getElementById('scrapapa');
  console.log(heads);

  for (let i = 0; i < heads.length; i++) {
    let name = 'h' + i;
    heads[i].id = name;

    let articleListItem = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute("href", "#" + name);
    link.setAttribute("data-id", name);
    link.textContent = heads[i].textContent;
    articleListItem.appendChild(link);
    list.appendChild(articleListItem);
  }

//
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeigth = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeigth);

console.log('=============================');

let links = list.querySelectorAll('a');

window.onscroll = () => {
  const windowScrollTop = window.scrollY;
  console.log(windowScrollTop);
  console.log('-------------');

    for (let i = 0; i < heads.length; i++) {
      let topDocPos = heads[i].offsetTop;
      let id = heads[i].getAttribute('id');
      console.log(id);
      if(heads[i+1]) {
        let nextPos = heads[i+1].offsetTop;
        if (windowScrollTop >= topDocPos && windowScrollTop < nextPos) {
          links[i].classList.add('active-view');
          console.log(links[i]);
        }
        else {
          links[i].classList.remove('active-view');
        }
      }

      else {
        if (windowScrollTop >= topDocPos) {
          links[i].classList.add('active-view');
        }

        else {
          links[i].classList.remove('active-view');
        }
      }
    }







  
  // heads.forEach(element => {
  //   let topDocPos = element.offsetTop;
  //   // gori();
    
  //   console.log(element);
  //   console.log(topDocPos);
  //   console.log('++++++++++++++++++');
  //   let id = element.getAttribute('id');
  //   console.log(id);
  //   if (windowScrollTop >= topDocPos) {
  //     let listLinks = document.getElementById('scrapapa');
  //     let links = listLinks.querySelectorAll('a');
  //     links.forEach(elem => {
  //       if (elem.getAttribute(`data-id="${id}"`) == id) {
  //         elem.classList.add('active-view');
  //         console.log(elem);
  //       }
  //     })


      // let ass = $(`[data-id="${id}"]`);
      // ass.classList.add('active-view');
      // // document.querySelector(`a[href=#${id}]`).classList.add('active-view');
      // console.log(id);
    // }

    // element.classList.remove('active-view');
//   });
  }
}



function gori() {
  window.setTimeout(gori, 100);
  location.reload();
}