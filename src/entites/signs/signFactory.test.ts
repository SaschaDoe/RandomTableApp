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
            ["broken"],
            ["picture"],
            ["battle"],
            ["mountain"],
            ["top","top","top","top","top","top"],
            ["house"],
        ];
        let tableTitle = [
            TableTitles.Colour,
            TableTitles.Quality,
            TableTitles.Artwork,
            TableTitles.HistoricalEvent,
            TableTitles.Landscape,
            TableTitles.Position,
            TableTitles.Building,
        ];
        let signFactory = new SignFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))
        sign = signFactory
            .create();

        expect(sign.quality).toBe("broken");
        expect(sign.type).toBe("picture");
        expect(sign.landscape).toBe("mountain");

        expect(sign.event.length).toBe(1);
        expect(sign.event[0]).toBe("battle");

        expect(sign.colours.length).toBe(1);
        expect(sign.colours[0]).toBe("red");
    })
})