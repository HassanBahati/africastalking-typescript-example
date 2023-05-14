import { NextFunction, Request, Response } from "express";
import {} from "africastalking"

// Define application constants
const message = "I am a fisherman. I sleep all day and work all night!";

// Your login credentials
const shortCode = "insert your shortcode here";
const username = "sandbox";
const apikey = "insert your apikey here";
const options = {
  apiKey: apikey,
  username: username,
};

// GET
export async function fetchSMS(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.send({ title: "This is the SMS handling endpoint" });
}

// POST
export async function smsReceived(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.send({ title: "This is the SMS handling endpoint" });
}
