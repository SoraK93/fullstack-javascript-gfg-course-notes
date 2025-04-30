/**
 * REST parameter --> ...rest/...args
 */

function calculateSum(a, b, ...rest) {
    console.log(rest);
}
calculateSum(4,5,6,7,8,1,2,3);

