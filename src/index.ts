import express,{Response, Request} from "express"
import { createYoga } from "graphql-yoga";
import { PrismaClient } from "./generated/prisma/index.js";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createContext } from "./graphql/context.js";
import { schema } from "./graphql/schema.js";


const app = express();
const PORT = 5000;
const yoga = createYoga({
  schema: schema,
  context: async() => await createContext(),
  graphqlEndpoint: "/api/v1/graphql"
});


export const prisma = new PrismaClient().$extends(withAccelerate());

app.use(yoga.graphqlEndpoint, yoga);

app.use(/(.*)/, (req: Request, res: Response) => {
  res.status(404).json({ error: 'Resource not found' });
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}/api/v1/graphql`);
});