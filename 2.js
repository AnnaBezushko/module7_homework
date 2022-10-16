// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function isPropInObject (key, obj) {
    return (key in obj)
  }
  
  
// код для проверки работы:
//   const example = {
//       a: 1,
//       hello: 2,
//       '': 3,
//       123: 4,
//       var: 5,
//   };
  
//   console.log (isPropInObject ("123", example))