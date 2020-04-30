export class RestaurantModel{
    name='';


    static fromObject(object:any):RestaurantModel{
        const r:RestaurantModel=new RestaurantModel();
        r.name = object.name;
        return r;
    }

    toObject():any{
        return{
            name:this.name
        };
    }
}