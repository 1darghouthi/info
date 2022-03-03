export class UserForm{
    name!: string;
    email!:string;
    telephon?:number;
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
}