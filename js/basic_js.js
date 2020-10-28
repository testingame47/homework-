function getSalary(salary) {
  if (salary == 15)
    console.log(`thuế ${0.3 * salary * 10 ** 6} lương ròng ${(15 - 0.3 * salary) * 10 ** 6}`)
  else if (salary == 7)
    console.log(`thuế ${0.2 * salary * 10 ** 6} lương ròng ${(7 - 0.2 * salary) * 10 ** 6}`)
  else if (salary > 7 && salary < 15)
    console.log(`thuế ${0.1 * salary * 10 ** 6} lương ròng ${(salary - 0.1 * salary) * 10 ** 6}`)
}
function getAge(age) {
  if (age < 16)
    console.log('hoc sinh khong du dieu kien')
  else console.log('hoc sinh du dieu kien')
}
function checkNumber(number) {
  if (number > 100)
    console.log(`số bạn vừa nhập là ${number} lớn hơn 100`)
  else if (number === 100)
    console.log('số bạn vừa nhập là 100')
  else console.log(`số bạn vừa nhập là ${number} nhỏ hơn 100`)
}
function findMax(a, b, c) {
  let max = a
  if (b > max) max = b
  if (c > max) max = c
  console.log(max)
}
function getRank(score) {
  if (score >= 9 && score <= 10)
    console.log('rank A')
  else if (score >= 7)
    console.log('rank B')
  else if (score >= 5)
    console.log('rank C')
  else if (score >= 0 && score < 5)
    console.log('rank F')
  else console.log('không hợp lệ')
}
function findX(a, b, c) {
  delta = b * b - 4 * a * c
  if (a == 0 && b != 0)
    console.log('phương trình có nghiệm duy nhất: ', -c / b)
  else if (a == b && a == c && a == 0)
    console.log('phương trình vô số nghiệm')
  else if (a == b && a == 0 && c != 0)
    console.log('phương trình vô nghiệm')
  else if (delta < 0)
    console.log('phương trình vô nghiệm')
  else if (delta > 0) {
    console.log('phương trình có 2 nghiệm')
    console.log(-b - Math.sqrt(delta))
    console.log(-b + Math.sqrt(delta))
  }
  else console.log('phương trình có nghiệm kép:', -b / (2 * a))
}
function getCommission(sales) {
  console.log(`Doanh sô: ${sales} triệu`)
  if (sales <= 100)
    console.log(`hoa hồng: ${0.05 * 100} triệu`)
  else if (sales < 100 && sales >= 300)
    console.log(`hoa hồng: ${0.1 * 100} triệu`)
  else console.log(`hoa hồng: ${0.2 * 100} triệu`)
}
function getPhoneBill(minutes) {
  console.log('số phút đã gọi', minutes)
  if (minutes >= 200)
    console.log('cước', ((minutes - 200) * 200 + 150 * 400 + 50 * 600 + 25000))
  else if (minutes >= 50 && minutes < 200)
    console.log('cước', ((minutes - 50) * 400 + 50 * 600 + 25000))
  else console.log('cước', (minutes * 600 + 25000))
}
