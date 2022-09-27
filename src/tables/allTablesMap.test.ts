import {describe, expect, test} from "vitest";
import {AllTablesMap} from "./allTablesMap";
import {TableTitles} from "./tableTitles";
import {GenderTable} from "./charTables/genderTable";
import {GermanFemaleNameTable} from "./nameTables/germanFemaleNameTable";
import {GermanMaleNameTable} from "./nameTables/germanMaleNameTable";
import {SpecialFeaturesTable} from "./charTables/specialFeaturesTable";
import {MotivationTable} from "./charTables/motivationTable";
import {CurseTable} from "./charTables/curseTable";
import {NobilityTable} from "./charTables/nobilityTable";
import {AlignmentTable} from "./charTables/alignmentTable";
import {ProfessionTable} from "./charTables/professionTable";
import {RaceTable} from "./charTables/raceTable";
import {AdvantageTable} from "./charTables/advantageTable";
import {DisadvantageTable} from "./charTables/disadvantageTable";
import {TalentTable} from "./talentTables/talentTable";
import {RarityTable} from "./otherTables/rarityTable";
import {MagicalTalentTable} from "./talentTables/magicalTalentTable";
import {ContinentTable} from "./locationTables/continentTable";
import {StructureTable} from "./dungeonTables/structureTable";
import {DungeonEntriesTable} from "./dungeonTables/dungeonEntriesTable";
import {TreasureTable} from "./artefactTables/treasureTable";
import {FurnishingTable} from "./dungeonTables/furnishingTable";
import {ObstacleTable} from "./dungeonTables/obstacleTable";
import {TrapTable} from "./dungeonTables/trapTable";
import {MonsterEncounterTypeTable} from "./monsterTables/monsterEncounterTypeTable";
import {QualityTable} from "./otherTables/qualityTable";
import {MaterialsTable} from "./artefactTables/materialsTable";
import {ArtefactTable} from "./artefactTables/artefactTable";
import {ProfaneTalentTable} from "./talentTables/profaneTalentTable";
import {SphereTable} from "./locationTables/sphereTable";
import {ProfaneArtefactTable} from "./artefactTables/profaneArtefactTable";
import {ColourTable} from "./otherTables/colourTable";
import {ArtworkTable} from "./artefactTables/artworkTable";
import {LandscapeTable} from "./locationTables/landscapeTable";
import {PositionTable} from "./otherTables/positionTable";
import {HistoricalEventTable} from "./otherTables/historicalEventTable";
import {BuildingTable} from "./locationTables/buildingTable";

describe("AllTablesMap", () => {

    test("should return GenderTable when called for GenderTable", () => {
        let allTablesMap = new AllTablesMap();

        let table = allTablesMap.getTableOf(TableTitles.Gender);

        expect(table).toBeInstanceOf(GenderTable);
    })

    test("should throw Error when called with table title not in all tables map", () => {
        let allTablesMap = new AllTablesMap();

        expect(() => {allTablesMap.getTableOf(TableTitles.Default)})
            .toThrowError("Table title: default title is not in all tables map")
    })

    test.each(
        testInput()
    )
    ("should return specific table type when called for %s", (tt , tableType) => {
        let tableTitle = tt as TableTitles;
        let allTablesMap = new AllTablesMap();

            let table = allTablesMap.getTableOf(tableTitle);

            expect(table).toBeInstanceOf(tableType);
    })
})

function testInput(){
    return [
        [TableTitles.GermanFemaleNames, GermanFemaleNameTable],
        [TableTitles.Gender, GenderTable],
        [TableTitles.GermanMaleName, GermanMaleNameTable],
        [TableTitles.SpecialFeatures, SpecialFeaturesTable],
        [TableTitles.Motivation, MotivationTable],
        [TableTitles.Curse, CurseTable],
        [TableTitles.Nobility, NobilityTable],
        [TableTitles.Alignment, AlignmentTable],
        [TableTitles.Profession, ProfessionTable],
        [TableTitles.Race, RaceTable],
        [TableTitles.Advantages, AdvantageTable],
        [TableTitles.Disadvantages, DisadvantageTable],
        [TableTitles.Talent, TalentTable],
        [TableTitles.Rarity, RarityTable],
        [TableTitles.MagicalTalent, MagicalTalentTable],
        [TableTitles.Continent, ContinentTable],
        [TableTitles.Structure, StructureTable],
        [TableTitles.DungeonEntry, DungeonEntriesTable],
        [TableTitles.Treasure, TreasureTable],
        [TableTitles.Furnishing, FurnishingTable],
        [TableTitles.Obstacle, ObstacleTable],
        [TableTitles.Trap, TrapTable],
        [TableTitles.MonsterEncounterType, MonsterEncounterTypeTable],
        [TableTitles.Quality, QualityTable],
        [TableTitles.Materials, MaterialsTable],
        [TableTitles.Artefact, ArtefactTable],
        [TableTitles.ProfaneTalent, ProfaneTalentTable],
        [TableTitles.Sphere, SphereTable],
        [TableTitles.ProfaneArtefact, ProfaneArtefactTable],
        [TableTitles.Colour, ColourTable],
        [TableTitles.Artwork, ArtworkTable],
        [TableTitles.Landscape, LandscapeTable],
        [TableTitles.Position, PositionTable],
        [TableTitles.HistoricalEvent, HistoricalEventTable],
        [TableTitles.Building, BuildingTable],
    ]
}