import {RaceTable} from "./charTables/raceTable";
import {GenderTable} from "./charTables/genderTable";
import {AnimalTable} from "./charTables/animalTable";
import {FantasyCreatureTable} from "./charTables/fantasyCreatureTable";
import {NobilityTable} from "./charTables/nobilityTable";
import {AlignmentTable} from "./charTables/alignmentTable";
import {AttitudeTable} from "./charTables/attitudeTable";
import {AdvantageTable} from "./charTables/advantageTable";
import {DisadvantageTable} from "./charTables/disadvantageTable";
import {CurseTable} from "./charTables/curseTable";
import {ProfessionTable} from "./charTables/professionTable";
import {MotivationTable} from "./charTables/motivationTable";
import {GermanMaleNameTable} from "./charTables/germanMaleNameTable";
import {GermanFemaleNameTable} from "./charTables/germanFemaleNameTable";
import {RelationshipTypeTable} from "./charTables/relationshipTypeTable";
import {ContinentTable} from "./locationTables/continentTable";
import {SphereTable} from "./locationTables/sphereTable";
import {WeaponTable} from "./artefactTables/weaponTable";
import {ArmorTable} from "./artefactTables/armorTable";
import {JewelryTable} from "./artefactTables/jewelryTable";
import {GemstoneTable} from "./artefactTables/gemstoneTable";
import {MaterialsTable} from "./artefactTables/materialsTable";
import {AttributeTable} from "./charTables/attributeTable";
import {SenseTable} from "./charTables/senseTable";
import {SizeTable} from "./otherTables/sizeTable";
import {LocationTable} from "./otherTables/locationTable";
import {WeatherTable} from "./otherTables/weatherTable";
import {VocalTable} from "./otherTables/vocalTable";
import {RarityTable} from "./otherTables/rarityTable";
import {QualityTable} from "./otherTables/qualityTable";
import {BodyPartsTable} from "./otherTables/bodyPartsTable";
import {ElementTable} from "./otherTables/elementTable";

export let charTables = [
    new RaceTable(),
    new GenderTable(),
    new AnimalTable(),
    new FantasyCreatureTable(),
    new NobilityTable(),
    new AlignmentTable(),
    new AttitudeTable(),
    new AdvantageTable(),
    new DisadvantageTable(),
    new CurseTable(),
    new ProfessionTable(),
    new MotivationTable(),
    new GermanMaleNameTable(),
    new GermanFemaleNameTable(),
    new RelationshipTypeTable(),
];
export let locationTables = [
    new ContinentTable(),
    new SphereTable(),
]
export let artefactsTables = [
    new WeaponTable(),
    new ArmorTable(),
    new JewelryTable(),
    new GemstoneTable(),
    new MaterialsTable(),
]
export let otherTables = [
    new AttributeTable(),
    new SenseTable(),
    new SizeTable(),
    new LocationTable(),
    new WeatherTable(),
    new VocalTable(),
    new RarityTable(),
    new QualityTable(),
    new BodyPartsTable(),
    new ElementTable(),
]

export let allTables = charTables.concat(locationTables).concat(artefactsTables).concat(otherTables);