export class TableEntry{
    minRole: number;
    maxRole: number;
    text: string;

    constructor(text = "-", singleRoleValue = 0){
        if(singleRoleValue == 0){
            this.minRole = 1;
            this.maxRole = 6;
        }else{
            this.minRole = singleRoleValue;
            this.maxRole = singleRoleValue;
        }
        this.text = text;
    }

    withRoleInterval(minRole : number, maxRole : number){
        if(minRole > maxRole){
            throw new RangeError("Max should be equal or bigger than min");
        }
        
        this.minRole = minRole;
        this.maxRole = maxRole;

        return this;
    }

    toString(){
        if(this.minRole == this.maxRole){
            return `${this.minRole}`;
        }
        return `${this.minRole}-${this.maxRole}`;
    }
}