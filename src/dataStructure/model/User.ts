import {UserInterface} from "../interface/userInterface";

export default class User {
    name: string;
    firstname: string;
    birth: Date;

    constructor(data:UserInterface) {

        this.name       = data.name
        this.firstname       = data.firstname
        this.birth      = data.birth

    }
    getFullName() {
        return this.name+" "+this.firstname
    }
}

