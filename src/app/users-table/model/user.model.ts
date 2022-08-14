export class User {
    _id: number;
    username: string;
    password: string;
    email: string;
    avatar: string;
    registration_date: Date;
    description: string;
    display_name: string;
    role: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.username = obj && obj.username || null;
        this.password = obj && obj.password || null;
        this.email = obj && obj.email || null;
        this.avatar = obj && obj.avatar || null;
        this.registration_date = obj && obj.registration_date || null;
        this.description = obj && obj.description || null;
        this.display_name = obj && obj.display_name || null;
        this.role = obj && obj.role || null;
    }
}