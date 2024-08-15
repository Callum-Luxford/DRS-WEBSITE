// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5500;

// app.use(cors());

// app.use(express.urlencoded({ extended: false}));

// app.post('/upload', function(req,res){

//     const params = new URLSearchParams({
//         secret: '6Lc0aCcqAAAAAH5aesSwxhVaMjnT465PMjhO4-Fk',
//         response: req.body['g-recaptcha-response'],
//         remoteip: req.ip,
//     })

//     fetch('https://www.google.com/recaptcha/api/siteverify',{
//         method: 'POST',
//         body: params,
//     }) 

//     .then(res => res.json())
//     .then(data => {
//         if (data.success){
//             res.json({ captchaSucces: true });
//         } else {
//             res.json({ captchaSucces: false });
//         }
//     })
// });

// app.listen(port,()=>{
//     console.log(`App running on port ${port}`);
// });