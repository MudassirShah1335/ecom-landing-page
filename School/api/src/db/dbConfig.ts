// // import { Sequelize } from "sequelize-typescript";

// // const Connection = new Sequelize({
// // dialect: "mysql",
// // host: "localhost",
// // username: "root",
// // password: "",
// // database: "school",
// // logging: false,

// //   // dialect: "mysql",
// //   // host: process.env.HOST as string,
// //   // username:  process.env.DB_USER as string,
// //   // password: "",
// //   // database: "school",
// //   // // database: process.env.DB_NAME as string,
// //   // logging: false,
// // });

// // export default Connection;

// // ************************** if you have port and db issues you can use the above approch ***********************
// import { Sequelize } from "sequelize-typescript";
// import dotenv from "dotenv";
// dotenv.config();

// dotenv.config();

// const Connection = new Sequelize(
//   process.env.DB_NAME as string,
//   process.env.DB_USER as string,
//   process.env.DB_PASSWORD as undefined,

//   {
//     // always check the port number of xamp
//     // port: 3307,
//     port: process.env.MYSQL_PORT as any,
//     // Also, the host property in the options object is marked with a non-null assertion operator (!) to indicate that we're sure that process.env.HOST won't be undefined at runtime.
//     host: process.env.HOST!,
//     // host: "localhost",
//     dialect: "mysql",
//     logging: false,
//   }
// );

// export default Connection;

// import { Sequelize } from "sequelize-typescript";

// const Connection = new Sequelize({
// dialect: "mysql",
// host: "localhost",
// username: "root",
// password: "",
// database: "school",
// logging: false,

//   // dialect: "mysql",
//   // host: process.env.HOST as string,
//   // username:  process.env.DB_USER as string,
//   // password: "",
//   // database: "school",
//   // // database: process.env.DB_NAME as string,
//   // logging: false,
// });

// export default Connection;

// ************************** if you have port and db issues you can use the above approch ***********************
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

dotenv.config();

const Connection = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as undefined,
  // "z2y5gr9hpwyzp2qo",
  // "hkwiqc2zow9z09bw",
  // "dm7f4eppdt4xvkte",

  {
    // always check the port number of xamp;
    port: 3306,
    // port: process.env.MYSQL_PORT as any,
    // Also, the host property in the options object is marked with a non-null assertion operator (!) to indicate that we're sure that process.env.HOST won't be undefined at runtime.
    host: process.env.HOST!,
    // host: "ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    // host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default Connection;
