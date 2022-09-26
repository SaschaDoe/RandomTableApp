import {describe, expect, test} from "vitest";
import {Entity} from "./entity";

describe("Entity", () => {
    test("should return 1 Kassandra when created with name Kassandra", () => {
        let entity = new Entity("Kassandra");

        expect(entity.getUniqueName()).toBe("1 Kassandra");
    })

    test("should set id to 2 when given 2", () => {
        let entity = new Entity("Kassandra", 2);

        expect(entity.id).toBe(2);
    })

})