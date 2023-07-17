let input = prompt('enter your text:')
function reverString(str){
    return str.split("").reverse().join("");
}
console.log(reverString(input))