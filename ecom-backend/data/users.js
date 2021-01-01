import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Admin User2",
    email: "admin2@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Pratik Tiwari",
    email: "pratik@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Priya Tiwari",
    email: "priya@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Rekha Tiwari",
    email: "rekha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Raj Tiwari",
    email: "Raj@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
