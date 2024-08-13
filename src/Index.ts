import express from 'express';
import cardapioRoutes from './routes/cardapioRoutes';
import clienteRoutes from './routes/clienteRoutes';
import estoqueRoutes 

const app = express();
const port = 3000;

app.use(express.json());
app.use(cursoRoutes);
app.use(alunoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});