import type {Artefact} from "../world/artefacts/artefact";

export interface Equatable<T>{
    isEqualTo(other: T): boolean;
}

export function stringArrayEquals(firstArray: string[], secondArray: string[]) {
    return Array.isArray(firstArray) &&
        Array.isArray(secondArray) &&
        firstArray.length === secondArray.length &&
        firstArray.every((val, index) => val === secondArray[index]);
}

export function artefactArrayEquals(firstArray: Artefact[], secondArray: Artefact[]) {
    return Array.isArray(firstArray) &&
        Array.isArray(secondArray) &&
        firstArray.length === secondArray.length &&
        firstArray.every((val, index) => val === secondArray[index]);
}