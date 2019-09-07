const express = require('express')
const MotionController = require('./controllers/MotionController')
const MotionFileController = require('./controllers/MotionFileController')
const IlustrationController = require('./controllers/IlustrationController')
const IlustrationFileController = require('./controllers/IlustrationFileController')
const DesignController = require('./controllers/DesignController')
const DesignFileController = require('./controllers/DesignFileController')
const EmailController = require('./controllers/EmailController')
const LoginController = require('./controllers/LoginController')

const auth = require('./auth')

const router = express.Router()

router.get('/motions/:motionId', MotionController.show)
router.get('/motions', MotionController.index)

router.get('/ilustrations/:ilustrationId', IlustrationController.show)
router.get('/ilustrations', IlustrationController.index)

router.get('/designs/:designId', DesignController.show)
router.get('/designs', DesignController.index)

router.post('/email', EmailController.sendEmail)

router.post('/login', LoginController.login)

const protectedApi = express.Router()

protectedApi.use(auth)

protectedApi.post('/motions', MotionController.store)
protectedApi.put('/motions', MotionController.update)
protectedApi.delete('/motions/:motionId', MotionController.delete)
protectedApi.post('/motions/:motionId/uploadfile', MotionFileController.addToGallery)
protectedApi.post('/motions/:motionId/uploadThumbnail', MotionFileController.changeThumbnail)

protectedApi.post('/ilustrations', IlustrationController.store)
protectedApi.put('/ilustrations', IlustrationController.update)
protectedApi.delete('/ilustrations/:ilustrationId', IlustrationController.delete)
protectedApi.post('/ilustrations/:ilustrationId/uploadfile', IlustrationFileController.addToGallery)
protectedApi.post('/ilustrations/:ilustrationId/uploadThumbnail', IlustrationFileController.changeThumbnail)

protectedApi.post('/designs', DesignController.store)
protectedApi.put('/designs', DesignController.update)
protectedApi.delete('/designs/:designId', DesignController.delete)
protectedApi.post('/designs/:designId/uploadfile', DesignFileController.addToGallery)
protectedApi.post('/designs/:designId/uploadThumbnail', DesignFileController.changeThumbnail)

module.exports = {router, protectedApi}