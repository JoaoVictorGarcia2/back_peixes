import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './server/src/routes/userRoutes.js'; 
import peixeRoutes from './server/src/routes/peixeRoutes.js'; // Importe o router de peixes
//import SwaggerUI from 'swagger-ui'
import SwaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json' with { type: "json" };

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'https://pi-peixes-front.netlify.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
app.use(express.json());

// Conexão MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/peixes', peixeRoutes); // Use o router de peixes

// Server ativo...
app.listen(PORT, () => {
  console.log(`O servidor está ativo na porta ${PORT}`);
});
