import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import type {Character} from "../../world/character/character";
import {AnimalTable} from "./animalTable";
import type {RoleResult} from "../roleResult";

export class ProfessionTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("priest"))
        entries.push(new TableEntry("paladin"))
        entries.push(new TableEntry("shaman"))
        entries.push(new TableEntry("cultist"))
        entries.push(new TableEntry("clergyman"))
        entries.push(new TableEntry("enlightened"))
        entries.push(new TableEntry("enlightened"))
        entries.push(new TableEntry("gild mage"))
        entries.push(new TableEntry("white mage"))
        entries.push(new TableEntry("black mage"))
        entries.push(new TableEntry("alchimist"))
        entries.push(new TableEntry("witch"))
        entries.push(new TableEntry("druid"))
        entries.push(new TableEntry("militia"))
        entries.push(new TableEntry("mercenary"))
        entries.push(new TableEntry("mercenary"))
        entries.push(new TableEntry("officer"))
        entries.push(new TableEntry("general"))
        entries.push(new TableEntry("soldier"))
        entries.push(new TableEntry("bowman"))
        entries.push(new TableEntry("hunter"))
        entries.push(new TableEntry("conscript"))
        entries.push(new TableEntry("gladiator"))
        entries.push(new TableEntry("thief"))
        entries.push(new TableEntry("day laborer"))
        entries.push(new TableEntry("beggar"))
        entries.push(new TableEntry("patrician"))
        entries.push(new TableEntry("dealer"))
        entries.push(new TableEntry("fence"))
        entries.push(new TableEntry("burglar"))
        entries.push(new TableEntry("pickpocket"))
        entries.push(new TableEntry("juggler"))
        entries.push(new TableEntry("killer"))
        entries.push(new TableEntry("fraudster"))
        entries.push(new TableEntry("whore"))
        entries.push(new TableEntry("servant"))
        entries.push(new TableEntry("lawyer"))
        entries.push(new TableEntry("doctor"))
        entries.push(new TableEntry("healer"))
        entries.push(new TableEntry("animal healer"))
        entries.push(new TableEntry("writer"))
        entries.push(new TableEntry("scholar"))
        entries.push(new TableEntry("cartographer"))
        entries.push(new TableEntry("robber"))
        entries.push(new TableEntry("grave robber"))
        entries.push(new TableEntry("scientist"))
        entries.push(new TableEntry("architect"))
        entries.push(new TableEntry("barbarian"))
        entries.push(new TableEntry("prophet"))
        entries.push(new TableEntry("bodyguard"))
        entries.push(new TableEntry("musician"))
        entries.push(new TableEntry("painter"))

        //Crafts
        entries.push(new TableEntry("construction worker"))
        entries.push(new TableEntry("fisherman"))
        entries.push(new TableEntry("perl diver"))
        entries.push(new TableEntry("ship builder"))
        entries.push(new TableEntry("weaver"))
        entries.push(new TableEntry("stonemason"))
        entries.push(new TableEntry("cook"))
        entries.push(new TableEntry("rope maker"))
        entries.push(new TableEntry("amorer"))
        entries.push(new TableEntry("weapon smith"))
        entries.push(new TableEntry("smith"))
        entries.push(new TableEntry("bow maker"))
        entries.push(new TableEntry("woodcutter"))
        entries.push(new TableEntry("casino worker"))
        entries.push(new TableEntry("vintner"))
        entries.push(new TableEntry("locksmith"))
        entries.push(new TableEntry("astronomer"))
        entries.push(new TableEntry("liberian"))
        entries.push(new TableEntry("dyer"))
        entries.push(new TableEntry("cooper"))
        entries.push(new TableEntry("fur processor"))
        entries.push(new TableEntry("bard"))
        entries.push(new TableEntry("hairdresser"))
        entries.push(new TableEntry("baker"))
        entries.push(new TableEntry("brewer"))
        entries.push(new TableEntry("butcher"))
        entries.push(new TableEntry("metal caster"))
        entries.push(new TableEntry("mechanic"))
        entries.push(new TableEntry("goldsmith"))
        entries.push(new TableEntry("clock maker"))
        entries.push(new TableEntry("shoemaker"))
        entries.push(new TableEntry("tailor"))
        entries.push(new TableEntry("hatter"))
        entries.push(new TableEntry("innkeeper"))
        entries.push(new TableEntry("launderer"))
        entries.push(new TableEntry("miller"))
        entries.push(new TableEntry("breeder of ").withCascadingRole(new AnimalTable()))
        entries.push(new TableEntry("slave trader"))
        entries.push(new TableEntry("capitan"))
        entries.push(new TableEntry("sailor"))
        entries.push(new TableEntry("carpenter"))
        entries.push(new TableEntry("bureaucrat"))
        entries.push(new TableEntry("sculpturer"))
        entries.push(new TableEntry("messenger"))
        entries.push(new TableEntry("guide"))
        entries.push(new TableEntry("advisor"))
        entries.push(new TableEntry("gunsmith"))
        entries.push(new TableEntry("blaster"))
        entries.push(new TableEntry("mine worker"))
        entries.push(new TableEntry("good for nothing"))
        super(entries, TableTitles.Profession);
        this.functions.push(changeProfession)
    }
}

export function changeProfession(char: Character, roleResult: RoleResult){
    char.profession = roleResult.text;
    return char;
}