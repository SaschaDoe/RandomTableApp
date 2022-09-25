import {describe, expect, test} from "vitest";
import {ArtefactBuilder} from "./artefactBuilder";

describe("Artefacts", () => {
    test("should set artefacts attributes according to builder", () => {
        let artefactBuilder = new ArtefactBuilder()
            .withRarity("common")

        let artefact = artefactBuilder.build();

        expect(artefact.rarity).toBe("common");
    })


    test("should true when isEqualsTo is called and both are the same", () => {
        let artefact1 = new ArtefactBuilder().withRarity("common").build();
        let artefact2 = new ArtefactBuilder().withRarity("common").build();

        let isEqual = artefact1.isEqualTo(artefact2);

        expect(isEqual).toBe(true);
    })

    test("should false when isEqualsTo is called and rarity is not the same", () => {
        let artefact1 = new ArtefactBuilder().withRarity("uncommon").build();
        let artefact2 = new ArtefactBuilder().withRarity("common").build();

        let isEqual = artefact1.isEqualTo(artefact2);

        expect(isEqual).toBe(false);
    })

})