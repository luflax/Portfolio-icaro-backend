const Motion = require('../model/Motion')

module.exports = {
    async index(req, res){
        const motions = await Motion.find({})

        let formatedMotions = []
        motions.map(motion => {
            //if(!motion.isdone) return

            let reducedMotion = {}
            reducedMotion.thumbnail = motion.thumbnail
            reducedMotion.project = motion.project
            reducedMotion._id = motion._id
            formatedMotions.push(reducedMotion)
        })
        return res.json(formatedMotions)
    },
    async store(req, res) {

        const motion = await Motion.create({
            thumbnail: 'none',
            project: 'none',
            gallery: [],
            customer: 'none',
            description: 'none',
            isdone: false
        })
        return res.json(motion)
    },
    async update(req, res){
        const { _id, 
                project,
                customer,
                description,
                isdone
             } = req.body

        const motion = await Motion.findById(_id)
        
        if(motion.gallery.length <= 0 || motion.thumbnail == 'none')
             return res.json({
                 error: 'Thumbnail or gallery cannot be empty'
             })

        motion.project = project
        motion.customer = customer
        motion.description = description
        motion.isdone = isdone

        motion.save()

        return res.json(motion)
    },
    async show(req, res){
        const {motionId} = req.params
        const motion = await Motion.findById(motionId)

        return res.json(motion)
    },
    async delete(req, res){
        const {motionId} = req.params
        const motion = await Motion.findById(motionId)
        motion.delete()

        return res.json({deleted: true})
    }
}