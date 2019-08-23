const Design = require('../model/Design')

module.exports = {
    async index(req, res){
        const designs = await Design.find({})

        let formatedDesigns = []
        designs.map(design => {
            //if(!design.isdone) return

            let newDesign = {}
            newDesign.thumbnail = design.thumbnail
            newDesign.project = design.project
            newDesign._id = design._id
            formatedDesigns.push(newDesign)
        })
        return res.json(formatedDesigns)
    },
    async store(req, res) {

        const design = await Design.create({
            thumbnail: 'none',
            project: 'none',
            gallery: [],
            customer: 'none',
            description: 'none',
            isdone: false
        })
        return res.json(design)
    },
    async update(req, res){
        const { _id, 
                project,
                customer,
                description,
                isdone
             } = req.body

        const design = await Design.findById(_id)
        
        if(design.gallery.length <= 0 || design.thumbnail == 'none')
             return res.json({
                 error: 'Thumbnail or gallery cannot be empty'
             })

        design.project = project
        design.customer = customer
        design.description = description
        design.isdone = isdone

        design.save()

        return res.json(design)
    },
    async show(req, res){
        const {designId} = req.params
        const design = await Design.findById(designId)

        return res.json(design)
    },
    async delete(req, res){
        const {designId} = req.params
        const design = await Design.findById(designId)
        design.delete()

        return res.json({deleted: true})
    }
}