export class Rule {
    _id: number|string;
    text: string;
    // community_id: number|string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.text = obj && obj.text || null;
        // this.community_id = obj && obj.community_id || null;
    }
}