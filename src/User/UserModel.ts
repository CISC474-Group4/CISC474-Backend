export class UserModel{
    name='';


    static fromObject(object:any):UserModel{
        const u:UserModel=new UserModel();
        u.name = object.name;
        return u;
    }

    toObject():any{
        return{
            name:this.name
        };
    }
}