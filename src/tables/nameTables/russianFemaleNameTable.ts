import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class RussianFemaleNameTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("Alinja"))
        entries.push(new TableEntry("Alwinje"))
        entries.push(new TableEntry("Baernja"))
        entries.push(new TableEntry("Bernischa"))
        entries.push(new TableEntry("Danja"))
        entries.push(new TableEntry("Dorlin"))
        entries.push(new TableEntry("Duna"))
        entries.push(new TableEntry("Dunjascha"))
        entries.push(new TableEntry("Eljascha"))
        entries.push(new TableEntry("Elkwine"))
        entries.push(new TableEntry("Elmjascha"))
        entries.push(new TableEntry("Firunja"))
        entries.push(new TableEntry("Gari"))
        entries.push(new TableEntry("Geertja"))
        entries.push(new TableEntry("Grimje"))
        entries.push(new TableEntry("Gritten"))
        entries.push(new TableEntry("Gudwinja"))
        entries.push(new TableEntry("Helvja"))
        entries.push(new TableEntry("Hesinja"))
        entries.push(new TableEntry("Ifirnja"))
        entries.push(new TableEntry("Ilmjescha"))
        entries.push(new TableEntry("Irinja"))
        entries.push(new TableEntry("Isidra"))
        entries.push(new TableEntry("Jadvige"))
        entries.push(new TableEntry("Janne"))
        entries.push(new TableEntry("Jassia"))
        entries.push(new TableEntry("Jedwinja"))
        entries.push(new TableEntry("Jella"))
        entries.push(new TableEntry("Karinja"))
        entries.push(new TableEntry("Kundra"))
        entries.push(new TableEntry("Leudara"))
        entries.push(new TableEntry("Libussa"))
        entries.push(new TableEntry("Luta"))
        entries.push(new TableEntry("Lysminja"))
        entries.push(new TableEntry("Maline"))
        entries.push(new TableEntry("Marissja"))
        entries.push(new TableEntry("Marja"))
        entries.push(new TableEntry("Moschane"))
        entries.push(new TableEntry("Nadjescha"))
        entries.push(new TableEntry("Nadschenka"))
        entries.push(new TableEntry("Nessa"))
        entries.push(new TableEntry("Nuschinja"))
        entries.push(new TableEntry("Olja"))
        entries.push(new TableEntry("Paale"))
        entries.push(new TableEntry("Peraenja"))
        entries.push(new TableEntry("Peranka"))
        entries.push(new TableEntry("Rabescha"))
        entries.push(new TableEntry("Rihinja"))
        entries.push(new TableEntry("Rowena"))
        entries.push(new TableEntry("Rudwischa"))
        entries.push(new TableEntry("Selwine"))
        entries.push(new TableEntry("Sewjescha"))
        entries.push(new TableEntry("Sulja"))
        entries.push(new TableEntry("Tesbinja"))
        entries.push(new TableEntry("Thesia"))
        entries.push(new TableEntry("Thila"))
        entries.push(new TableEntry("Tineke"))
        entries.push(new TableEntry("Tjeika"))
        entries.push(new TableEntry("Travjescha"))
        entries.push(new TableEntry("Turiken"))
        entries.push(new TableEntry("Ulmjescha"))
        entries.push(new TableEntry("Urjelke"))
        entries.push(new TableEntry("Vanjescha"))
        entries.push(new TableEntry("Verisja"))
        entries.push(new TableEntry("Vestissja"))
        entries.push(new TableEntry("Warja"))
        entries.push(new TableEntry("Winja"))
        entries.push(new TableEntry("Wolpjane"))
        entries.push(new TableEntry("Wulfjascha"))
        entries.push(new TableEntry("Xinja"))
        entries.push(new TableEntry("Yadvinja"))
        entries.push(new TableEntry("Yasinde"))
        entries.push(new TableEntry("Zidonje"))

        super(entries, TableTitles.RussianFemaleName);
        this.tableType = TableType.Other;
    }
}