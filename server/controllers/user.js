import { User } from '../models/user.js';

function success(res, payload) {
    return res.status(200).json(payload)
}

export const getUsers = async (req,res) => {
    try {
      const users = await User.find({})
      return success(res, users)
    } catch (err) {
      console.log(err)
    }
}
