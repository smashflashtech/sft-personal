const pause = document.getElementById('pause')
const play = document.getElementById('play')
const vDark = document.getElementById('v-dark')
const vLight = document.getElementById('v-light')
const slider = document.getElementById("myRange");
const currentGray = localStorage.getItem('grayscale')
let mode = 'light'

//GRAYSCALE FUNCTIONs
if (currentGray === null) {
  document.querySelector('html').style.filter = 'grayscale(0)'
  document.getElementById('myRange').value = '0'
} else if (currentGray !== null) {
  document.querySelector('html').style.filter = `grayscale(${currentGray})`
  document.getElementById('myRange').value = `${currentGray * 100}`
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
  let current = mode
  const playBtn = document.getElementById('play-p')
  const pauseBtn = document.getElementById('pause-p')
  const modeBtn = document.getElementById('dl-m-p')
  const footer = document.getElementById('footer')
  const engineer = document.getElementById('engineer')
  const darkDiv = document.getElementById('dDiv')
  const controls = document.getElementById('controls')
  const detail = document.getElementById('detail')
  const gap = document.getElementById('last')
  const body = document.querySelector('body')
  if (current === 'light') {
    vLight.style.display = "none"
    vDark.style.display = "inline-block"
    playBtn.style.filter = 'invert(1)'
    pauseBtn.style.filter = 'invert(1)'
    modeBtn.style.filter = 'invert(1)'
    footer.style.filter = 'invert(1)'
    engineer.style.color = 'rgb(210, 210, 210)'
    darkDiv.style.setProperty('background', 'rgb(0, 0, 0)')
    controls.style.setProperty('background', 'rgb(0, 0, 0)')
    detail.style.setProperty('background', 'rgb(0, 0, 0)')
    gap.style.setProperty('background', 'rgb(0, 0, 0)')
    body.style.color = 'rgb(210, 210, 210)'
    mode = 'dark'
  } else if (current === 'dark') {
    vDark.style.display = 'none'
    vLight.style.display = 'inline-block'
    playBtn.style.filter = 'invert(0)'
    pauseBtn.style.filter = 'invert(0)'
    modeBtn.style.filter = 'invert(0)'
    footer.style.filter = 'invert(0)'
    engineer.style.color = 'rgb(55, 55, 55)'
    darkDiv.style.setProperty('background', 'rgb(237, 237, 237)')
    controls.style.setProperty('background', 'rgb(237, 237, 237)')
    detail.style.setProperty('background', 'rgb(237, 237, 237)')
    gap.style.setProperty('background', 'rgb(237, 237, 237)')
    body.style.color = 'rgb(55, 55, 55)'
    mode = 'light'
  }
}

// PROJECTS - Accordian
const acc = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName('panel');

for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    let setClasses = !this.classList.contains('active');
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
      document.getElementById(this.getAttribute('value')).innerHTML = '-'
      if (this.getAttribute('id') === 'lastPanel') {
        document.getElementById('lastPanel').style.borderRadius = "0"
      }
    }
  }
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
    document.getElementById(`plus${i + 1}`).innerHTML = '+'
    document.getElementById('lastPanel').style.borderRadius = "0 0 5px 5px"
  }
}

//Misc

if (document.querySelector('title').innerHTML === '⚡SmashFlashTech⚡ - Misc.') {
  const baButton = document.getElementById('baButton')
  const baBg = document.getElementById('baModal-bg')
  const baClose = document.getElementById('baClose')
  baButton.addEventListener('click', function () {
    baBg.classList.add('bg-active')
  })
  baClose.addEventListener('click', function () {
    baBg.classList.remove('bg-active')
  })

  const climbButton = document.getElementById('climbButton')
  const climbBg = document.getElementById('climbModal-bg')
  const climbClose = document.getElementById('climbClose')
  climbButton.addEventListener('click', function () {
    climbBg.classList.add('bg-active')
  })
  climbClose.addEventListener('click', function () {
    climbBg.classList.remove('bg-active')
  })

  const gasButton = document.getElementById('gasButton')
  const gasBg = document.getElementById('gasModal-bg')
  const gasClose = document.getElementById('gasClose')
  gasButton.addEventListener('click', function () {
    gasBg.classList.add('bg-active')
  })
  gasClose.addEventListener('click', function () {
    gasBg.classList.remove('bg-active')
  })
}
