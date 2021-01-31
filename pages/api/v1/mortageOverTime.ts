// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { fixedMonthlyMortage, payOffTime } from "../../../utils/mortage";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let { yourPayment = 0, prinicipal = 0, interestRate = 0, totalPayments = 0 } = req.body;
  const monthlyPayment = fixedMonthlyMortage(prinicipal, interestRate, totalPayments);
  const timeToPayOff = payOffTime(yourPayment, prinicipal, interestRate, totalPayments);
  
  res.status(200).send({ yourPayment, monthlyPayment, prinicipal,  interestRate,  totalPayments, timeToPayOff });
};
