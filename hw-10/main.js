const printMultiplication = number => {
  if (number < 1 || number > 10) return;
  console.log('in bang nhan')
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
  }
}
//b2 in cac số chẵn
const printEvenNumber = number => {
  if (number < 1 || number > 30) return;
    for (i = 1; i <= number; i++) {
      if (i % 2 === 0)
        console.log(i)
    }
}
// b3 tinh tong tu 1-> n
const getSum = number => {
  if (number < 1 || number > 30) return;
  let sum = 0
  for (let i = 0; i <= number; i++) {
    sum = sum + i
  }
  return sum;
}
//b4 tinh giai thua (factorial) 
const getFactorial = number => {
  if (number < 1 || number > 30) return;
  let factorial = 1
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i
  }
  return factorial;
}
//Bài 5 : Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
const countEvenNumber = (array = []) => {
  let count = 0
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      count = count + 1
    }
  }
  return count;
}
//Bài 6 : Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
const getUniqArray = (array = []) => {
  const uniqArray = []
  for (let i = 0; i < array.length; i++) {
    if (uniqArray.indexOf(array[i]) === -1) {
      uniqArray.push(array[i])
    }
  }
  return uniqArray;
}
//bài 7 tạo object
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
  return studentNames;
}
//bai 8
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const findMinMaxScore = array => {
  const bestStudent = []
  const worstStudent = []
  let maxScore = 0
  let minScore = 10
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > maxScore) {
      maxScore = students[i].score
    }
    if (students[i].score < minScore) {
      minScore = students[i].score
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].score === maxScore) {
      bestStudent.push(array[i])
    }
    if (students[i].score === minScore) {
      worstStudent.push(array[i])
    }
  }
  console.log(bestStudent)
  console.log(worstStudent)
}

