export class Comment {
    _id: number;
    author: string;
    text: string;
    timestamp: Date;
    post_id: number|string;
    karma_points: number;

    constructor(obj?: any) {
        this._id = obj && obj.id || null;
        this.author = obj && obj.authorDisplayName || null;
        this.text = obj && obj.text || null;
        this.timestamp = obj && new Date(obj.timestamp).toLocaleDateString() || null;
        this.post_id = obj && obj.postId || null;
        this.karma_points = obj && obj.karmaPoints || null;
    }

}