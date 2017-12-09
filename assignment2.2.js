var Hello = /** @class */ (function () {
    function Hello(s, m) {
        this.value = s;
        this.message = m;
    }
    Hello.prototype.disp = function () {
        return "The values passed from constructor to function in the class\n" + this.value + " \n" + this.message;
    };
    return Hello;
}());
var hello = new Hello(5, 'hi');
console.log(hello.disp());
