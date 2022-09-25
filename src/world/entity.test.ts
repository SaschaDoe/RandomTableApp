import {describe, expect, test} from "vitest";
import {Entity} from "./entity";

describe("Entity", () => {
    test("should return 1 Kassandra when created with name Kassandra", () => {
        let entity = new Entity("Kassandra");

        expect(entity.getUniqueName()).toBe("1 Kassandra");
    })

})