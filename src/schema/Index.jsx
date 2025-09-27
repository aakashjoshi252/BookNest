import * as yup from "yup"

export const regisSchema = yup.object({
    username: yup.string().required("Please enter username").min(3), 
    email: yup.string().required("Please enter email").email("Please enter a valid email").lowercase("Email is always lowercase"),
    password: yup.string().required("Please enter password").min(6),
    mobile:yup.string().required("Please enter mobile no.").min(10).max(10),
    address: yup.string().required("Please enter address").min(5),
    address2: yup.string(),
    city: yup.string().required("Please enter city"),
    state: yup.string().required("Please select state"),
    zip: yup.string().required("Please enter zip code").matches(/^\d{6}$/, "Zip code must be 6 digits"),
    checkbox:yup.boolean()
});

