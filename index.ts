import express from 'express'
import cors from 'cors'

import { getLeetQuestionsCount, getUserBadges, getUserCalendarWithoutYear, getUserCalendarWithYear, getUserCommunityStats, getUserContestRanking, getUserContestRankingHistory, getUserDiscussions, getUserLanguages, getUserProblemsSolvedBeatsStats, getUserProfile, getUserRecentSubmissions, getUserSkills, getUserSocial, getUserSolutions, getUserSubmitStats } from 'leet-profile-lib'

const app = express()

app.use(cors())

app.get('/user/:username/badges', getUserBadges)
app.get('/user/:username/calendar', getUserCalendarWithoutYear)
app.get('/user/:username/calendar/:year', getUserCalendarWithYear)
app.get('/user/:username/community-stats', getUserCommunityStats)
app.get('/user/:username/contest-ranking-history', getUserContestRankingHistory)
app.get('/user/:username/contest-ranking', getUserContestRanking)
app.get('/user/:username/discussions', getUserDiscussions)
app.get('/user/:username/languages', getUserLanguages)
app.get('/user/:username/problems-solved-beats-stats', getUserProblemsSolvedBeatsStats)
app.get('/user/:username/profile', getUserProfile)
app.get('/user/:username/recent-submissions', getUserRecentSubmissions)
app.get('/user/:username/skills', getUserSkills)
app.get('/user/:username/social', getUserSocial)
app.get('/user/:username/solutions', getUserSolutions)
app.get('/user/:username/submit-stats', getUserSubmitStats)

app.get('/questions', getLeetQuestionsCount)

const port = process.env.PORT || 1200

app.listen(port, () => {
    console.log('Listening on server https://leetprofile-server.onrender.com/')
})