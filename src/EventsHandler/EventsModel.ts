
export class EventsModel{
    
    id='';
    name='';
    description?='';
    groupid='';
    groupMembers:string[]=[];


    static fromObject(object:any):EventsModel{
        const event:EventsModel=new EventsModel();
        event.name=object.name;
        event.description=object.description;
        event.groupid=object.groupId;
        event.groupMembers=object.groupMembers;
        
        return event;
    }
    /**
     * returns a JSON of data
     */
    toObject():any{
        return {name:this.name,
            description:this.description,
            groupid:this.groupid,
            groupMembers:this.groupMembers};
    }
}