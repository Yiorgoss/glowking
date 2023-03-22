import * as yup from 'yup';

const calendarSchema = yup.object().shape({
    name: yup.string().trim().required('Required'),
    phone: yup.number().positive().integer().required('Required'),
    email: yup.string().trim().email(),
    location: yup.string().trim().required('Where should we meet you?'),
    messageBody: yup.string().trim(),
    datetime: yup.string().trim().required(),
    acceptTerms: yup.boolean().required('Accept Terms and Conditions')
});

export default calendarSchema;
