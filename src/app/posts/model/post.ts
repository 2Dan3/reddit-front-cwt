export class Post {
    _id: number;
    title: string;
    text: string;
    creation_date: Date;
    author_display_name: string;
    total_karma: number;

    constructor(obj?: any) {
        this._id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.text = obj && obj.text || null;
        this.creation_date = obj && new Date(obj.creationDate).toLocaleDateString() || null;
        this.author_display_name = obj && obj.author || null;
        this.total_karma = obj && obj.karmaPoints || null;
    }

}