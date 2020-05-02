export class UserModel{
    id=0;
    name='';
    restaurants:string[] = [];
    password = '';


    static fromObject(object:any):UserModel{
        const u:UserModel=new UserModel();

        u.id = object.id;
        u.name = object.name;
        u.restaurants = object.restaurants;
        u.password = object.password;
        return u;
    }

    toObject():any{
        return{
            name:this.name,
            id:this.id,
            restaurants:this.restaurants
        };
    }
}