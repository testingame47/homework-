const changeColor = event => {
  const presentColor = event.target
  return presentColor.style.background == 'red' ? presentColor.style.background = 'green' : presentColor.style.background = 'red'
}
