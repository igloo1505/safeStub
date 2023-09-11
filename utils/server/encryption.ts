import bcryptjs from 'bcrypt'

export const encryptPassword = async (pw: string) => {
    const salt = await bcryptjs.genSalt(10)
    const hashed = await bcryptjs.hash(pw, salt)
    return hashed
}

export const encryptPasswordSync = (pw: string) => {
    const salt = bcryptjs.genSaltSync(10)
    const hashed = bcryptjs.hashSync(pw, salt)
    return hashed
}

export const comparePassword = async (encrypted: string, basis: string) => {
    const isValid = await bcryptjs.compare(basis, encrypted)
    return isValid
}

