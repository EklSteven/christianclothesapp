import User from '../models/userModel.js';

const getUserById = async (id) => {
  return await User.findById(id);
};

export default {
  getUserById,
};