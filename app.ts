const express = require('express');
const app = express();

const hello = (name: string): void => console.log('Hello',name)
hello('goro9')

app.get('/', (req: any, res: any) => {
    res.render('hello.ejs');
});

app.listen(3000);
