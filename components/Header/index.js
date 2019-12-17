// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(date, title, temp) {

    // create elements

    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const titleH1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

    // apply styles

    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    dateSpan.textContent = date
    titleH1.textContent = title
    tempSpan.classList.add('temp')
    tempSpan.textContent = `${temp}°`


    // structure the component

    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(titleH1)
    headerDiv.appendChild(tempSpan)


    return headerDiv




}

// append elements to the DOM
const headerContainer = document.querySelector('.header-container');
const header =  headerContainer.appendChild(Header('MARCH 28, 2019','Lambda Times', '98'))

//console.log(header)