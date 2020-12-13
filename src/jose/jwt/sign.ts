import {ALGORITHMS} from "../../../jws.ts";

type signOptionsSchemaType = {
    isValid?: (value: any) => void | any
    message?: string
}

interface signOptionInterface {
    expiresIn: signOptionsSchemaType,
    notBefore: signOptionsSchemaType,
    audience: signOptionsSchemaType,
    algorithm: signOptionsSchemaType,
    header: signOptionsSchemaType,
    encoding: signOptionsSchemaType,
    issuer: signOptionsSchemaType,
    subject: signOptionsSchemaType,
    jwtid: signOptionsSchemaType,
    noTimestamp: signOptionsSchemaType,
    keyid: signOptionsSchemaType,
    mutatePayload: signOptionsSchemaType,
}

export interface signInterface {
    payload: object
    secretOrPrivateKey: String | Number,
    options: Partial<signOptionInterface>,
    callback: () => void
}

interface headerInterface {

}


const signJwt = (props: signInterface) => {
    const {options, callback, payload, secretOrPrivateKey} = props
    let signOptionSchema: Record<string, signOptionsSchemaType> = {
        "expiresIn": {},
        "notBefore": {},
        "audience": {},
        "algorithm": {},
        "header": {},
        "encoding": {},
        "issuer": {},
        "subject": {},
        "jwtid": {},
        "noTimestamp": {},
        "keyid": {},
        "mutatePayload": {}
    }

    let header = Object.assign({
        alg: options.algorithm || ALGORITHMS.HS256,
        typ: "JWT",
        kid: options.keyid
    }, options?.header)

}

export default signJwt
