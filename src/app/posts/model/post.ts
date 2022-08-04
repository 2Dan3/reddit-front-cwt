export class Post {
    _id: number;
    title: string;
    text: string;
    creation_date: Date;
    author_display_name: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.title = obj && obj.title || null;
        this.text = obj && obj.text || null;
        this.creation_date = obj && obj.creation_date || null;
        this.author_display_name = obj && obj.author_display_name || null;
        // this._id = obj && obj._id || null;
    }

}