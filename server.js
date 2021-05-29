var express = require("express");
var app = express();
const port = 3008;
const data = `{"meta":"payload","host":"express","message":"ok","DATA":[1,-1,3,-4,5,-2,7,4,2]}`
const payload = JSON.parse(data)
app.get("/", (req, res, next) => {
 res.json(payload);
console.log(payload);
});


app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});

