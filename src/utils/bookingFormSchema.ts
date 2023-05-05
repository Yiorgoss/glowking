import * as yup from 'yup';

const bookingFormSchema = yup.object().shape({
    category: yup.number(),
    subtype: yup.number(),
    pacakge: yup.number(),
    extras: yup.array(
        yup.object({
            id: yup.number(),
            title: yup.string(),
            price: yup.number(),
            time: yup.number()
        })
    ),

    datetime: yup.string().min(5).required(),
    name: yup.string().trim().required('Required'),
    phone: yup.number().positive().integer().required('Required'),
    email: yup.string().trim().email(),
    location: yup.string().trim().required('Where should we meet you?'),
    messageBody: yup.string(),
    acceptTerms: yup.boolean().required('Accept Terms and Conditions'),
    acceptTerms2: yup.boolean().required('Please Accept')
});

export default bookingFormSchema
