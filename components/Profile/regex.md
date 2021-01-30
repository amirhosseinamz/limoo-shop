## this file is only for note regex scripts

## ref: https://www.rexegg.com/regex-quickstart.html

Minimum eight characters, at least one letter and one number:

"^(?=._[A-Za-z])(?=._\d)[A-Za-z\d]{8,}\$"
Minimum eight characters, at least one letter, one number and one special character:

"^(?=._[A-Za-z])(?=._\d)(?=._[@\$!%_#?&])[A-Za-z\d@$!%*#?&]{8,}\$"
Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

"^(?=._[a-z])(?=._[A-Z])(?=.\*\d)[a-zA-Z\d]{8,}\$"
Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}\$"
Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}\$"
