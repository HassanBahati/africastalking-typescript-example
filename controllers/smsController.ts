import { NextFunction, Request, Response } from "express";

// GET
export async function fetchSMS(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.send({ title: "This is the SMS handling endpoint" });
}

// POST
export async function smsReceived(req: any, res: any, next: any) {
  res.rend({ title: "This is the SMS handling endpoint" });
}
