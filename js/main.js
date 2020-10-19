function getSalary(n) {
    n == Number
    a = 'thuế: '
    b = 'lương ròng: '
    if (n==15) {
        console.log(a + 0.3*n*10**6 )  
        console.log(b + (15-0.3*n)*10**6)      
    }
    else if (n==7) {
        console.log(a + 0.2*n*10**6 ) 
        console.log(b + (7-0.2*n)*10**6) 
    }
     else if(n>7 && n<15) {
        console.log(a + 0.1*n*10**6) 
        console.log(b + (n-0.1*n)*10**6) 
     }
}
function getAge(n) {
    if (typeof(n)==Number || n<16) {
        console.log('hoc sinh khong du dieu kien')
    }
    else {
        console.log('hoc sinh du dieu kien')
    }
}
function checkNumber(n) {
    n == Number
    if (n==100) {
        console.log('số bạn vừa nhập là 100 :V')
    } 
    else if (n < 100) {
        console.log('số bạn vừa nhập là ' + n  + ' và nhỏ hơn 100')
        return n
    }
    else {
        console.log('số bạn vừa nhập là ' + n  + ' và lớn hơn 100')
        return n
   }
}
function findMax(a,b,c) {
    a,b,c == Number
    if (a>b && a>c) {
        return a
    }
    else if (b>a && b>c) {
        return b
    }
    else {
        return c
    }
}
function getRank(n) {
    n == Number
    n>=0 && n<=10 
    console.log('điểm trung bình ' + n)
    if (n>=9) {
        console.log('rank A')
    }
    else if (n>=7 && n<=9) {
        console.log('rank B')
    }
    else if (n>=5 && n<=7) {
        console.log('rank C')
    }
    else {
        console.log('rank F')
    }
    return n
}
function findX(a,b,c) {
    a,b,c == Number
    delta = b*b - 4*a*c
    if (a==0 && b!=0) {
        console.log('phương trình có nghiệm duy nhất')
        return -c/b
    }
    else if(a==b && a==c && a==0) {
        console.log('phương trình vô số nghiệm')
    }
    else if (a==b && a==0 && c!=0) {
        console.log('phương trình vô nghiệm')
    }
    else if(delta<0){
        console.log('phương trình vô nghiệm')
    }
    else if (delta>0) {
        console.log('phương trình có nghiệm')
        console.log((-b - Math.sqrt(delta))/ (2*a)) 
        console.log((-b + Math.sqrt(delta))/ (2*a)) 
    }
    else {
        console.log('phương trình có nghiệm kép')
        console.log (-b/(2*a))
        return -b/(2*a)
    }
}
function getCommission(sales) {
    sales == Number
    console.log('Doanh sô: '+ sales + ' triệu')
    if(sales<=100) {
        console.log('hoa hồng: ' + 0.05*100 + ' triệu')
        return 0.05*100*10**6
    }
    else if(sales<100 && sales >=300) {
        console.log('hoa hồng: ' + 0.1*100 + ' triệu')
        return 0.1*100*10**6
    }
    else {
        console.log('hoa hồng: ' + 0.2*100 + ' triệu')
        return 0.2*100*10**6
    }
}
function getPhoneBill(minutes) {
    minutes==Number
    console.log('số phút đã gọi ' + minutes)
    if(minutes>=200) {
        console.log('cước ' + ((minutes-200)*200 + 150*400 + 50*600  + 25000))
        return (minutes-200)*200 + 150*400 + 50*600  + 25000
    }
    else if (minutes>=50 && minutes<200) {
        console.log('cước ' + ((minutes-50)*400 + 50*600  + 25000))
        return (minutes-50)*400 + 50*600 + 25000     
    }
    else {
        console.log('cước ' + (minutes*600 + 25000))
        return minutes*600 + 25000
    }
}