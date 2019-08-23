const upload = require('../imageUpload')
const Design = require('../model/Design')

module.exports = {
    async addToGallery(req, res) {
        const design = await Design.findById(req.params.designId)
        
        upload(req, res, err => {
            if(!err){
                design.gallery.push('/files/' + req.file.filename)
                design.save()

                res.json(req.file)
            }else{
                res.json(err)
            }
        })
    },
    async changeThumbnail(req, res){
        const design = await Design.findById(req.params.designId)

        upload(req, res, err => {
            if(!err){
                design.thumbnail = '/files/' + req.file.filename
                design.save()

                res.json(req.file)
            }else{
                res.json(err)
            }
        })
    }
}