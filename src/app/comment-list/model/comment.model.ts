export class Comment {
    _id: number;
    author: string;
    text: string;
    timestamp: Date;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.timestamp = obj && obj.timestamp || null;
    
    }

}