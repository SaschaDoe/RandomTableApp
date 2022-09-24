export interface Equatable<T>{
    isEqualTo(other: T): boolean;
}

export function arrayEquals(firstArray: string[], secondArray: string[]) {
    return Array.isArray(firstArray) &&
        Array.isArray(secondArray) &&
        firstArray.length === secondArray.length &&
        firstArray.every((val, index) => val === secondArray[index]);
}