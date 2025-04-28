const mongoose = require("mongoose");
mongoose.Promise = global.Promise
// Opções recomendadas para evitar warnings e melhorar performance
const options = {
  useNewUrlParser: true,          // Usar novo parser de URL (obrigatório)
  useUnifiedTopology: true,       // Usar engine de descoberta de servidores moderna
  serverSelectionTimeoutMS: 5000, // Timeout para tentativas de conexão
};

// Conexão com tratamento de eventos
mongoose.connect("mongodb://localhost:27017/mymoney", options)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch(err => console.error("Erro na conexão:", err));

// Exportar a conexão (opcional, depende do seu uso)
module.exports = mongoose;