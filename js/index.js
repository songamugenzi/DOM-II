// 1. Mouseover - done

const theH2s = document.querySelectorAll('h2');
function onMouseover(event) {
    theH2s.forEach(title => title.style.color = 'teal');
    setTimeout(function () {
        event.target.style.color = "";
    }, 300);
};
document.addEventListener('mouseover', onMouseover)


// 2. Keydown - done

const imageTags = document.getElementsByTagName('img');
function onKeydown(event) {
    if (event.key === 'r') {
        imageTagsArr = Array.from(imageTags);
        imageTagsArr.forEach(image => image.style.borderRadius = '60px')
    }
}
document.addEventListener('keydown', onKeydown)


// 3. Wheel - done

const sectionText = document.querySelectorAll('p');
function onWheel(event) {
    sectionTextArr = Array.from(sectionText);
    sectionText.forEach(ptag => ptag.style.color = 'red');
    console.log(onWheel);
}
document.addEventListener('wheel', onWheel)


// 4. load - done

const loadPage = window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
});


// 5. Resize - done

function onResize(event) {
    theH2sArr = Array.from(theH2s);
    theH2s.forEach(title => title.style.fontSize = '12px');
    setTimeout(function () {
        event.target.style.fontSize = "";
    }, 300);
};
window.addEventListener('resize', onResize);


// 6. Scroll - done

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        alert('You\'ve reached the bottom of the page!')
    }
});


// 7. Dblclick - done

const buttonsClick2 = document.querySelector('.btn');
function onDblclick(event) {
    document.body.style.background = 'orange';
};
buttonsClick2.addEventListener('dblclick', onDblclick);


// 8. Keyup

const keyPressed = document.addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.keyCode === 83) {
        const header = document.querySelector('header')
        console.log(header)
        header.style.background = 'red'
    }
})


// 9. Copy

document.addEventListener('copy', function (e) {
    console.log(e.srcElement.localName)
    const header = document.querySelector(`${e.srcElement.localName}`)
    console.log(header)
    header.style.background = 'red'
})

// 10. LoadEnd

document.addEventListener('mousemove', function (e) {
    console.log(e)
    const body = document.querySelector('body')
    if (e.clientX > 500) {
        body.style.background = 'pink'

    } else {
        body.style.background = 'initial'
    }
})