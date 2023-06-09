
const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
