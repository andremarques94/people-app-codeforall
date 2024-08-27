import express, { json } from 'express';
import cors from 'cors';
import http from 'http';
import knex from './common/database/db';
import peopleRouter from './people/application/people.router';

const PORT = process.env.SERVERPORT || 3000;

export const app = express();
let httpServer: http.Server;

function init(): void {
    app.use(cors());
    app.use(json());
    app.use('/api', peopleRouter);

    app.get('/', (req, res) => {
        res.redirect('/api/people');
    });

    httpServer = http.createServer(app);
    httpServer.listen(PORT, () => {
        console.log(`Server:  http://localhost:${PORT}`);
    });
}

export async function shutdownServer(cb: () => void): Promise<void> {
    if (httpServer) {
        httpServer.close(cb);
        await knex.destroy();
    }
}

init();
