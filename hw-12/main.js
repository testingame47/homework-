// Exercise 1:
const checkisEqual = (firstArr, secondArray) => {
  return JSON.stringify(firstArr) === JSON.stringify(secondArray)
}
// Exercise 2:
const sortArray = data => {
  return data.flat(Infinity)
}

// Exercise 3:
const chunkArray = (array, chunkSize) => {
  const result = []
  while (array.length) {
    result.push(array.splice(0, chunkSize))
  }
  return result
}

// Exercise 4:
const findSameElement = (firstArr, secondArray) => firstArr.filter(val => secondArray.includes(val))

// Exercise 5:
const checkSaletime = time => {
  const finalSaleTime = new Date('30 Oct 2020 12:30:32')
  return Date.parse(time) <= Date.parse(finalSaleTime)
}

// Exercise 6:
const checkEmail = email => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
  return regex.test(email)
}

const checkUserName = user => {
  const regex = /^([a-z]{1})([a-z0-9]|_(?!_)){1,9}$/g
  return regex.test(user)
}
