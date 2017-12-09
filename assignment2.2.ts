class Hello {

    private value : number;
    private message:String;

    constructor(s:number,m:String){

        this.value = s;
        this.message = m;
    }

    disp():string{

return `The values passed from constructor to function in the class
${this.value} 
${this.message}`
}
}

let hello = new Hello(5,'hi');
console.log(hello.disp());
