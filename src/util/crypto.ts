import * as crypto from 'crypto'
import * as bcrypt from 'bcrypt'

export function hashPassword(password) {
    const salt = bcrypt.genSaltSync(20)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

export function comparePassword(plain, hash) {
    return bcrypt.compareSync(plain, hash)
}



