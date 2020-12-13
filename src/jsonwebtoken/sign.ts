type signOptionsSchemaType = {
    isValid: (value: any)=> void | any
    message: string
}

interface signOptionsSchemaInterface {
    expiresIn: signOptionsSchemaType
    notBefore: signOptionsSchemaType
    audience: signOptionsSchemaType
    algorithm: signOptionsSchemaType
}
export interface signInterface {
    payload: any,
    secretOrPrivateKey:any,
    options: any,
    callback: any
}


const signJwt = (props: signInterface) => {
    console.log("sign executed", props)
}

export default signJwt
