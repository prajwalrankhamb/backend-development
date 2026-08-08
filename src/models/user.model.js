import mongoose, { Schema } from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            requied: true,
            unique: true,
            lowercase: true,
            index: true,
            trim: true
        },
        email: {
            type: String,
            requied: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            requied: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,   //Clowdnary url
            requied: true,
        },
        coverImage: {
            type: String,   //Clowdnary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            requied: [true, 'Password is requied'],
        },
        refeshToken: {
            type: String
        }
    },
{timestamps: true})


export const User = mongoose.model("User", userSchema)