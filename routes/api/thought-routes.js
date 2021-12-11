const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// PUT/ add reaction to a thought at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .put(addReaction);

// DELETE reaction from a thought at /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

// GET one, PUT, and DELETE at /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

    module.exports = router;