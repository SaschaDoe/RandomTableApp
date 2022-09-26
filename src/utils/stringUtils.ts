export function withoutLastSpace(input: string){
    let inputWithoutLastSpace = input;
    if(inputWithoutLastSpace[inputWithoutLastSpace.length-1] === " "){
        inputWithoutLastSpace = inputWithoutLastSpace.slice(0,inputWithoutLastSpace.length-1);
    }
    return inputWithoutLastSpace;
}