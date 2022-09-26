import {describe, expect, test} from "vitest";
import {ArtefactBuilder} from "./artefactBuilder";
import type {Artefact} from "./artefact";

describe("Artefacts", () => {
    let artefact: Artefact;
    test("should set artefacts attributes according to builder", () => {
        let artefactBuilder = new ArtefactBuilder()
            .withRarity("common")
            .withMagicTalents(["fireball"])
            .withQuality("broken")
            .withName("name")
            .withMaterials(["wood"])
            .withType("sword")

        artefact = artefactBuilder.build();

        expect(artefact.rarity).toBe("common");
        expect(artefact.quality).toBe("broken");
        expect(artefact.name).toBe("name");
        expect(artefact.type).toBe("sword");

        expect(artefact.magicTalents.length).toBe(1);
        expect(artefact.materials.length).toBe(1);
        expect(artefact.materials[0]).toBe("wood");
    })

    test("should get string out of artefact", () => {
        let string = artefact.toString();

        expect(string).toBe("1 name a common broken sword out of wood with the power of fireball.");
    })

})