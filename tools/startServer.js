const dotenv = require('dotenv');
dotenv.config();

const app = require('./serverProduction');
const PORT = 3102;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('🌎  Server is listening on port %s.', PORT);
  }
});