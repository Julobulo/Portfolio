import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Project from "./models/ProjectModel.js";
import Message from "./models/MessageModel.js";
import nodemailer from "nodemailer";
dotenv.config();
const { PORT, DB_URL, EMAIL_SENDER, GMAIL_API_KEY, EMAIL_RECEIVER } = process.env;

const app = express();

// Middleware for handling CORS POLICY
// Option 1: Allow ALL Origins with Default of cors(*)
// app.use(cors());
// Option 2:
app.use(cors({
    origin: ['http://jules.tf', 'https://jules.tf', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-type'],
}));
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/projects', async (request, response) => {
    const projects = await Project.find({},
        // { image: 0 }
    ).sort({ date: -1 }).limit(10);
    return response.json(projects);
})

function sendMail(message, name, email) {
    const subject = 'New message from your portfolio';
    const body = `
    Hey, you just received received the following message from your portfolio's contact form:
    ${message}

    It was sent by ${name} (${email})
    `;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_SENDER,
            pass: GMAIL_API_KEY
        }
    });

    // Email options
    const mailOptions = {
        from: EMAIL_SENDER,
        to: EMAIL_RECEIVER,
        subject: subject,
        text: body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(`Error: ${error}`);
        }
        console.log('Email sent: ' + info.response);
    });
}

app.post('/message', async (request, response) => {
    const { name, email, message } = request.body;
    if (!name || !email || !message) {
        return response.status(400).json({ message: "Please send all the required fields" })
    }
    const sameMessage = await Message.find({ name, email, message })
    if (sameMessage.length > 0) {
        return response.status(400).json({ message: "error processing message" })
    }
    const messagesFromSamePerson = await Message.find({ name })
    if (messagesFromSamePerson.length > 4) {
        return response.status(400).json({ message: "error processing message" })
    }
    const messagesFromSameEmail = await Message.find({ email })
    if (messagesFromSameEmail.length > 4) {
        return response.status(400).json({ message: "error processing message" })
    }
    const messagesSameContent = await Message.find({ message })
    if (messagesSameContent.length > 0) {
        return response.status(400).json({ message: "error processing message" })
    }
    const newMessage = await Message.create({ name, email, message });
    sendMail(message, name, email)
    return response.status(201).json({ message: "successfully sent message!" });
})

mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })