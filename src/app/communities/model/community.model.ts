export class Community {
    _id: number;
    name: string;
    description: string;
    creation_date: Date;
    is_suspended: boolean;
    suspension_reason: string;

    constructor(obj?: any) {
        this._id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.creation_date = obj && new Date(obj.creationDate).toLocaleDateString() || null;
        this.is_suspended = obj && obj.isSuspended || null;
        this.suspension_reason = obj && obj.suspensionReason || null;
        // this.creation_date.toLocaleDateString();
    }

}