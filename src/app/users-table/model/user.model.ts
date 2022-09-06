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
        this._id = obj && obj.id || null;
        this.username = obj && obj.username || null;
        this.password = obj && obj.password || null;
        this.email = obj && obj.email || null;
        this.avatar = obj && obj.avatar || null;
        this.registration_date = obj && new Date(obj.registrationDate).toLocaleDateString() || null;
        this.description = obj && obj.description || null;
        this.display_name = obj && obj.displayName || null;
        this.role = obj && obj.role || null;
    }
}