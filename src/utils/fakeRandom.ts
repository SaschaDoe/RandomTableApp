import {Random} from "./randomUtils";

export class FakeRandom extends Random{
    private readonly results: number[];
    private count: number;

    constructor(results: number[]) {
        super();
        this.results = results;
        this.count = 0;
    }

    intFromInterval(minIncluded: number, maxIncluded: number): number {
        let result = this.results[this.count];
        this.count++;
        return result;
    }
}