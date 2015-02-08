const React = require('react');
const Router = require('react-router');
const getRoutes = require('../../server/routes');
const mountNode = document.getElementById('layout');


Router.run(getRoutes(), Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, mountNode);
});
