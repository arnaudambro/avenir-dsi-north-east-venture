

/*------------ Variables ----------------*/
  //Queryselectors
  const logo = document.querySelector('.banner-company-img');
  const bannerCompetenceName = document.querySelector('.banner-competence-name');

  const competenceAvenirDSI = document.querySelector('.avenir-dsi');
  const translateYDistance = competenceAvenirDSI.offsetHeight;

  const listeCompetences = document.querySelector('.liste-competences');
  let selectedIndex;
  let populate = false;
  const classMenuItems = '.item-competences'


  /*------------ HTML Content ----------------*/



  /*------------ Functions - Callbacks ----------------*/

  /*------------------------------------------------------------------------------------------------------------*\
    Roll the menu
    \*------------------------------------------------------------------------------------------------------------*/

    function rollTheMenu () {


          // for (var j = 0; j < itemsCompetencesArray.length; j++) {
          //   item = itemsCompetencesArray[j];
          //   if (j === 0) {
          //     item.classList.add('transition-fadeOut','transition-translateY');
          //   } else if (j === itemsCompetencesArray.length - 1) {
          //     item.classList.add('transition-fadeIn','transition-translateY');
          //     item.classList.remove('hidden')
          //   } else {
          //     item.classList.add('transition-translateY')
          //   }
          // }

          // itemsCompetencesArray.splice(0,1);
          // populateList();

          // function removeTransition (element) {
          //   element.classList.remove('transition-translateY');
          //   element.classList.remove('transition-fadeIn');
          //   element.classList.remove('transition-fadeOut');
          //   element = itemsCompetencesArray[k];
          // }


          // for (var k = 0; k < itemsCompetencesArray.length; k++) {
          //   item = itemsCompetencesArray[k]
          //   debugger
          //   item.addEventListener('transitionend', removeTransition(item))
          // }


      // }


    }


  /*------------------------------------------------------------------------------------------------------------*\
    Populate the list with the new array
    \*------------------------------------------------------------------------------------------------------------*/
    function etapeIntermediaire (array) {
      console.log(8)
      console.log(array)
      const arrayFromObjects = []
      array.forEach(element => {
        const newObject = {
          p: element.firstElementChild.firstElementChild.outerHTML,
          menuPosition: parseInt(element.dataset.menuPosition),
          avenirdsi: element.classList.contains('avenir-dsi')
        }
        arrayFromObjects.push(newObject);
      })
      console.log(9.1)
      console.log(arrayFromObjects)

      arrayFromObjects.push({
        p: arrayFromObjects[0].p,
        menuPosition: arrayFromObjects.length,
        avenirdsi: arrayFromObjects[0].avenirdsi
      })

      console.log(9.2)
      console.log(arrayFromObjects)

      const arrayFromArrayFromObjects = []
      arrayFromObjects.forEach(object => {
        console.log(`9.2.${arrayFromObjects.indexOf(object)}.1`)
        arrayFromArrayFromObjects.push(`<li class="item-competences ${(object.avenirdsi === true) ? 'avenir-dsi' : ''}" data-menu-position="${object.menuPosition}">
          <a href="#" class="lien-competences">
          ${object.p}
          <img src="/img/arrow2.svg" class="svg-arrow"></img>
          </a>
          </li>`)
        console.log(`9.2.${arrayFromObjects.indexOf(object)}.2`)
        console.log(arrayFromArrayFromObjects[arrayFromObjects.indexOf(object)])
      });


      console.log(9.3)
      console.log(arrayFromArrayFromObjects)
      const parser = new DOMParser();
      const arrayOfHTMLElementFromarrayFromArrayFromObjects = [];
      arrayFromArrayFromObjects.forEach(element => {
        console.log(9.31)
        console.log(element)
        const elementParse = parser.parseFromString(element, "text/xml");
        console.log(parser.parseFromString(element, "text/xml"))
        arrayOfHTMLElementFromarrayFromArrayFromObjects.push(elementParse.firstChild)
      })
      console.log(9.4)
      console.log(arrayOfHTMLElementFromarrayFromArrayFromObjects)
      console.log(populate)

      console.log(10)
      return populateList(arrayOfHTMLElementFromarrayFromArrayFromObjects, listeCompetences);

      console.log(19)
    };

    function populateList (array, liste) {
      console.log(11)
      console.log('on va populer')
      const arrayOuterHTML = [];
      console.log(12)
      console.log(array)
      for (var i = 0; i < array.length; i++) {
        console.log(`13.${i}.1`)
        console.log(array[i])
        arrayOuterHTML[i] = array[i].outerHTML;
        console.log(`13.${i}.2`)
        console.log(arrayOuterHTML[i])
      };
      console.log(14)
      console.log(liste)
      let liste2;
      // liste.innerHTML = arrayOuterHTML.join(' ');
      console.log(15)
      console.log(liste)
      const newArray = [...document.querySelectorAll('.item-competences')];
      console.log(16)
      newArray[newArray.length - 1].classList.add('hidden');
      console.log(17)
      populate = true;
      console.log(18)
      console.log('on a populé');
      console.log(populate)
      return newArray
    }


    // function populateList (array, liste) {
    //   console.log(11)
    //   console.log('on va populer')
    //   // const arrayOuterHTML = [];
    //   console.log(12)
    //   console.log(array)
    //   // for (var i = 0; i < array.length; i++) {
    //   //   console.log(`13.${i}.1`)
    //   //   console.log(array[i])
    //   //   arrayOuterHTML[i] = array[i];
    //   //   console.log(`13.${i}.2`)
    //   //   console.log(arrayOuterHTML[i])
    //   // };
    //   // console.log(14)
    //   // liste.innerHTML = arrayOuterHTML.join(' ');
    //   liste.innerHTML = array.join(' ');
    //   console.log(15)
    //   console.log(liste)
    //   const newArray = [...document.querySelectorAll('.item-competences')];
    //   console.log(16)
    //   newArray[newArray.length - 1].classList.add('hidden');
    //   console.log(17)
    //   populate = true;
    //   console.log(18)
    //   console.log('on a populé');
    //   console.log(populate)
    //   return newArray
    // }

  /*------------------------------------------------------------------------------------------------------------*\
    Translate and fade the elements
    \*------------------------------------------------------------------------------------------------------------*/

    function translateAndFade(array) {
      console.log(21)
      array.forEach(element => {
        console.log(`21.${array.indexOf(element)}.1`)
        element.classList.add('transition-translateY');
        console.log(`21.${array.indexOf(element)}.2`)
      });

      array.forEach(element => {

        if (array.indexOf(element) === 0) {

          console.log(`22.${array.indexOf(element)}.3`)
          element.classList.add('transition-fadeOut');
          console.log(`22.${array.indexOf(element)}.4`)

        } else if (array.indexOf(element) === (array.length - 1)) {

          console.log(`22.${array.indexOf(element)}.5`)
          element.classList.add('transition-fadeIn');
          console.log(`22.${array.indexOf(element)}.6`)
          element.classList.remove('hidden');
          console.log(`22.${array.indexOf(element)}.7`)
        }
      });


      console.log(23)
    }

    function translateAndFade2(element, index) {
      console.log(`21.${index}.1`)
      console.log(element)
      console.log(index)



        if (index === 0) {

          console.log(`22.${index}.3`)
          element.classList.add('transition-fadeOut');
          console.log(`22.${index}.4`)

        } else if (index === (5)) {

          console.log(`22.${index}.5`)
          element.classList.add('transition-fadeIn');
          console.log(`22.${index}.6`)
          element.classList.remove('hidden');
          console.log(`22.${index}.7`)
        } else {
          element.classList.add('transition-translateY');
          console.log(`21.${index}.2`)
        }
        console.log(`23.${index}`)

      };





  /*------------------------------------------------------------------------------------------------------------*\
    Select the index clicked and show the competence in the banner
    \*------------------------------------------------------------------------------------------------------------*/

    function showCompetenceInBanner (e, array) {
    //Variables
    console.log(`1`)

    let selectedCompetence;

    //On choisit ce qui nous intéresse : le <p>
    if (e.target.tagName == "IMG") {
      console.log(`2.1`)
      selectedCompetence = e.target.parentElement.firstElementChild;
    } else if (e.target.tagName == "A") {
      console.log(`2.2`)
      selectedCompetence = e.target.firstElementChild;
    } else if (e.target.tagName == "P") {
      console.log(`2.3`)
      selectedCompetence = e.target;
    } else {
      return false;
    }

    //On en sort l'index
    console.log(`3`)
    const selectedCompetenceLi = selectedCompetence.parentElement.parentElement;
    console.log(`4`)

    //On affiche ce qu'il faut dans la banner
    if (selectedCompetenceLi.classList.contains('avenir-dsi')) {
      console.log(`5.1`)
      if (logo.classList.contains('alone') === false) {
        console.log(`5.1.1`)
        logo.classList.add('alone');
        bannerCompetenceName.classList.add('without');
      }
    } else {
      console.log(`5.2`)
      if (logo.classList.contains('alone') === true) {
        console.log(`5.2.1`)
        logo.classList.remove('alone');
        bannerCompetenceName.classList.remove('without');
      }
      bannerCompetenceName.textContent = selectedCompetence.textContent;
    }
    console.log(`6`)
    return  array.indexOf(selectedCompetenceLi);
  }

  /*------------------------------------------------------------------------------------------------------------*\
    Change competence
    \*------------------------------------------------------------------------------------------------------------*/



    function changeCompetence(e) {

      console.log(`0.1`)
      //On définit notre array d'éléments de menu
      let itemsCompetencesArray = [...document.querySelectorAll('.item-competences')];

      console.log(`0.2`)
      //On chope l'index de l'élément clické, et on affiche ce qu'il faut dans la banner
      const selectedIndex = showCompetenceInBanner(e, itemsCompetencesArray);

      console.log(`7`)
      //On ajoute une dernière ligne au menu, égale à la première ligne, et on l'affiche.
      const updatedItemsCompetencesArray = etapeIntermediaire(itemsCompetencesArray);

      console.log(20)
      console.log(updatedItemsCompetencesArray)
      // debugger
      console.log(20.0)
      translateAndFade2(updatedItemsCompetencesArray[0], updatedItemsCompetencesArray.indexOf(updatedItemsCompetencesArray[0]));
      console.log(20.1)
      translateAndFade2(updatedItemsCompetencesArray[1], updatedItemsCompetencesArray.indexOf(updatedItemsCompetencesArray[1]));
      console.log(20.2)
      translateAndFade2(updatedItemsCompetencesArray[2], updatedItemsCompetencesArray.indexOf(updatedItemsCompetencesArray[2]));
      console.log(20.3)
      translateAndFade2(updatedItemsCompetencesArray[3], updatedItemsCompetencesArray.indexOf(updatedItemsCompetencesArray[3]));
      console.log(20.4)
      translateAndFade2(updatedItemsCompetencesArray[4], updatedItemsCompetencesArray.indexOf(updatedItemsCompetencesArray[4]));
      console.log(20.5)
      translateAndFade2(updatedItemsCompetencesArray[5], updatedItemsCompetencesArray.indexOf(updatedItemsCompetencesArray[5]));

      console.log(24)



    }








    /*------------ Event listeners ----------------*/
    listeCompetences.addEventListener('click', changeCompetence)

