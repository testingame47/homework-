const timeline = [
  {
    1934: 'I havenot done Ex1 and Ex2,',
    1935: 'Why ?',
    1936: 'They havenot had CSS file, i will try my best.',
    1937: 'you should finish them. As soon as possible!'
  }
]

const showTimeline = (timeline, tagUl) => {
  timeline.forEach(item => {
    for (let key in item) {
      const tagLi = document.createElement('li')
      const boxText = document.createElement('div')
      const title = document.createElement('h4')
      const subTitle = document.createElement('p')

      tagLi.classList.add('timeline_item')
      tagLi.appendChild(boxText)

      boxText.classList.add('box_text')
      boxText.appendChild(title)
      boxText.appendChild(subTitle)

      title.innerText = key
      title.classList.add('box_text-title')

      subTitle.innerText = item[key]
      subTitle.classList.add('box_text-subtitle')

      if (Number(key) % 2 === 0) {
        boxText.classList.add('box_right')
      } else {
        boxText.classList.add('box_left')
      }
      tagUl.appendChild(tagLi)
    }
  })
  tagUl.classList.add('timeline_list')
}

const renderTimeline = () => {
  const box = document.querySelector('.timeline')
  const tagUl = document.createElement('ul')
  showTimeline(timeline, tagUl)
  box.appendChild(tagUl)
}

renderTimeline()

const eventTimeline = e => {
  const eleClick = e.currentTarget
  const box = eleClick.querySelector('.box_text')
  box.classList.toggle('display-block')
}

const eleEventTimeline =
  document.querySelectorAll('.timeline_list .timeline_item')
eleEventTimeline.forEach(ele => {
  ele.addEventListener('click', eventTimeline)
})
