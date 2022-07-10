'use strict'


// Немного преобразовал функцию для хорошего показа теста
export function countDown(num) {
    let result = []
    if(!Number(num)){
        return 'Это не число'
    } else if(num < 0) {
        return 'Отрицательное число';
    } else if(Number(num) && num > 0){
        for(let i = num; i > 0; i--){
            result.push(i)
        }
        return result;
    }
    
}


