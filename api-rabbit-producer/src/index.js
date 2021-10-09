const customExpress = require('./config/expressConfig');

const app = customExpress();

const PORT = 3001;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));