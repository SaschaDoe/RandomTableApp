import type {Table} from "./table";

export class TableEntry{
    private minRole: number;
    private maxRole: number;
    text: string;
    textWithCascades: string;
    fullText = "";
    cascadingRoles = [] as (Table|string)[];
    functions: ((entity: any) => any)[];

    constructor(text: string = "-", singleRoleValue = -1){
        this.minRole = singleRoleValue;
        this.maxRole = singleRoleValue;
        this.text = text;
        this.functions = [];
        this.setFullText();
        this.textWithCascades = text;
    }

    withRoleInterval(minRole : number, maxRole : number){
        if(minRole > maxRole){
            throw new RangeError("Max should be equal or bigger than min");
        }
        this.setMinMax(minRole, maxRole);

        return this;
    }

    withFunction(func: ((entity: any) => any)){
        this.functions.push(func);
        return this;
    }

    toString(){
        if(this.minRole == this.maxRole){
            return `${this.minRole}`;
        }
        return `${this.minRole}-${this.maxRole}`;
    }

    withCascadingRole(table: Table) {
        this.cascadingRoles.push(table);
        this.textWithCascades = this.textWithCascades + " ("+table.title+")";
        return this;
    }

    with(input: string) {
        this.cascadingRoles.push(input);
        this.textWithCascades = this.textWithCascades + " " + input;
        return this;
    }

    withSelfCascade(){
        this.cascadingRoles.push("self");
        this.textWithCascades = this.textWithCascades + " (self)";
        return this;
    }

    getMin() {
        return this.minRole;
    }

    getMax() {
        return this.maxRole;
    }

    setMinMax(min: number, max: number) {
        this.minRole = min;
        this.maxRole = max;
        this.setFullText();
    }

    setFullText(){
        this.fullText = `${this.toString()}: ${this.text}`;
    }


}