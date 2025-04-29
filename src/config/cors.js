const cors = (req, res, next) => {
    // Origens permitidas (ajuste conforme necessário)
    const allowedOrigins = [
      'http://localhost:3000', // React
      'http://seusite.com'
    ];
    
    const origin = req.headers.origin;
    
    // Libera apenas origens específicas (ou todas em desenvolvimento)
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      res.setHeader('Access-Control-Allow-Origin', origin || '*');
    }
  
    // Métodos permitidos
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    // Headers permitidos
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With'
    );
    
    // Permitir cookies/tokens (se necessário)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // Cache de pré-flight (em segundos)
    res.setHeader('Access-Control-Max-Age', '86400'); // 24h
    
    // Resposta rápida para OPTIONS (pré-flight)
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    
    next();
  };
  
  module.exports = cors;