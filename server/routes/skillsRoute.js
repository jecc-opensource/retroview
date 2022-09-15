/* eslint-disable no-console */
const Router = require('express');
const skillsController = require('../controllers/skillsController');
const linksController = require('../controllers/linksController');

const router = Router();

router.use((req, res, next) => {
  console.log(`server/routes/skillsRouter.js: received request ${req.method} ${req.url}`);
  next();
});

router.get(
  '/',
  (req, res, next) => {
    console.log(`server/routes/skillsRouter.js.router.get('/'): received request ${req.method} ${req.url}`);
    next();
  },
  skillsController.getAllSkills,
  (req, res) => {
    res.status(200).json(res.locals.skills);
  },
);

router.get(
  '/:id/links',
  (req, res, next) => {
    console.log(`server/routes/skillsRouter.js.router.get('/:id/links'): received request ${req.method} ${req.url}`);
    next();
  },
  linksController.getBySkillId,
  (req, res) => {
    res.status(200).json(res.locals.links);
  },
);

router.put(
  '/:id/links',
  (req, res, next) => {
    console.log(`server/routes/skillsRouter.js.router.put('/:id/links'): received request ${req.method} ${req.url}`);
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
    console.log(`server/routes/skillsRouter.js.router.delete('/:id/links'): received request ${req.method} ${req.url}`);
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
    console.log(`server/routes/skillsRouter.js.router.put('/'): received request ${req.method} ${req.url}`);
    next();
  },
  skillsController.createSkill,
  (req, res) => {
    res.status(200).json(res.locals.newSkill);
  },
);

// api router 404 handler
router.use((req, res) => {
  console.log(`server/routes/skillRouter.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .json({
      message: `API handler for ${req.method} ${req.url} not found`,
    });
});

module.exports = router;
