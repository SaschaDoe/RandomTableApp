import {beforeEach, describe, expect, test} from "vitest";
import type {Sign} from "./sign";
import {SignBuilder} from "./signBuilder";

describe("Sign", () => {
    let sign: Sign;

    beforeEach(() => {
        let signBuilder = new SignBuilder()
            .withName("Madonna")
            .withColours(["red"])

        sign = signBuilder.build();
    })

    test("should set sign attributes according to builder", () => {
        expect(sign.name).toBe("Madonna");

        expect(sign.colours.length).toBe(1);
        expect(sign.colours[0]).toBe("red");
    })
})