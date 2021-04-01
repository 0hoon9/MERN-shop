import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Test User',
    email: 'tester@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Test User2',
    email: 'tester2@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];
export default users;
