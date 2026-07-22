import { Request, Response } from 'express';
import { User } from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log("Fetching users...");

    const users = await User.find({}, 'name email role isActive');

    console.log("Users found:", users);

    res.status(200).json(users);

  } catch (error) {
    console.error("GET USERS ERROR:", error);

    res.status(500).json({
      error: 'Failed to fetch users',
      details: (error as Error).message,
    });
  }
};