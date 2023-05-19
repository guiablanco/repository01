import { ROLES } from "./roles.enum";
import { STATE } from "./state.enum";

export class User {
    username = '';
    email = '';
    password = '';
    role = ROLES.USER;
    state = STATE.UNLOGGED;

    constructor(username, email, password, role, state){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.state = state;
    }
}