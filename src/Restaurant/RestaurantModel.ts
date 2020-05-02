export class RestaurantModel{
    name='';
    tags:string[] = [];
    events: any[] = [];



    static fromObject(object:any):RestaurantModel{
        const r:RestaurantModel=new RestaurantModel();
        r.name = object.name;
        r.tags = object.tags;
        r.events = object.events;
        return r;
    }

    toObject():any{
        return{
            name:this.name
        };
    }
}