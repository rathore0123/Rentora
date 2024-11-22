import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            index: true
        },
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            index: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            trim: true,
            required: [true, "password must be atleast 8 character long"]
        },
        profilePicture: {
            type: String,
        },
        refreshToken: {
            type: String
        }
    },
    {timestamps: true}
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
    return(
        jwt.sign(
            {
                _id: this._id,
                username: this.username,
                fullName: this.fullName,
                email: this.email
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
            }
        )
    )
};

userSchema.methods.generateRefreshToken = async function () {
    return(
        jwt.sign(
            {
                _id: this._id,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
            }
        )
    )
};

export const User = mongoose.model("User", userSchema);

