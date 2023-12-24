import user from "../models/user.model";

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userDoc = await user.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
};
