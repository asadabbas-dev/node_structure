import dotenv from 'dotenv';
import chalk from 'chalk';
import app from '../src/app.js';


dotenv.config();


app.listen(process.env.PORT || 4000, () => {
    console.log(chalk.blue(` 🚀 server listening on port: ${process.env.PORT}!`));
})



