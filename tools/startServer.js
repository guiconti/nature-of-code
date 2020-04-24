const dotenv = require('dotenv');
dotenv.config();

const app = require('./serverProduction');
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('🌎  Server is listening on port %s.', PORT);
  }
});