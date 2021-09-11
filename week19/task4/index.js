class Validator {
    isEmail(email) {
        this.email = email;
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(this.email);
    }
    isDomain(domain) {
        this.domain = domain;
        return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(this.domain);
    }
    isDate(date) {
        this.date = date;
        return /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(this.date);
    }
    isPhone(phone) {
        this.phone = phone;
        return /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/.test(this.phone);
    }

}
let validator = new Validator();
console.log(validator.isEmail("alisa@mail.ru"));
console.log(validator.isPhone("+7 910 1234567"));
console.log(validator.isDomain("itgirlscool.ru"));
console.log(validator.isDate("12.09.2021"));


class ValidatorStatic {
    static isEmail(email) {
        this.email = email;
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(email);
    }
    static isDomain(domain) {
        this.domain = domain;
        return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(this.domain);
    }
    static isDate(date) {
        this.date = date;
        return /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(this.date);
    }
    static isPhone(phone) {
        this.phone = phone;
        return /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/.test(this.phone);
    }

}

console.log(ValidatorStatic.isEmail("alisa@mail.ru"));
console.log(ValidatorStatic.isPhone("+7 910 1234567"));
console.log(ValidatorStatic.isDomain("itgirlscool.ru"));
console.log(ValidatorStatic.isDate("12.09.2021"));

