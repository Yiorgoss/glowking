import { AiOutlineDown } from 'react-icons/ai';

import { t } from '@lingui/macro';

const FAQSection = () => {
    const FAQ = [
        {
            question: t({ id: 'FAQ.question.1', message: 'HOW DOES IT WORK?' }),
            answer: t({
                id: 'FAQ.answer.1',
                message:
                    'Glow King is the service that comes wherever you are with just one click! Respecting your needs and time, you call us either by phone or through our e-booking platform and we come wherever you are at the time you choose and with the washing services you choose. For us, the protagonist is you!'
            })
        },
        {
            question: t({
                id: 'FAQ.question.2',
                message: 'WHERE TO ASK QUESTIONS?'
            }),
            answer: t({
                id: 'FAQ.answer.2',
                message:
                    "Didn't find what you need? Do not hesitate to contact us either by phone or by email."
            })
        },
        {
            question: t({ id: 'FAQ.question.3', message: 'HOW YOU PAY?' }),
            answer: t({
                id: 'FAQ.answer.3',
                message:
                    'At the completion of our work and after you have finished evaluating your experience of our services, you pay our staff in cash.'
            })
        },
        {
            question: t({
                id: 'FAQ.question.4',
                message: 'WHAT DOES IT TAKE?'
            }),
            answer: t({
                id: 'FAQ.answer.4',
                message: 'Just one click from your side! Leave the rest to us.'
            })
        }
    ];

    return (
        <div className='' id='faq'>
            {FAQ.map(({ question, answer }, index) => (
                <div key={index} className='mt-5 divide-y'>
                    <h2 className='py-2 text-xl'>{question}</h2>
                    <div className='pt-2'>{answer}</div>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;
