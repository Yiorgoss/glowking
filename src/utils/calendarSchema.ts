import * as yup from 'yup';

const calendarSchema = yup.object().shape({
    name: yup.string().trim().required('Required'),
    phone: yup.number().positive().integer().required('Required'),
    email: yup.string().trim().email(),
    location: yup.string().trim().required('Where should we meet you?'),
    messageBody: yup.string(),
    extras: yup.array(
        yup.object({
            name: yup.string().required(),
            price: yup.number().required()
        })
    ),
    datetime: yup.string().min(5).trim().required('Please Select a Time'),
    acceptTerms: yup.boolean().required('Accept Terms and Conditions'),
    acceptTerms2: yup.boolean().required('Please Accept')
});
//const calendarSchema = yup.object().shape({
//    datetime: yup.string().min(5).trim().required("Please Select a Time"),
//    name: yup.string().trim(),
//    phone: yup.number().positive().integer(),
//    email: yup.string().trim().email(),
//    location: yup.string().trim(),
//    messageBody: yup.string().trim(),
//    acceptTerms: yup.boolean()
//});

export default calendarSchema;
