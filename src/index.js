import './index.css'
import broomImage from './assets/broom.png'
import broomNath from './assets/broomnath.png'
import bryBroom from './assets/brybroom.png'

export default function Celebrate({
  duration = 2500,
  showProb = 4,
  specialProb = 10
}) {
  const animated = []

  const funImage = [broomNath, bryBroom]

  const fire = () => {
    const newAnimated = [...animated]
    newAnimated.push({ id: Date.now(), image: getRandomImage() })
    setAnimated(newAnimated)
  }

  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * showProb)
    if (randomNumber === 0) {
      const randomPicture = Math.floor(Math.random() * specialProb)
      if (randomPicture === 0) {
        return funImage[Math.floor(Math.random() * funImage.length)]
      } else {
        return broomImage
      }
    }
  }

  const removeAnimatedElement = (id) => {
    const newAnimated = animated.filter((item) => item.id !== id)
    setAnimated(newAnimated)
  }

  const animationStyle = {
    animation: `fly ${duration / 1000}s ease-in-out`
  }

  const mainFrame = document.createElement('div')
  mainFrame.className = 'mainFrame'

  const fireButton = document.createElement('div')
  fireButton.addEventListener('click', fire)
  mainFrame.appendChild(fireButton)

  animated.forEach((item) => {
    const fireFrame = document.createElement('div')
    fireFrame.key = item.id
    fireFrame.className = 'fireFrame'
    fireFrame.style.animation = animationStyle.animation
    fireFrame.style.backgroundImage = `url(${item.image})`
    fireFrame.addEventListener('animationend', () => removeAnimatedElement(item.id))
    mainFrame.appendChild(fireFrame)
  })

  return mainFrame
}
