const mongoose = require('mongoose');

const WeightSchema = new mongoose.Schema([{
    name: {
        type: String,
        required: true
    },
    weights: [{
        weekStartDate: {
            type: String,
            require: true
        },
        monday: {
            type: Number
        },
        tuesday: {
            type: Number
        },
        wednesday: {
            type: Number
        },
        thursday: {
            type: Number
        },
        friday: {
            type: Number
        },
        saturday: {
            type: Number
        },
        sunday: {
            type: Number
        }
    }]
}]);

module.exports = Weight = mongoose.model('weight', WeightSchema);