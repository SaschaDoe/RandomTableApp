import {describe, expect, test} from "vitest";
import {addArtefactToStore, artefactStore} from "./artefactStore";

describe("ArtefactStore", () => {
    test("should add artefact when called addArtefactToStore", () => {
        addArtefactToStore()
        let artefacts = [];
        artefactStore.subscribe(artefactStore => artefacts = artefactStore);

        expect(artefacts.length).toBe(1);
    })

})