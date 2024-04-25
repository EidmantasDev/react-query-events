import bodyParser from 'body-parser';
import express from 'express';
import corsMiddleware from './middleware/cors.js';
import eventsRoutes from './routes/events.js';
import imagesRoutes from './routes/images.js';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(corsMiddleware);

app.use('/events', eventsRoutes);
app.use('/events/images', imagesRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
