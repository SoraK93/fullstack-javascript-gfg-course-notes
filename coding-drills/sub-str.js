const str = "sourabh_kheria";
for (let i=0; i<str.length; i++) {
    for (let j=i; j<str.length; j++) {
        console.log(str.slice(i, j+1));
    }
}