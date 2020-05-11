export class EventsModel{
    title='';
    startTime = 0;
    endTime = 0;
    description = "";
    restaurant = "";


    static fromObject(object:any):EventsModel{
        const e:EventsModel=new EventsModel();
        e.title = object.title;
        e.startTime = object.startTime;
        e.endTime = object.endTime;
        e.description = object.description;
        e.restaurant = object.restaurant;
        return e;
    }

    toObject():any{
        return{
            title:this.title,
            startTime:this.startTime,
            endTime:this.endTime,
            description:this.description,
            restaurant:this.restaurant
        };
    }
}