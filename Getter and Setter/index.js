class Person{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 0)
        {
            this._name = newName;
        }
        else{
            console.error(`Enter the Valid Name`)
        }
    }

    set age(newAge){
        if(typeof newAge === "number")
        {
            this._age = newAge;
        }
        else{
            console.error(`Enter the Age`)
        }
    }

    set job(newJob){
        if(typeof newJob === "string" && newJob.length > 0)
        {
            this._job = newJob;
        }
        else{
            console.error(`Enter the Valid Job Name`)
        }
    }
    
    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get job(){
        return this._job;
    }
}

let person1 = new Person("Jegadesh","two","Developer")

console.log(person1.name)
console.log(person1.age)
console.log(person1.job)