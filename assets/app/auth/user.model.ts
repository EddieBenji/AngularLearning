export class User {
    constructor(public email: string,
                public password: string,
                //The '?' means OPTIONAL.
                public firstName?: string,
                public lastName?: string) {
    }
}