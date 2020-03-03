import express, { Application } from 'express';
import morgan from 'morgan';
import http from 'http';
import testRoute from '@route/testRoute/testRoute';

// Initialization vars
const app: Application = express();
const server = http.createServer(app);
const port = 3000;
const router = express.Router();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
router.use('/test', testRoute);

// Routes
app.use('/v1', router);

// Launch API
server.listen(port, () => console.log(`Port: ${port}`));
