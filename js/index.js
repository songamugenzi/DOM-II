// Mouseover - done
const theH2s = document.querySelectorAll('h2');
function onMouseover(event) {
    theH2s.forEach(title => title.style.color = 'teal');
    setTimeout(function () {
        event.target.style.color = "";
    }, 300);
};
document.addEventListener('mouseover', onMouseover)


// Keydown - done
const imageTags = document.getElementsByTagName('img');
function onKeydown(event) {
    if (event.key === 'r') {
        imageTagsArr = Array.from(imageTags);
        imageTagsArr.forEach(image => image.style.borderRadius = '60px')
    }
}
document.addEventListener('keydown', onKeydown)


// Wheel - done
const sectionText = document.querySelectorAll('p');
function onWheel(event) {
    sectionTextArr = Array.from(sectionText);
    sectionText.forEach(ptag => ptag.style.color = 'red');
    console.log(onWheel);
}
document.addEventListener('wheel', onWheel)


// Drag / Drop !!!!!!
function dragDrop(event) {

}
// document.addEventListener('drag / drop', dragDrop)

// const imagesContainer = document.querySelectorAll('.img-content');
// imagesContainer.forEach(function (imageDiv) {
//     imageDiv.setAttribute('draggable', 'true');
//     imageDiv.addEventListener('drag', imagesContainer);
// });
// const dragSpace = document.querySelectorAll('.content-section');
// dragSpace.forEach(function (divSpace) {
//     imageDiv.setAttribute('draggable', 'true');
//     imageDiv.addEventListener('drag', dragSpace);
// });

// function dragStart(event) {
//     this.className += ' hold';
//     setTimeout(() => (this.className = 'invisible'), 0);
// }

// function dragEnd(event) {
//     this.className = 'fill';
// }

// function dragOver(event) {

// }

// function dragDrop(event) {

// }



// load - done
const loadPage = window.addEventListener('load', (event) => {
console.log('page is fully loaded');
});


// // Focus !!!!!!
// const newDivContainer = document.querySelector('.content-destination');

// function onFocus(event) {
//     var newForm = document.newDivContainer.createElement('form');
//     var newInput = document.newForm.createElement('input');
//     var newContent = document.createTextNode('Thank you for visiting!');
//     newForm.appendChild(newContent);

//     var currentDiv = newDivContainer.img;
//     document.body.insertBefore(newInput, currentDiv);
// }
// newInput.addEventListener('focus', onFocus);


// // Resize - done
function onResize(event) {
    theH2sArr = Array.from(theH2s);
    theH2s.forEach(title => title.style.fontSize = '12px');
    setTimeout(function () {
        event.target.style.fontSize = "";
    }, 300);
};
window.addEventListener('resize', onResize);


// // Scroll - done
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        alert('You\'ve reached the bottom of the page!')
    }
});


// // Select !!!!
// function onSelect(event) {

// }
// // document.addEventListener('select', onSelect)
// function selectedDestination(event) {
//     const header4 = document.querySelector('h4');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     header4.textContent = `You selected: ${selection}`;
//   }
  
//   const selectedArea = document.querySelectorAll('destination');
//   selectedArea.onselect = selectedDestination;
// window.addEventListener('select', selectedDestination);

// // Dblclick - done
const buttonsClick2 = document.querySelector('.btn');
function onDblclick(event) {
    document.body.style.background = 'orange';
};
buttonsClick2.addEventListener('dblclick', onDblclick);
