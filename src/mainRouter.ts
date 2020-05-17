import express from 'express'
import { AppRouter} from './common/AppRouter';
import { SecurityRouter } from './security/securityrouter';
import {EventsRouter} from './EventsHandling/EventsRouter'; //root router for the API
import { RestaurantRouter } from './Restaurant/RestaurantRouter';

export class MainRouter extends AppRouter{
    constructor(){super();}

    //adds the child routers to various paths to form the overall API. 
    setupRoutes(): void {
        // this.addRouter('/security',new SecurityRouter());        
        // this.addRouter('/events',new EventsRouter() );
        this.addRouter('/events',new EventsRouter());
        this.addRouter('/restaurants', new RestaurantRouter());
    }
    
}