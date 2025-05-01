let a = 3;
function x() {
  console.log({ a });
  let b = 5;
  function y() {
    console.log({ a });
    console.log({ b });
    let c = 7;
    function z() {
        console.log({ a });
        console.log({ b });
        console.log({ c });
    }
    z();
  }
  y();
}
x();
