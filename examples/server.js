var echo = require('../dist/index.js');

var options = {
  "authHost": "http://localhost:8000",
  "authEndpoint": "/broadcasting/auth",
  "clients": [
    {
      "appId": "236ddd8e987956dc",
      "key": "3940e1390c849f3afc9609697171bd22"
    }
  ],
  "database": "redis",
  "databaseConfig": {
    "redis": {},
    "sqlite": {
      "databasePath": "/database/laravel-echo-server.sqlite"
    }
  },
  "devMode": true,
  "host": "localhost",
  "port": "6001",
  "protocol": "http",
  "socketio": {},
  "secureOptions": 67108864,
  "sslCertPath": "",
  "sslKeyPath": "",
  "sslCertChainPath": "",
  "sslPassphrase": "",
  "subscribers": {
    "http": true,
    "redis": true
  },
  "apiOriginAllow": {
    "allowCors": true,
    "allowOrigin": "http://localhost:9999",
    "allowMethods": "OPTIONS, GET, POST",
    "allowHeaders": "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
  }
};

echo.run(options);

