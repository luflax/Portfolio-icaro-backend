const nodemailer = require('nodemailer')

module.exports = {
    async sendEmail(req, res){

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'luizffs34@gmail.com', // generated ethereal user
                pass: 'Gb3yxxzzl' // generated ethereal password
            }
        });
    
        try{
            // send mail with defined transport object
            let info = await transporter.sendMail({
                to: 'luflax34@gmail.com',
                subject: `Mensagem de ${req.body.name} - PORTFÓLIO`,
                html: `Você recebeu uma nova mensagem no seu portfólio: <br>
                <strong>${req.body.name}</strong> diz: <br> ${req.body.message} Email para contato: ${req.body.email}`,
            });
            res.json({success: info.messageId})
        } catch(err){
            res.json({error: err})
        }
        
    }
} 
