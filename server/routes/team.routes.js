const TeamController = require('../controllers/team.controller');

module.exports = function(app){
    app.get('/api/', TeamController.index);
    app.get('/api/player', TeamController.getAllPlayer);
    app.get('/api/player/:id', TeamController.getPlayer);
    app.put('/api/player/:id', TeamController.updatePlayer);
    app.post('/api/player/addplayer', TeamController.createPlayer);
    app.delete('/api/player/:id', TeamController.deletePlayer);

}