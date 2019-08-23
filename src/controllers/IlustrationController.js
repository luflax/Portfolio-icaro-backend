const Ilustration = require('../model/Ilustration')

module.exports = {
    async index(req, res){
        const ilustrations = await Ilustration.find({})

        let formatedIlustrations = []
        ilustrations.map(motion => {
            //if(!motion.isdone) return

            let newMotion = {}
            newMotion.thumbnail = motion.thumbnail
            newMotion.project = motion.project
            newMotion._id = motion._id
            formatedIlustrations.push(newMotion)
        })
        return res.json(formatedIlustrations)
    },
    async store(req, res) {

        const ilustration = await Ilustration.create({
            thumbnail: 'none',
            project: 'none',
            gallery: [],
            customer: 'none',
            description: 'none',
            isdone: false
        })
        return res.json(ilustration)
    },
    async update(req, res){
        const { _id, 
                project,
                customer,
                description,
                isdone
             } = req.body

        const ilustration = await Ilustration.findById(_id)
        
        if(ilustration.gallery.length <= 0 || ilustration.thumbnail == 'none')
             return res.json({
                 error: 'Thumbnail or gallery cannot be empty'
             })

        ilustration.project = project
        ilustration.customer = customer
        ilustration.description = description
        ilustration.isdone = isdone

        ilustration.save()

        return res.json(ilustration)
    },
    async show(req, res){
        const {ilustrationId} = req.params
        const ilustration = await Ilustration.findById(ilustrationId)

        return res.json(ilustration)
    },
    async delete(req, res){
        const {ilustrationId} = req.params
        const ilustration = await Ilustration.findById(ilustrationId)
        ilustration.delete()

        return res.json({deleted: true})
    }
}