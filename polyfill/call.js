// Polyfill for call & apply
const obj = {
    name: "Sourabh",
    city: "Mumbai",
};

function displayUserInfo(state){
    console.log(`Hi, I am ${this.name} from ${this.city}, ${state}.`);
};

Function.prototype.myCall = function(context, ...rest){
    context.showMessage = this;
    context.showMessage(...rest);
    delete context.showMessage;
};

displayUserInfo.myCall(obj, "Maharastra");
console.log(obj);
