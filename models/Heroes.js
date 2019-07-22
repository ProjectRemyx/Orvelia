const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    classification:{
        type: String,
        required: true
    },
    rating:{
        pve:{
            type: String,
            required: true
        },
        pvp:{
            type: String,
            required: true
        },
        bd:{
            type: String,
            required: true
        },
        rdh:{
            type: String,
            required: true
        },
        idh:{
            type: String,
            required: true
        },
        pdh:{
            type: String,
            required: true
        },
        bdh:{
            type: String,
            required: true
        },
        wb1:{
            type: String,
            required: true
        },
        wb2:{
            type: String,
            required: true
        },
        wb3:{
            type: String,
            required: true
        },
        gr:{
            type: String,
            required: true
        },
        gc1:{
            type: String,
            required: true
        },
        gc2:{
            type: String,
            required: true
        },
        gc3:{
            type: String,
            required: true
        }
    },
    uwreliance:{
        type: String,
        required: true
    }
});