const upload = require('../imageUpload')
const Ilustration = require('../model/Ilustration')

module.exports = {
    async addToGallery(req, res) {
        const ilustration = await Ilustration.findById(req.params.ilustrationId)
        
        upload(req, res, err => {
            if(!err){
                ilustration.gallery.push('/files/' + req.file.filename)
                ilustration.save()

                res.json(req.file)
            }else{
                res.json(err)
            }
        })
    },
    async changeThumbnail(req, res){
        const ilustration = await Ilustration.findById(req.params.ilustrationId)

        upload(req, res, err => {
            if(!err){
                ilustration.thumbnail = '/files/' + req.file.filename
                ilustration.save()

                res.json(req.file)
            }else{
                res.json(err)
            }
        })
    }
}