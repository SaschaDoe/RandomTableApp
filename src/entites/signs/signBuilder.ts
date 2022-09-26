import {Sign} from "./sign";

export class SignBuilder{
    signName: string | undefined;
    signColours: string[] = [];

    build(){
        return new Sign(this);
    }

    withName(name: string) {
        this.signName = name;
        return this;
    }

    withColours(colours: string[]){
        this.signColours = colours;
        return this;
    }
}