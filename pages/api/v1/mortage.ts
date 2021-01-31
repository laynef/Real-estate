// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { fixedMonthlyMortage, payPrinicipal } from "../../../utils/mortage";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let { prinicipal = 0, interestRate = 0, totalPayments = 0 } = req.body;
  const monthlyPayment = fixedMonthlyMortage(prinicipal, interestRate, totalPayments);
  prinicipal = payPrinicipal(monthlyPayment, prinicipal, interestRate, totalPayments);

  res.status(200).send({ monthlyPayment, prinicipal,  interestRate,  totalPayments });
};
