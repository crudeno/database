import { Database as DenoDB } from "../deps.ts";
import Config from "./config.ts";
import Connection from "./connection.ts";

const Database = (config: Config) => {
  const connection = Connection(config);
  return {
    connect: () => new DenoDB(connection),
  };
};

export default Database;
