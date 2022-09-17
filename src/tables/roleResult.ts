import type {Table} from "./table";

export class RoleResult{
    text : string;
    role : string;
    fullText = "";
    cascadingRoles : (Table|string)[];
    functions : ((entity: any) => any)[];

    constructor(text = "",
                role = "",
                cascadingRoles = [] as (Table|string)[],
                functions = [] as ((entity: any) => any)[])  {
        this.text = text;
        this.role = role;
        this.cascadingRoles = cascadingRoles;
        this.functions = functions;
        this.setFullText()
    }

    setText(newText: string) {
        this.text = newText;
        this.setFullText();
    }

    private setFullText(){
        this.fullText = `${this.role}: ${this.text}`;
    }
}