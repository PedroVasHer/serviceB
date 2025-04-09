import ServiceC from "@pedrovasher/servicec";
import express from 'express';

const app = express();

app.get('/serviceB', (req, res) => {
    res.send('Log from ServiceB');
});

app.get('/serviceC', (req, res) => {
    res.send(ServiceC());
});

export default app;