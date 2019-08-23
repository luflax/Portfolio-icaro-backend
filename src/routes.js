const express = require('express')
const MotionController = require('./controllers/MotionController')
const MotionFileController = require('./controllers/MotionFileController')

const IlustrationController = require('./controllers/IlustrationController')
const IlustrationFileController = require('./controllers/IlustrationFileController')

const DesignController = require('./controllers/DesignController')
const DesignFileController = require('./controllers/DesignFileController')

const EmailController = require('./controllers/EmailController')

const router = express.Router()

router.post('/motions', MotionController.store)
router.put('/motions', MotionController.update)
router.get('/motions/:motionId', MotionController.show)
router.delete('/motions/:motionId', MotionController.delete)
router.get('/motions', MotionController.index)
router.post('/motions/:motionId/uploadfile', MotionFileController.addToGallery)
router.post('/motions/:motionId/uploadThumbnail', MotionFileController.changeThumbnail)

router.post('/ilustrations', IlustrationController.store)
router.put('/ilustrations', IlustrationController.update)
router.get('/ilustrations/:ilustrationId', IlustrationController.show)
router.delete('/ilustrations/:ilustrationId', IlustrationController.delete)
router.get('/ilustrations', IlustrationController.index)
router.post('/ilustrations/:ilustrationId/uploadfile', IlustrationFileController.addToGallery)
router.post('/ilustrations/:ilustrationId/uploadThumbnail', IlustrationFileController.changeThumbnail)

router.post('/designs', DesignController.store)
router.put('/designs', DesignController.update)
router.get('/designs/:designId', DesignController.show)
router.delete('/designs/:designId', DesignController.delete)
router.get('/designs', DesignController.index)
router.post('/designs/:designId/uploadfile', DesignFileController.addToGallery)
router.post('/designs/:designId/uploadThumbnail', DesignFileController.changeThumbnail)

router.post('/email', EmailController.sendEmail)

module.exports = router