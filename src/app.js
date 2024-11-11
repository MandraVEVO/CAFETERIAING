import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "../routes/index.js";
import pkg from 'pg';  // Importa pg y utiliza su exportación por defecto para ESM
const { Client } = pkg;

dotenv.config();

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

// Conéctate a la base de datos y maneja errores de conexión
client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err.stack));

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
