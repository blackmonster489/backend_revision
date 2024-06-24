const mongoose = require('mongoose');

const url="mongodb+srv://vshagun489:1234@cluster0.yke2mdv.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;