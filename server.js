import express from 'express';
import cors from 'cors';
import medicamentoRoutes from './routes/medicamentoRoutes.js';
import vendaRoutes from './routes/vendaRoutes.js';
import relatorioRoutes from './routes/relatorioRoutes.js';
import fornecedorRoutes from './routes/fornecedorRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { sequelize } from './models/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/medicamentos', medicamentoRoutes);
app.use('/api/vendas', vendaRoutes);
app.use('/api/relatorios', relatorioRoutes);
app.use('/api/fornecedores', fornecedorRoutes);
app.use('/api/funcionarios', roleRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`[Dev-Felix] Servidor rodando na porta ${PORT}`);
  });
});
