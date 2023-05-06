import { compareSync, hashSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const user = {
  name: "Vinicius Quirino",
  email: "viniciusquirino13@hotmail.com",
  password: hashSync("123456", 10),
  avatar_url: "https://chakra-ui.com/docs/components/toast/usage",
};

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const verifyPassword = compareSync(password, user.password);

  if (email !== user.email || !verifyPassword) {
    return res.status(401).json({ message: "invalid credentials" });
  }
  const token = sign({}, "secret_key", { expiresIn: "1h" });
  return res
    .status(200)
    .json({ token, userName: user.name, avatar: user.avatar_url });
};

export default login;
