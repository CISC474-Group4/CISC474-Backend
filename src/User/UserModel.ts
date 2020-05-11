import bcrypt from 'bcrypt';


export class UserModel{
    id=0;
    name='';
    email='';
    restaurants:string[] = [];
    private _password = '';



    set password(val:string){
        this._password=UserModel.encryptString(val);
    }

    get password():string{
        return this._password;
    }
    public constructor(email:string, password:string){
        this.email=email;
        this.password=password;1
    }


    static fromObject(object:any):UserModel{
        const u:UserModel=new UserModel(object.email, '');
        u.id = object.id;
        u.name = object.name;
        u.restaurants = object.restaurants;
        u._password = object.password;
        return u;
    }

    toObject():any{
        return{
            name:this.name,
            email:this.email,
            id:this.id,
            restaurants:this.restaurants
        };
    }

    validatePassword(password:string):boolean{
        if(this.password==='*'){
            return false;
        }
        return bcrypt.compareSync(password,this.password);
    }

    static encryptString(inval:string):string{
        try{
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(inval, salt);
        } catch(err){
            return '*';
        }
    }
}