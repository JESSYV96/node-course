import express from 'express'
import bodyParser from 'body-parser'
import { join } from 'path'
import __dirname from './utils/getDirname.js'
import sequelize from './utils/db.js'
import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'
import { get404 } from './controllers/error.js'

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

sequelize.sync().then(r => {
    app.listen(3000);
}).catch(err => {
    console.log(err)
});

