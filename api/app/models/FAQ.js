
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Faq Schema
 */
 
var FaqSchema = new Schema({
	id: Number,
	faqs:[{
        title: String,
        answer: String
	}]
});

/**
 * Statics
 */
FaqSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            id: id
        }).exec(cb);
    }
};

mongoose.model('Faq', FaqSchema);