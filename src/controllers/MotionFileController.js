const upload = require('../imageUpload')
const Motion = require('../model/Motion')

module.exports = {
    async addToGallery(req, res) {
        const motion = await Motion.findById(req.params.motionId)
        
        upload(req, res, err => {
            if(!err){
                motion.gallery.push('/files/' + req.file.filename)
                motion.save()

                res.json(req.file)
            }else{
                res.json(err)
            }
        })
    },
    async changeThumbnail(req, res){
 
        const motion = await Motion.findById(req.params.motionId)

        upload(req, res, err => {
            if(!err){
                motion.thumbnail = '/files/' + req.file.filename
                motion.save()

                res.json(req.file)
            }else{
                res.json(err)
            }
        })
    }
}