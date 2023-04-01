import express from 'express'

import { User } from 'leet-profile-lib'

const router = express.Router()

// User end-points
router.get('/:username/badges', User.getUserBadges)
router.get('/:username/calendar', User.getUserCalendarWithoutYear)
router.get('/:username/calendar/:year', User.getUserCalendarWithYear)
router.get('/:username/community-stats', User.getUserCommunityStats)
router.get('/:username/contest-ranking-history', User.getUserContestRankingHistory)
router.get('/:username/contest-ranking', User.getUserContestRanking)
router.get('/:username/discussions', User.getUserDiscussions)
router.get('/:username/languages', User.getUserLanguages)
router.get('/:username/problems-solved-beats-stats', User.getUserProblemsSolvedBeatsStats)
router.get('/:username/profile', User.getUserProfile)
router.get('/:username/recent-submissions', User.getUserRecentSubmissions)
router.get('/:username/skills', User.getUserSkills)
router.get('/:username/social', User.getUserSocial)
router.get('/:username/solutions', User.getUserSolutions)
router.get('/:username/submit-stats', User.getUserSubmitStats)


export default router