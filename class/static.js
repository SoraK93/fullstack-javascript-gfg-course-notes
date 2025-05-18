class Children{
    static id=1;

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.id = Children.id++;
    }
    static sortByAge(a, b){
        return a.age - b.age;
    }
}

const child1 = new Children("Sourabh", 32);
const child2 = new Children("Krish", 20);
const child3 = new Children("Priya", 22);

arr = [child1, child2, child3];
console.log(arr.sort((a, b) => a.age - b.age));
console.log(arr.sort(Children.sortByAge));