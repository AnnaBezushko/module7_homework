// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
//  все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function showOwnProps (obj) {
    for(let key in obj){
        if (obj.hasOwnProperty (key)){
            console.log (key, obj[key])
        }
    }
};
    
// код для проверки работы:

// function showAllProps (obj) {
//     for(let key in obj){
//             console.log (key, obj[key])
//     }
// };
  
// const exampleProto = {
//     smth: 6
//    }
// const example = Object.create(exampleProto);
//     example.a = 1;
//     example.hello = 2;
//     example.var = 5;

// showOwnProps (example);
// showAllProps (example)