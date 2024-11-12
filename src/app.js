import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "../routes/index.js";
import pkg from 'pg';  // Importa pg y utiliza su exportación por defecto para ESM
const { Client } = pkg;

// Solo carga dotenv en entornos que no sean producción
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(cors());
app.use(express.json());

// Configura la conexión a la base de datos
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Función de conexión con reintentos
const connectWithRetry = () => {
  client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => {
      console.error('Database connection error:', err.stack);
      setTimeout(connectWithRetry, 5000); // Reintenta cada 5 segundos
    });
};

connectWithRetry(); // Inicia la conexión con reintento

// Define el puerto
const port = process.env.PORT || 3000;

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('Esta es la raiz de mi Cafeteria');
});

// Agrega las rutas de tu API
routes(app);

// Inicia el servidor
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});

export { client };  // Exporta client si necesitas usarlo en otras partes de tu aplicación
