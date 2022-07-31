export class Community {
    _id: number;
    name: string;
    description: string;
    creation_date: Date;
    is_suspended: boolean;
    suspension_reason: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.creation_date = obj && obj.creation_date || null;
        this.is_suspended = obj && obj.is_suspended || null;
        this.suspension_reason = obj && obj.suspension_reason || null;
        // this._id = obj && obj._id || null;
    }

}