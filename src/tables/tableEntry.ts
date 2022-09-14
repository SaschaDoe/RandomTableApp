import type {Table} from "./table";

export class TableEntry{
    minRole: number;
    maxRole: number;
    text: string;
    cascadingRoles = [] as Table[];
    functions: ((entity: any) => any)[];

    constructor(text: string = "-", singleRoleValue = -1){
        this.minRole = singleRoleValue;
        this.maxRole = singleRoleValue;
        this.text = text;
        this.functions = [];
    }

    withRoleInterval(minRole : number, maxRole : number){
        if(minRole > maxRole){
            throw new RangeError("Max should be equal or bigger than min");
        }
        
        this.minRole = minRole;
        this.maxRole = maxRole;

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
        this.cascadingRoles.push(table)
        return this;
    }
}