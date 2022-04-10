import { UserLoginDto } from "./user-dto";

export class User extends UserLoginDto{
    username: string;
    password: string;
    name: string;
    type: string;
}