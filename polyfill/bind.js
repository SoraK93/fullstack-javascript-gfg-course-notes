// Polyfill for bind
const obj = {
    name: "Sourabh",
    city: "raniganj",
};

function displayUserInfo(state){
    console.log(`Hi I am ${this.name} from ${this.city}, ${state}.`);
}

Function.prototype.myBind = function(context, ...args){
    context.wrapperFunc = this;
    return function (...rest) {
        context.wrapperFunc(...args, ...rest);
        delete context.wrapperFunc;
    }
}

const bindFunc = displayUserInfo.myBind(obj, "West Bengal");
bindFunc();

