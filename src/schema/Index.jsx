import * as yup from "yup"

export const regisSchema = yup.object({
    username: yup.string().required("Please enter username").min(3, "Username must be at least 3 characters"), 
    email: yup.string().required("Please enter email").email("Please enter a valid email").lowercase("Email is always lowercase"),
    password: yup.string().required("Please enter password").min(7, "Password must be at least 7 characters"),
    address: yup.string().required("Please enter address").min(5, "Address is too short"),
    address2: yup.string().notRequired("Optional"),
    city: yup.string().required("Please enter city"),
    state: yup.string().required("Please select state"),
    zip: yup.string().required("Please enter zip code").matches(/^\d{5}$/, "Zip code must be 5 digits"),
    checkbox:yup.bool()
});

