import express from 'express'
import cors from 'cors'

import { getLeetUserProfile, getLeetQuestionsCount } from 'leet-profile-lib'

const app = express()

app.use(cors())

app.get('/profile/:user', getLeetUserProfile)
app.get('/questions', getLeetQuestionsCount)

const port = process.env.PORT || 1200

app.listen(port, () => {
    console.log('Server listening on server https://leetcode-profile-lib.herokuapp.com/')
})