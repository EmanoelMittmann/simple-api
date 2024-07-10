const IS_HEXADECIMAL = (ch: string) => "0123456789abcdef".includes(ch.toLocaleLowerCase())

export function IS_VALID_UUID(uuid: string) {
    const regexExp = new RegExp(/[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    return regexExp.test(uuid)
}