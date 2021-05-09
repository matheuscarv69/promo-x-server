import { Request, Response } from "express";
import { AuthChecker } from "type-graphql";

interface IContext {
  req: Request;
  res: Response;
}

const roles: String[] = ["admin", "client"];

export const authConfig: AuthChecker<IContext, String> = ({ context }, roles) => {

  const authorization = context.req.headers["authorization"];

  if(!authorization){
    throw new Error("Not Authenticated");
  }

  if(roles.includes(authorization)){
    return true;
  }

  return false;
}