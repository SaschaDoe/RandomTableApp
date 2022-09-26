import {describe, expect, test} from "vitest";
import {ContinentBuilder} from "./continentBuilder";

describe("Continent",() => {
    test("should throw error when no name is set", () => {
         expect(() => {new ContinentBuilder().build()}).toThrowError("Continents name must be set");
    })
})