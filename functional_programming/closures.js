/**
 * A closure is the combination of a function bundled together with references to its lexical environment.
 * 
 * In other words, A closure is a function tat remembers its outer variables and can access them.
 * 
 * 
 */

let c;
function x() {
    let a = 5;
    console.log(c);
    function y() {
        let b = 6;
        console.log(a);
        console.log(c);
        function z() {
            c = 7;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        z();
    }
    y();
}
console.log(c);
x();