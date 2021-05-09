import "dotenv/config";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";

interface IContext {
  req: Request;
}

interface ITokenPayload {
  id: string;
  name: string;
  roles: string;
  iat: number;
  exp: number;
}

export const authConfig: AuthChecker<IContext, String> = ({ context }, methodRolesRequired) => {
  const authorization = context.req.headers["authorization"];

  if (!authorization) {
    throw new Error("Not Authenticated");
  }

  try {
    const token = authorization.replace('Bearer', '').trim();
    const payload = verify(token, process.env.APP_SECRET);
    const { roles } = payload as ITokenPayload;

    if(methodRolesRequired.includes(roles)){
      return true;
    }
  } catch (error) {
    throw new Error("Not Authenticated");
  }

  return false;
}