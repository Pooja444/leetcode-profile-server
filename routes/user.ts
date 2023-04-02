import express from 'express'

import { UserRequests } from 'leet-profile-lib'

const router = express.Router()

// User end-points
router.get('/:username/badges', UserRequests.getUserBadges)
router.get('/:username/calendar', UserRequests.getUserCalendarWithoutYear)
router.get('/:username/calendar/:year', UserRequests.getUserCalendarWithYear)
router.get('/:username/community-stats', UserRequests.getUserCommunityStats)
router.get('/:username/contest-ranking-history', UserRequests.getUserContestRankingHistory)
router.get('/:username/contest-ranking', UserRequests.getUserContestRanking)
router.get('/:username/discussions', UserRequests.getUserDiscussions)
router.get('/:username/languages', UserRequests.getUserLanguages)
router.get('/:username/problems-solved-beats-stats', UserRequests.getUserProblemsSolvedBeatsStats)
router.get('/:username/profile', UserRequests.getUserProfile)
router.get('/:username/recent-submissions', UserRequests.getUserRecentSubmissions)
router.get('/:username/skills', UserRequests.getUserSkills)
router.get('/:username/social', UserRequests.getUserSocial)
router.get('/:username/solutions', UserRequests.getUserSolutions)
router.get('/:username/submit-stats', UserRequests.getUserSubmitStats)


export default router