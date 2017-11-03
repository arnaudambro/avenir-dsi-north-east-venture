

/*------------------------------ Variables -----------------------------------*/
const logo = document.querySelector('.banner-company-img');
const bannerCompetenceName = document.querySelector('.banner-competence-name');

const competenceAvenirDSI = document.querySelector('.avenir-dsi');
const translateYDistance = competenceAvenirDSI.offsetHeight;

const menu = document.querySelector('.menu-competences');
const items = [...document.querySelectorAll('.item-competences')];
const itemsLink = [...document.querySelectorAll('.link-competences')]
const itemsContent = [...document.querySelectorAll('.content-competence')]
let moved;
let textContentItemAtTheTopOfTheStack;
let transitionInSeconds;
let transitionInMilliSeconds;

/*--------------------------- Functions - callbacks --------------------------*/


/*--------------------------- STEP 1 --------------------------*/

function getTheIndexOfTheClickedItem (e) {
  //Variable
  let clicked;

  //We select the <p> only
  if (e.target.tagName == "LI") {
    clicked = e.target.firstElementChild.firstElementChild;
  } else if (e.target.tagName == "A") {
    clicked = e.target.firstElementChild;
  } else if (e.target.tagName == "P") {
    clicked = e.target;
  } else if (e.target.tagName == "IMG") {
    clicked = e.target.parentElement.firstElementChild;
  } else {
    return false;
  }

  console.log(clicked);

  if (clicked.classList.contains('avenir-dsi')) {
    if (logo.classList.contains('alone') === false) {
      logo.classList.add('alone');
      bannerCompetenceName.classList.add('without');
    }
  } else {
    if (logo.classList.contains('alone') === true) {
      logo.classList.remove('alone');
      bannerCompetenceName.classList.remove('without');
    }
    bannerCompetenceName.textContent = clicked.textContent;
  }

  //We return the index we want
  const clickedItemIndex = items.indexOf(clicked.parentElement.parentElement);
  textContentItemAtTheTopOfTheStack = itemsContent[clickedItemIndex].textContent;
  transitionInSeconds = 1 / clickedItemIndex;
  transitionInMilliSeconds = transitionInSeconds * 1000;
  translateAndFade(repopulateMenu);

}

/*--------------------------- STEP 4 --------------------------*/


function translateAndFade() {
  console.log(`let's translate`)

  itemsLink.forEach(link => {
    if (itemsLink.indexOf(link) === 0) {
      //We add the fade-out for the first menu-item
      link.style.opacity = 0;
      link.style.transform = `translateY(-25px)`;
      link.style.transition = `all ${transitionInSeconds}s linear`;
    } else if (itemsLink.indexOf(link) === (itemsLink.length - 1)) {
      //We add the fade-in for the last menu-item
      link.firstElementChild.textContent = itemsLink[0].textContent.trim();
      link.style.opacity = 1;
      link.style.transform = `translateY(-25px)`;
      link.style.transition = `all ${transitionInSeconds}s linear`;
    } else {
      //We translate every menu-item one step up
      link.style.transform = `translateY(-25px)`;
      link.style.transition = `all ${transitionInSeconds}s linear`;
    }
  });
  moved = true;
  window.setTimeout(repopulateMenu, transitionInMilliSeconds);
}

/*--------------------------- STEP 5 --------------------------*/


function repopulateMenu (e) {
  console.log(`let's repopulate`)

  itemsLink.forEach(link => {
    if (itemsLink.indexOf(link) === 0) {
        //We remove the fade-out for the first menu-item
        link.style.opacity = 1;
        link.style.transform = ``;
        link.style.transition = ``;
      } else if (itemsLink.indexOf(link) === (itemsLink.length - 1)) {
        //We remove the fade-in for the last menu-item
        link.firstElementChild.textContent = itemsLink[0].textContent.trim();
        link.style.opacity = 0;
        link.style.transform = ``;
        link.style.transition = ``;
      } else {
        //We remove the translation of all of them
        link.style.transform = ``;
        link.style.transition = ``;
      }
    });

  itemsContent.forEach(item => {
      // We put back emptiness for the last menu-item
      if (itemsContent.indexOf(item) === (itemsContent.length - 1)) {
        item.textContent = '';
      } else {
        //We replace the content of the item by the one below it
        item.textContent = itemsContent[itemsContent.indexOf(item)+1].textContent.trim();
      }
      //We put avenir-dsi class where it needs to be
      if ((item.textContent === 'Avenir DSI') && !(item.classList.contains('avenir-dsi'))) {
        item.classList.add('avenir-dsi');
      } else if (!(item.textContent === 'Avenir DSI') && (item.classList.contains('avenir-dsi'))) {
        item.classList.remove('avenir-dsi');
      }
    });

  if (itemsContent[0].textContent != textContentItemAtTheTopOfTheStack) {
    window.setTimeout(translateAndFade, 100);
  } else {
    return;
  }

  // if (itemsContent[0].textContent != textContentItemAtTheTopOfTheStack) {
  //   window.setTimeout(translateAndFade, 100);
  // } else {
  //   return;
  // }

}


  /*--------------------------- Event listeners --------------------------------*/
// menu.addEventListener('click', rollTheMenu, true);
menu.addEventListener('click', getTheIndexOfTheClickedItem, false);


