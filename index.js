import Http from 'http'
import express from 'express'
import cors from 'cors'

import { connectToDatabase } from './db/helpers.js'
import { port } from './config/environment.js'

import logger from './lib/logger.js'
import router from './config/router.js'
import errorHandler from './lib/errorHandler.js'

const app = express.Router();
apa.use('/', express.json())
app.use('/', cors())
app.use('/', logger)
app.use('/api', router)
app.use('/', errorHandler)

const server = express()
server.use('/', app);

async function startServer() {
    await connectToDatabase();
    console.info('🌍 database has connected');
    const httpServer = Http.createServer(server);
    httpServer.listen(port, () => console.info(`Up and running on`, httpServer.address()) )
}

startServer().catch(console.error);
