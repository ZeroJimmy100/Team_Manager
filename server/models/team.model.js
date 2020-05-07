const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Player name is required"],
        minlength: [2, "Player name must be contain at least 2 characters in length"]
    },
    refPosition: {
        type: String
    },
    // playerStatus: {
    //     type: [String],
    //     default: ["Undecided", "Not Playing", "Undecided"]
    // }
    playStatusOne: {
        type: String,
        default: "Undecided"
    },
    playStatusTwo: {
        type: String,
        default: "Undecided"
    },
    playStatusThree: {
        type: String,
        default: "Undecided"
    }
}, {timestamps: true});
module.exports.TeamPlayer = mongoose.model('TeamPlayer', TeamSchema);