const { TeamPlayer } = require('../models/team.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello Team Player"
    });
}

module.exports.createPlayer = (request, response) => {
    const { playerName, refPosition} = request.body;
    TeamPlayer.create({
        playerName,
        refPosition,
    })
    .then(teamplayer => response.json(teamplayer))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllPlayer = (request, response) => {
    TeamPlayer.find({})
        .then(teamplayers => response.json(teamplayers))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    TeamPlayer.findOne({_id:request.params.id})
        .then(teamplayer => response.json(teamplayer))
        .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    TeamPlayer.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    TeamPlayer.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}