import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';

import {
    getLeetQuestionsCount,
    getSwaggerYaml
} from 'leet-profile-lib'

import user from './routes/user'

const app = express()

const swaggerFilePath = `${__dirname}/../node_modules/leet-profile-lib`
const swaggerDocument = getSwaggerYaml(swaggerFilePath)

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/user', user)

app.get('/questions', getLeetQuestionsCount)

const port = process.env.PORT || 1200

app.listen(port, () => {
    console.log('Listening on server https://leetprofile-server.onrender.com/')
})