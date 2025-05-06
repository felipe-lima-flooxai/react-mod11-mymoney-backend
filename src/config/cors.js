const corsMiddleware = (req, res, next) => {
  // Origens permitidas
  const allowedOrigins = [
    'http://localhost:3000', // React
    'http://seusite.com'
  ];
  
  const origin = req.headers.origin;
  
  // Libera apenas origens específicas ou todas em desenvolvimento
  if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  
  // Headers e métodos permitidos
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Max-Age', '86400'); // 24 horas
  
  // Resposta para pre-flight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
};

module.exports = corsMiddleware;