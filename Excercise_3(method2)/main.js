const arr = ['Laptop', 'Điện thoại', 'Tivi']
const selection = document.getElementById('selectForm')

const map = new Map();
map.set('Laptop', ["Macbook", "Dell", "Lenovo", "Asus"])
map.set('Điện thoại', ["Apple", "Samsung", "Nokia"])
map.set('Tivi', ["LG", "Sony"])

for (let i = 0; i < arr.length; i++) {
  const val = arr[i]
  const option = document.createElement('option')
  option.textContent = val
  option.value = val
  selection.appendChild(option)
}

const valueOfSelect = selection.value;
const ulMenu = document.getElementById('menu')

const showBrand = object => {
  if (object.value !== '') {
    while (ulMenu.firstChild) {
      ulMenu.removeChild(ulMenu.lastChild)
    }

    const arrOfObj = map.get(object.value)

    for (let i = 0; i < arrOfObj.length; i++) {
      const val = arrOfObj[i];
      const ulTag = document.createElement('li')
      ulTag.textContent = val
      ulMenu.appendChild(ulTag)
    }
  }
}
