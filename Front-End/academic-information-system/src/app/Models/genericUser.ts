import { UserLoginDto } from "./user-dto";

export class User implements UserLoginDto{
    username: string;
    password: string;
    name: string;
}