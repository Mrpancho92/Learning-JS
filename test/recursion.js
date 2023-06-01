// function pow(x,n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

function pow(x,n) { 
   if (n === 1) {
    return x;
   } else {
    // console.log(x);
    // console.log(pow(x, n - 1));
    let z = 2 * pow(x, n - 1)  
    console.log(z);
    return z;
   }
}



// x =pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2




// 2 * pow(2, 2)
// 2 * (2 * pow(2, 2 - 1))
// 2 * (2 * 2)



// console.log(pow(2, 1)); 
// pow(2, 2); //4
// pow(2, 3);
console.log(pow(2, 3)); //8
// pow(2, 4);//16


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Petro',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};


function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;
 for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
        students += course.length;
        
        for (let i = 0; i < course.length; i++) {
            total += course[i].progress;
        }
    } else {
       
        for (let subCourse of Object.values(course)) {
            students += subCourse.length;
           
            for (let i = 0; i < subCourse.length; i++) {
                total += subCourse[i].progress;
        }
      }
    }
 }

    return total / students;
}
// console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);


console.log(typeof 45 != 'number');

// задача на факториал
function factorial (number) {
    let num = 0;
    let num2 = 0;
    if ((typeof number) != 'number'  ||  number % 1 != 0 ) {
        console.log('You tap is not a number');
    } else if (number <= 0 ) {
            console.log(1);
        }
     else {
        num++;
            num = number * (number - num);
            num2 = num * (number - num);
            return num2;
        }
    }
    console.log(factorial(2));