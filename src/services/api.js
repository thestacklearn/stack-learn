import axios from "axios"

const api = axios.create({
    baseURL: "https://thestacklearn.onrender.com/",
})

export const userContactForm = args =>
    api.post("/api/user/contact", {
        name: args.name,
        email: args.email,
        country: args.country,
        phone: args.phone,
        createdDate: args.createdDate,
        courseName: args.courseName,
        about: args.about
    })