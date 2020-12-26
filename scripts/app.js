const pause = document.getElementById('pause')
const play = document.getElementById('play')
const vDark = document.getElementById('v-dark')
const vLight = document.getElementById('v-light')
const slider = document.getElementById("myRange");
const currentGray = localStorage.getItem('grayscale')
localStorage.setItem('ld-mode', 'light')


//GRAYSCALE FUNCTIONs
if (currentGray === null) {
  document.querySelector('html').style.filter='grayscale(1)'
  document.getElementById('myRange').value='100'
} else if (currentGray !== null) {
  document.querySelector('html').style.filter=`grayscale(${currentGray})`
  document.getElementById('myRange').value=`${currentGray*100}`
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  ratio = slider.value / 100
  document.querySelector('html').style.filter = `grayscale(${ratio})`
  localStorage.setItem('grayscale', ratio)
}

//HAMBURGER MENU TOGGLE
const toggleHamburger = (x) => {
  x.classList.toggle("change")
  let toggleCheck = document.getElementById('ham').getAttribute('value')
  if (toggleCheck === "closed") {
    document.getElementById('ham').setAttribute('value', 'opened')
    document.getElementById('nav').style.height = "100vh"
    document.getElementById('nlinks').style.display = "inline-block"
  } else if (toggleCheck === "opened") {
    document.getElementById('ham').setAttribute('value', 'closed')
    document.getElementById('nav').style.height = "0vh"
    document.getElementById('nlinks').style.display = "none"
  }

}


//PLAY VIDEO
const playVideo = () => {
  vDark.play()
  vLight.play()
}
//PAUSE VIDEO
const pauseVideo = () => {
  vDark.pause()
  vLight.pause()
}
//DARK/LIGHT INVERT FUNCTION
const dlMode = () => {
  let current = localStorage.getItem('ld-mode')
  if (current === 'light') {
    vLight.style.display = "none"
    vDark.style.display = "inline-block"
    document.getElementById('play-p').style.filter = 'invert(1)'
    document.getElementById('pause-p').style.filter = 'invert(1)'
    document.getElementById('dl-m-p').style.filter = 'invert(1)'
    document.getElementById('footer').style.filter = 'invert(1)'
    document.querySelector('body').style.color = 'rgb(210, 210, 210)'
    localStorage.setItem('ld-mode', 'dark')
    document.querySelector('body').style.backgroundColor = 'black'
  } else if (current === 'dark') {
    vDark.style.display = 'none'
    vLight.style.display = 'inline-block'
    document.getElementById('play-p').style.filter = 'invert(0)'
    document.getElementById('pause-p').style.filter = 'invert(0)'
    document.getElementById('dl-m-p').style.filter = 'invert(0)'
    document.getElementById('footer').style.filter = 'invert(0)'
    document.querySelector('body').style.color = 'rgb(55, 55, 55)'
    localStorage.setItem('ld-mode', 'light')
    document.querySelector('body').style.backgroundColor = 'rgb(237, 237, 237)'
  }
}
