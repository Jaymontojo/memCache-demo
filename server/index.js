const configureServer = require('./server');
const PORT = 4000;
const server = configureServer();

(() => {
  try {
    server.listen(PORT, () => {
      console.log(`server is listening @ http://localhost:${PORT}`);
    });    
  } catch (error) { 
    console.error(error);
  }
})();