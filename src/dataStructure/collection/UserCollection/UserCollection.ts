import User from "../../model/User";
import Collection from "../collection";

export default class UserCollection extends Collection {
    constructor() {
        super();



        this.model = User
    }

}
