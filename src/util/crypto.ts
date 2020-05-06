import * as bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(password, salt);
};

export const comparePassword = (plain, hash) => {
    return bcrypt.compareSync(plain, hash)
};



