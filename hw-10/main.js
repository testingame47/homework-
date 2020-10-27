const printMultiplication = number => {
  if (number < 1 || number > 10) return
  console.log('in bang nhan')
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
  }
}

// b2 print even number
const printEvenNumber = number => {
  if (number < 1 || number > 30) return;
    for (i = 1; i <= number; i++) {
      if (i % 2 === 0)
        console.log(i)
    }
}

// b3 sum 1-> n
const getSum = number => {
  if (number < 1 || number > 30) return;
  let sum = 0
  for (let i = 0; i <= number; i++) {
    sum = sum + i
  }
  return sum
}

// b4  factorial  
const getFactorial = number => {
  if (number < 1 || number > 30) return;
  let factorial = 1
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i
  }
  return factorial
}

// Bài 5 : count evennumber in array
const countEvenNumber = (array = []) => {
  let count = 0
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      count = count + 1
    }
  }
  return count
}

// Bài 6 : delete (duplicate) element
const getUniqArray = (array = []) => {
  const uniqArray = []
  for (let i = 0; i < array.length; i++) {
    if (uniqArray.indexOf(array[i]) === -1) {
      uniqArray.push(array[i])
    }
  }
  return uniqArray
}

//bài 7 create object
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]
const creatStudentsArray = (studentNames, studentScores) => {
  for (let i = 0; i < studentNames.length; i++) {
    for (let j = 0; j < studentScores.length; j++) {
      if (studentNames[i].id === studentScores[j].id) {
        studentNames[i].score = studentScores[j].score
      }
    }
  }
  return studentNames
}

//bai 8 find min, max score and print return the best, the worst students
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const getStudentRank = (student = []) => {
  let min = 11
  let max = 0
  const theBest = []
  const theBad = []
  students.forEach(student => {
    if (max < student.score) {
      max = student.score
    }
    if (min > student.score) {
      min = student.score
    }
  })

  students.forEach(student => {
    if (student.score === max) {
      theBest.push(student)
    }
    if (student.score === min) {
      theBad.push(student)
    }
  })

  return {
    theBest,
    theBad
  }
}
