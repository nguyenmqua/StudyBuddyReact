const router = require("express").Router();
const mongoose = require('mongoose');
const buddy = mongoose.model("Users");
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
import Users from ("../../models/Users");

router.post('reset-password', (req, res) => {
    crypto.randomBytes(32, (err, buffer)=> {
        if(err){
            console.log(err)
        }
        //convert from hexidecimal to string
        const token = buffer.toString("hex")
        user.findOne({email: req.body.email})
        .then(Users => {
            if(!Users){
                return res.status(422).json({error:"User not found."})
            }
            Users.resetToken
        })
    })
})

