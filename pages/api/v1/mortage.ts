// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { fixedMonthlyMortage, payPrinicipal } from "../../../utils/mortage";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      let { prinicipal = 0, interestRate = 0, totalPayments = 0 } = req.body;
      
      prinicipal = Number(prinicipal);
      interestRate = Number(interestRate);
      totalPayments = Number(totalPayments);

      const monthlyPayment = fixedMonthlyMortage(prinicipal, interestRate, totalPayments);
      prinicipal = payPrinicipal(monthlyPayment, prinicipal, interestRate, totalPayments);

      res.status(200).send({ monthlyPayment, prinicipal,  interestRate,  totalPayments });
    } else {
      res.status(405).send({ error: 'Moethod doesn\'t exist' });
    }
};
