// Ex1 returns an array with element elem repeated n times.
const repeatElement = (element, repeat) => {
  return Array(repeat).fill(element)
}
const repeatElementSecond = (element, repeat) => {
  let newArray = []
  for (let i = 0; i < repeat; i++) {
    newArray = newArray.push(element)
  }
  return newArr
}
const repeatElementThird = (element, repeat) => {
  let newArray = []
  let i = 0
  while (i < repeat) {
    newArray.push(element)
    i++
  }
  return newArray
}

// Ex2 reverse Array
const reverseAray = (arr = []) => {
  let newArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray = newArray + arr[i]
  }
  return newArray
}

// Ex3 remove Falsy (undefine, null, 0, '', false)
const removeFalsy = arr => arr.filter(element => element)

// Ex4 Creat an object from an Array of key-value pairs
const getKeyValueSecond = (array = []) => {
  const newObject = {}
  array.forEach(item => {
    newObject[item[0]] = item[1]
  })
  return newObject
}

// Ex5 sort Array 
const sortArr = arr => arr.sort()

// Ex6 check if a input is an object or not
const checkisObject = data => {
  return typeof (data) === 'object' && !Array.isArray(data)
}

// Ex7 
const getKey = (obj, arr) => {
  arr.forEach(input => {
    for (let key in object) {
      if (key === input) {
        delete (obj[key])
      }
    }
  })
  return obj
}

// Ex8 remove 2nd and 3rd element in array
const removeIndex = (arr = []) => {
  if (arr.length <= 5) return
  return arr.splice(2, 2)
}

// Ex9 
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const checkPassFail = arr => {
  const newArr = []
  arr.map(student => {
    if (student.score > 5 && student.name.lastIndexOf('Duy', student.name.length - 4) === -1) {
      newArr.push('Pass')
    } else {
      newArr.push('Fail')
    }
  })
  return newArr
}

// Ex10
const getStudent = (arr = []) => {
  const studentScore = []
  arr.map(student => {
    let decimal = (student.score - parseInt(student.score)) * 10
    let sum = parseInt(student.score) + Number(decimal.toFixed())
    if (sum >= 10) return
    if (sum > 5) {
      studentScore.push(student)
    }
  })
  return studentScore
}
