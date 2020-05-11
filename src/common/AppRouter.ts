import express from 'express';

export abstract class AppRouter{
    protected router: express.Router;

    public get expressRouter(): express.Router{
        return this.router;
    }

    constructor(){
        this.router=express.Router();
        this.setupRoutes();
    }

    addRouter(path: string, child: AppRouter):void{
        this.router.use(path, child.expressRouter);
    }

    abstract setupRoutes(): void;
}