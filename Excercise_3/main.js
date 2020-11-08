const showList = obj => {
  let ulLap = document.getElementById('laptop')
  let ulMobile = document.getElementById('mobile')
  let ulTv = document.getElementById('tv')
  switch (obj.value) {
    case 'Laptop':
      ulLap.style.display = "inline"
      ulMobile.style.display = "none"
      ulTv.style.display = "none"
      break;
    case 'Mobile':
      ulLap.style.display = "none"
      ulMobile.style.display = "inline"
      ulTv.style.display = "none"
      break;
    default:
      ulLap.style.display = "none"
      ulMobile.style.display = "none"
      ulTv.style.display = "inline"
  }
}
