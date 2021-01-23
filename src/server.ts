require("dotenv").config();
import app from './app'

app.server.listen(process.env.PORT);