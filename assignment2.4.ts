/**
 * major part of software engineering is building components that not only have well-defined 
 * and consistent APIs, but are also reusable. 
 * Components that are capable of working on the data of today as well as 
 * the data of tomorrow will give you the most flexible capabilities for building up large software systems.
 */


/* ====================================== */
//You can also have generic classes, similarly to C#.  
//For example, you can create Parent generic class that contains collection of children of generic types.
interface IPerson {
    name: string;
}

interface IRobot {
    name : string;
    year : number;
}

class Parent<T> {
    children: T[];
    constructor() {
        this.children = [];
    }
}

let personData : IPerson = { name: "Sachin"};
let robotData : IRobot = { name : "Siri", year : 2010};

let parents: Parent<IPerson> = new Parent<IPerson>();
let robots: Parent<IRobot> = new Parent<IRobot>();
parents.children.push(personData);
robots.children.push(robotData);
console.log(parents.children);
console.log(robots.children);