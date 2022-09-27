import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {SignFactory} from "./signFactory";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import type {Sign} from "./sign";

describe("SignFactory", () => {
    let sign: Sign;
    test("should set default sign to what is given in random tables", () => {
        let tableOutput = [
            ["red"],
        ];
        let tableTitle = [
            TableTitles.Colour,
        ];
        let signFactory = new SignFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1,1]))
        sign = signFactory
            .create();

        expect(sign.colours.length).toBe(1);
        expect(sign.colours[0]).toBe("red");
    })
})