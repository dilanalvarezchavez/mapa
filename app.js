const  express = require('express');

const app = express();

const bookRouter = express.Router();

const port = process.env.PORT || 3000;

bookRouter.route('/casa')

.get((req,res)=>{
  const datos = {id: '1',nombre:'Dilan',latlng:[-0.2627212,-78.5572112,21]};

  res.json(datos);
});

app.use('/api',bookRouter);


app.get('/',(req,res)=>{
    res.send('clase de ayer');
});

app.listen(port,()=>{
    console.log(`Puerto ${port}`);
});
