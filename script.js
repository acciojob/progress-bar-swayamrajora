//your JS code here. If required.
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const activeCircles = document.querySelectorAll('.circle.active').length
  const totalCircles = circles.length
  const progressPercent = ((activeCircles - 1) / (totalCircles - 1)) * 100
  progress.style.width = ${progressPercent}%

  prev.disabled = currentActive === 1
  next.disabled = currentActive === circles.length
}