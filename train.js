// A task 
console.log("Function letterida 'x' harfi nectaligini hisoblaymiz");


let count = 0;

function countLetter(a, b ) {
    for( let i = 0; i <= a.length; i++) {
        if(a.charAt(i) == b) {
            count++;
        }
    }
    return count;
}

console.log(countLetter("engineer", "e"));
 