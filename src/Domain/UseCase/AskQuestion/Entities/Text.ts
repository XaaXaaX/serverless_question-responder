import { IText } from "../../../Models/IText";

class Text implements IText {
    constructor(
        private readonly text: string
    ) {}

    GetContent(): string { return this.text; }
}

export { Text };
