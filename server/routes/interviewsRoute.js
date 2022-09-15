/* eslint-disable no-console */
const Router = require('express');
const interviewsController = require('../controllers/interviewsController');
const linksController = require('../controllers/linksController');

const router = Router();

router.use((req, res, next) => {
  console.log(`server/routes/interviewsRouter.js: received request ${req.method} ${req.url}`);
  next();
});

router.get(
  '/',
  (req, res, next) => {
    console.log(`server/routes/interviewsRouter.js.router.get('/'): received request ${req.method} ${req.url}`);
    next();
  },
  interviewsController.getAllInterviews,
  (req, res) => {
    res.status(200).json(res.locals.interviews);
  },
);

router.get(
  '/:id/links',
  (req, res, next) => {
    console.log(`server/routes/interviewsRouter.js.router.get('/:id/links'): received request ${req.method} ${req.url}`);
    next();
  },
  linksController.getByInterviewId,
  (req, res) => {
    res.status(200).json(res.locals.links);
  },
);

router.put(
  '/:id/links',
  (req, res, next) => {
    console.log(`server/routes/interviewsRouter.js.router.put('/:id/links'): received request ${req.method} ${req.url}`);
    next();
  },
  linksController.create,
  (req, res) => {
    res.status(200).json(res.locals.newLink);
  },
);

router.delete(
  '/:id/links',
  (req, res, next) => {
    console.log(`server/routes/interviewsRouter.js.router.delete('/:id/links'): received request ${req.method} ${req.url}`);
    next();
  },
  linksController.delete,
  (req, res) => {
    res.status(200).json(res.locals.deletedLink);
  },
);

router.put(
  '/',
  (req, res, next) => {
    console.log(`server/routes/interviewsRouter.js.router.put('/'): received request ${req.method} ${req.url}`);
    next();
  },
  interviewsController.createInterview,
  (req, res) => {
    res.status(200).json(res.locals.newInterview);
  },
);

// api router 404 handler
router.use((req, res) => {
  console.log(`server/routes/interviewRouter.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

module.exports = router;
