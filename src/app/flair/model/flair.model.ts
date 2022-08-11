export class Flair {
    _id: number;
    name: string;
    // community_id: number|string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
    }
}