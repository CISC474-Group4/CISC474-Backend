import bcrypt from "bcrypt";

export class UserModel {

    set password(val: string) {
        this._password = UserModel.encryptString(val);
    }

    get password(): string {
        return this._password;
    }

    public static fromObject(object: any): UserModel {
        const u: UserModel = new UserModel(object.email, "");
        u.id = object.id;
        u.name = object.name;
        u.restaurants = object.restaurants;
        u._password = object.password;
        return u;
    }

    public static encryptString(inval: string): string {
        try {
            let salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(inval, salt);
        } catch (err) {
            return "*";
        }
    }
    public id = 0;
    public name = "";
    public email = "";
    public restaurants: string[] = [];
    private _password = "";
    public constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public toObject(): any {
        return{
            name: this.name,
            email: this.email,
            id: this.id,
            restaurants: this.restaurants
        };
    }

    public validatePassword(password: string): boolean {
        if (this.password === "*") {
            return false;
        }
        return bcrypt.compareSync(password, this.password);
    }
}
