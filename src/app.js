import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "../routes/index.js";
import sequelize from "./db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Esta es la raiz de mi Cafeteria');
});

// Conectar a la base de datos y luego iniciar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos.');
    app.listen(port, () => {
      console.log('Server is running on http://localhost:' + port);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

routes(app);
