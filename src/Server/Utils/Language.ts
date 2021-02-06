import { Service } from "typedi";
import { Language } from "../../Common/Interfaces/Language.interface";
import { FOLDERS } from "../Constants";
import DirHelper from "./Files/DirHelper";
import FileJson from "./Files/FileJson";

@Service()
export default class LanguageHelper {
  private _language: {
    [key: string]: Language,
  }

  public constructor() {
    this._language = { };
    this._languageLoader();
  }

  private _languageLoader = async () => {
    const files = await DirHelper.GetFilenames(FOLDERS.LOCALES);
    for(let i = 0; i < files.length; i++) {
      const langName = files[i].split(".")[0];
      // eslint-disable-next-line
      const lang = require(`../../../locales/${langName}.json`);
      this._language[langName] = lang;
    }
  }

  public getLanguage = (language: string): Language => {
    return this._language[language] || this._language["en"];
  }

  public getLangKeys = (): string[] => {
    return Object.keys(this._language);
  }
}
