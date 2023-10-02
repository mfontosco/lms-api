const path = require('path');

const PathFinder = {};

// root of the application
PathFinder.root = path.join(__dirname, '../');

PathFinder.uploads = path.join(__dirname, '../../../../uploads');

// controllers
PathFinder.controllers = path.join(PathFinder.root, 'controllers');

// database
PathFinder.database = path.join(PathFinder.root, 'database/models/index');

PathFinder.services = path.join(PathFinder.root, 'services');

// storage
PathFinder.storage = path.join(PathFinder.root, 'storage');
PathFinder.logs = path.join(PathFinder.storage, 'logs');

// routes
PathFinder.routes = path.join(PathFinder.root, 'routes');

// public
PathFinder.public = path.join(PathFinder.root, 'public');

// views
PathFinder.views = path.join(PathFinder.root, 'views');

// hold all login of the system
PathFinder.processors = path.join(PathFinder.root, 'processors');

// middlewares
PathFinder.middlewares = path.join(PathFinder.root, 'middlewares');
PathFinder.validators = path.join(PathFinder.middlewares, 'validators');

// config
PathFinder.config = __dirname;

// helpers
PathFinder.helpers = path.join(PathFinder.root, 'helpers');

PathFinder.nodepath = path;
PathFinder.join = path.join;

module.exports = PathFinder;
