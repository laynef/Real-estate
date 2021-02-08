// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { fixedMonthlyMortage, payOffTime } from "../../../utils/mortage";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        let { yourPayment = 0, prinicipal = 0, interestRate = 0, totalPayments = 0 } = JSON.parse(req.body) || {};

        yourPayment = Number(yourPayment);
        prinicipal = Number(prinicipal);
        interestRate = Number(interestRate);
        totalPayments = Number(totalPayments);

        const monthlyPayment = fixedMonthlyMortage(prinicipal, interestRate, totalPayments);
        const timeToPayOff = payOffTime(yourPayment, prinicipal, interestRate, totalPayments);
        
        res.status(200).send({ yourPayment, monthlyPayment, prinicipal,  interestRate,  totalPayments, timeToPayOff });
    } else {
        res.status(405).send({ error: 'Moethod doesn\'t exist' });
    }
};
