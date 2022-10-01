import type {Table} from "../table";
import {SouthAmericanFemaleNameTable} from "../nameTables/southAmericanFemaleNameTable";
import {SouthAmericanMaleNameTable} from "../nameTables/southAmericanMaleNameTable";
import {SouthAmericanLastNameTable} from "../nameTables/southAmericanLastNameTable";
import {GermanFemaleNameTable} from "../nameTables/germanFemaleNameTable";
import {GermanMaleNameTable} from "../nameTables/germanMaleNameTable";
import {RussianFemaleNameTable} from "../nameTables/russianFemaleNameTable";
import {RussianMaleNameTable} from "../nameTables/russianMaleNameTable";
import {RussianLastNameTable} from "../nameTables/russianLastNameTable";
import {GreekFemaleNameTable} from "../nameTables/greekFemaleNameTable";
import {GreekMaleNameTable} from "../nameTables/greekMaleNameTable";
import {GreekPlaceName} from "../nameTables/greekPlaceName";
import {AfricanNameTable} from "../nameTables/africanNameTable";
import {BarbaricFemaleNameTable} from "../nameTables/barbaricFemaleNameTable";
import {BarbaricMaleNameTable} from "../nameTables/barbaricMaleNameTable";
import {BarbaricLastNameTable} from "../nameTables/barbaricLastNameTable";
import {FrenchFemaleNameTable} from "../nameTables/frenchFemaleNameTable";
import {FrenchMaleNameTable} from "../nameTables/frenchMaleNameTable";
import {FrenchLastNameTable} from "../nameTables/frenchLastNameTable";
import {IndianFemaleNameTable} from "../nameTables/indianFemaleNameTable";
import {IndianMaleNameTable} from "../nameTables/indianMaleNameTable";

export let cultureAndNameDictionary: {[culture: string]: [Table, Table, Table]} = {};

cultureAndNameDictionary.southAmerican = [
    new SouthAmericanFemaleNameTable(),
    new SouthAmericanMaleNameTable(),
    new SouthAmericanLastNameTable()]

cultureAndNameDictionary.german = [
    new GermanFemaleNameTable(),
    new GermanMaleNameTable(),
    new GermanMaleNameTable()]

cultureAndNameDictionary.russian = [
    new RussianFemaleNameTable(),
    new RussianMaleNameTable(),
    new RussianLastNameTable()]

cultureAndNameDictionary.greek = [
    new GreekFemaleNameTable(),
    new GreekMaleNameTable(),
    new GreekPlaceName()]

cultureAndNameDictionary.african = [
    new AfricanNameTable(),
    new AfricanNameTable(),
    new AfricanNameTable()]

cultureAndNameDictionary.barbaric = [
    new BarbaricFemaleNameTable(),
    new BarbaricMaleNameTable(),
    new BarbaricLastNameTable()]

cultureAndNameDictionary.french = [
    new FrenchFemaleNameTable(),
    new FrenchMaleNameTable(),
    new FrenchLastNameTable()]

cultureAndNameDictionary.indian = [
    new IndianFemaleNameTable(),
    new IndianMaleNameTable(),
    new IndianMaleNameTable()]

