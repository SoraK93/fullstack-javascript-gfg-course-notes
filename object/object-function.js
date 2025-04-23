function bye() {
    return `Goodbye ${this.objName}, See you later.`;
};

const obj = {
    objName: "Sourabh Kheria",
    greetMessage: function() {
        console.log(`Hello ${this.objName}, Welcome to your website.`);
    },
    workInProgress() {
        console.log("Work in progress");
    },
    get exitMessage() {
        return bye.call(this);
    },
};

obj.greetMessage();
console.log(obj.exitMessage);


const obj1 = {
    objName: "Shambhu Kheria",
};

obj1.greetMessage = obj.greetMessage;
Object.defineProperty(
    obj1, "exitMessage", {
        get: function() {
            return bye.call(this);
        }
    }
)
obj1.greetMessage();
console.log(obj1.exitMessage);