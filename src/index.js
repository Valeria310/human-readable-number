module.exports = function toReadable (number) {
  number = String(number).split("");
    if (number[0] == 0) {
        delete number[0];
    } else if (number[0] == 0 && number[1] == 0) {
        delete number[0];
        delete number[1];
    } else if (number[0] == 0 && number[1] == 0 && number[2] == 0) {
        delete number[0];
        delete number[1];
        delete number[2];
    }
    let h;
    let t;
    let o;
    if (number[0] == undefined) {
        return "zero";
    }
    if (number[number.length - 1] == 1) {
        o = "one";
    } else if (number[number.length - 1] == 2) {
        o = "two";
    } else if (number[number.length - 1] == 3) {
        o = "three";
    } else if (number[number.length - 1] == 4) {
        o = "four";
    } else if (number[number.length - 1] == 5) {
        o = "five";
    } else if (number[number.length - 1] == 6) {
        o = "six";
    } else if (number[number.length - 1] == 7) {
        o = "seven";
    } else if (number[number.length - 1] == 8) {
        o = "eight";
    } else if (number[number.length - 1] == 9) {
        o = "nine";
    } else if (number[number.length - 1] == 0) {
        o = "zero";
    }
    if (number[number.length - 2] == 2) {
        t = "twenty";
    } else if (number[number.length - 2] == 3) {
        t = "thirty";
    } else if (number[number.length - 2] == 4) {
        t = "forty";
    } else if (number[number.length - 2] == 5) {
        t = "fifty";
    } else if (number[number.length - 2] == 6) {
        t = "sixty";
    } else if (number[number.length - 2] == 7) {
        t = "seventy";
    } else if (number[number.length - 2] == 8) {
        t = "eighty";
    } else if (number[number.length - 2] == 9) {
        t = "ninety";
    }
    if (number[number.length - 3] == 1) {
        h = "one";
    } else if (number[number.length - 3] == 2) {
        h = "two";
    } else if (number[number.length - 3] == 3) {
        h = "three";
    } else if (number[number.length - 3] == 4) {
        h = "four";
    } else if (number[number.length - 3] == 5) {
        h = "five";
    } else if (number[number.length - 3] == 6) {
        h = "six";
    } else if (number[number.length - 3] == 7) {
        h = "seven";
    } else if (number[number.length - 3] == 8) {
        h = "eight";
    } else if (number[number.length - 3] == 9) {
        h = "nine";
    }
    if (number.length == 3) {
        if (number[1] == 0 && number[2] == 0) {
            return h + ` hundred`;
        }
        if (number[1] == 0) {
            return h + ` hundred` + ` ${o}`;
        } else if (number[1] + number[2] == 10) {
            return h + ` hundred` + ` ten`;
        } else if (number[1] + number[2] == 11) {
            return h + ` hundred` + ` eleven`;
        } else if (number[1] + number[2] == 12) {
            return h + ` hundred` + ` twelve`;
        } else if (number[1] + number[2] == 13) {
            return h + ` hundred` + ` thirteen`;
        } else if (number[1] + number[2] == 14) {
            return h + ` hundred` + ` fourteen`;
        } else if (number[1] + number[2] == 15) {
            return h + ` hundred` + ` fifteen`;
        } else if (number[1] + number[2] == 16) {
            return h + ` hundred` + ` sixteen`;
        } else if (number[1] + number[2] == 17) {
            return h + ` hundred` + ` seventeen`;
        } else if (number[1] + number[2] == 18) {
            return h + ` hundred` + ` eighteen`;
        } else if (number[1] + number[2] == 19) {
            return h + ` hundred` + ` nineteen`;
        } else if (number[1] + number[2] == 20) {
            return h + ` hundred` + ` twenty`;
        } else if (number[1] + number[2] == 30) {
            return h + ` hundred` + ` thirty`;
        } else if (number[1] + number[2] == 40) {
            return h + ` hundred` + ` forty`;
        } else if (number[1] + number[2] == 50) {
            return h + ` hundred` + ` fifty`;
        } else if (number[1] + number[2] == 60) {
            return h + ` hundred` + ` sixty`;
        } else if (number[1] + number[2] == 70) {
            return h + ` hundred` + ` seventy`;
        } else if (number[1] + number[2] == 80) {
            return h + ` hundred` + ` eighty`;
        } else if (number[1] + number[2] == 90) {
            return h + ` hundred` + ` ninety`;
        } else {
            return h + ` hundred` + ` ${t}` + ` ${o}`;
        }
    } else if (number.length == 2) {
        if (number[0] + number[1] == 10) {
            return `ten`;
        } else if (number[0] + number[1] == 11) {
            return `eleven`;
        } else if (number[0] + number[1] == 12) {
            return `twelve`;
        } else if (number[0] + number[1] == 13) {
            return `thirteen`;
        } else if (number[0] + number[1] == 14) {
            return `fourteen`;
        } else if (number[0] + number[1] == 15) {
            return `fifteen`;
        } else if (number[0] + number[1] == 16) {
            return `sixteen`;
        } else if (number[0] + number[1] == 17) {
            return `seventeen`;
        } else if (number[0] + number[1] == 18) {
            return `eighteen`;
        } else if (number[0] + number[1] == 19) {
            return `nineteen`;
        } else if (number[0] + number[1] == 20) {
            return `twenty`;
        } else if (number[0] + number[1] == 30) {
            return `thirty`;
        } else if (number[0] + number[1] == 40) {
            return `forty`;
        } else if (number[0] + number[1] == 50) {
            return `fifty`;
        } else if (number[0] + number[1] == 60) {
            return `sixty`;
        } else if (number[0] + number[1] == 70) {
            return `seventy`;
        } else if (number[0] + number[1] == 80) {
            return `eighty`;
        } else if (number[0] + number[1] == 90) {
            return `ninety`;
        } else {
            return `${t}` + ` ${o}`;
        }
    } else if (number.length == 1) {
        return o;
    }
}
