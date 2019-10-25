const express = require('express');
import consign from "consign";


const PORT = 3000;

const app = express();

app.set("json spaces", 4);

consign().include("routes").into(app);

app.listen(PORT, () => console.log(`API Port = ${PORT}`));