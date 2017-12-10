/**
 * major part of software engineering is building components that not only have well-defined
 * and consistent APIs, but are also reusable.
 * Components that are capable of working on the data of today as well as
 * the data of tomorrow will give you the most flexible capabilities for building up large software systems.
 */
var Parent = /** @class */ (function () {
    function Parent() {
        this.children = [];
    }
    return Parent;
}());
var personData = { name: "Sachin" };
var robotData = { name: "Siri", year: 2010 };
var parents = new Parent();
var robots = new Parent();
parents.children.push(personData);
robots.children.push(robotData);
console.log(parents.children);
console.log(robots.children);
