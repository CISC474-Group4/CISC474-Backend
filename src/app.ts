import express from 'express'
import { ApiRouter } from './router';
import { NodeApplication } from './common/NodeApplication';
import { AppRouter } from './common/AppRouter';

//main application class
class Application extends NodeApplication {

    constructor(port: number) {
        super(port,'/api');
    }
    
    //Notify that server is running
    OnSetupComplete(port: number): void {
        console.log('ExampleApi Listening on port ' + port.toString());
    }

    //setup main routing for the application
    SetupRoutes(): AppRouter {
        return new ApiRouter();
    }
}
const port = process.env.PORT || 3000;
new Application(+port).startServer();
