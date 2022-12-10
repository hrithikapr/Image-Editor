import * as Yup from "yup";

export const signupValidation = Yup.object({
    name: Yup.string().min(2).max(25).required("Enter Username"),
    email: Yup.string().email().min(2).max(25).required("Enter your Email"),
    password: Yup.string().min(6).required("Enter Password")
});

export const loginValidation = Yup.object({
    email: Yup.string().email().min(2).max(25).required("Enter your Email"),
    password: Yup.string().min(6).required("Enter Password")
});
export const contactValidation = Yup.object({
    name: Yup.string().min(2).max(25).required("Enter Username"),
    email: Yup.string().email().min(2).max(25).required("Enter your Email"),
    msg: Yup.string().min(5).max(200).required("Enter your message")
});