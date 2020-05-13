export class RestaurantModel{
    name='';
    tags:string[] = [];
    description = '';
    address = '';
    restImg = '';
    events: any[] = [];



    static fromObject(object:any):RestaurantModel{
        const r:RestaurantModel=new RestaurantModel();
        r.name = object.name;
        r.tags = object.tags;
        r.events = object.events;
        r.description = object.description;
        r.address = object.address;
        r.restImg = object.restImg;
        return r;
    }

    toObject():any{
        return{
            name:this.name,
            tags:this.tags,
            events:this.events,
            description:this.description,
            address:this.address,
            restImg:this.restImg
        };
    }
}