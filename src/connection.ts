import {
  Connector,
  MongoDBConnector,
  MySQLConnector,
  PostgresConnector,
  SQLite3Connector,
} from "../deps.ts";
import { Config } from "../mod.ts";

const mongodb = ({ host, port, name }: Config) =>
  new MongoDBConnector({
    uri: `mongodb://${host}:${port}`,
    database: name,
  });

const mysql = ({ host, port, name, pass, user }: Config) =>
  new MySQLConnector({
    database: name,
    host: host || "localhost",
    username: user || "",
    password: pass || "",
    port: port,
  });

const postgresql = ({ host, port, name, pass, user }: Config) =>
  new PostgresConnector({
    database: name,
    host: host || "localhost",
    username: user || "",
    password: pass || "",
    port: port,
  });

const sqlite = ({ name }: Config) => new SQLite3Connector({ filepath: name });

const Connection = (config: Config): Connector => {
  switch (config.type) {
    case "mongodb":
      return mongodb(config);
    case "mysql":
      return mysql(config);
    case "postgresql":
      return postgresql(config);
    case "sqlite":
      return sqlite(config);
  }
};

export default Connection;
