(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps {
        name     :  string;
        gender   :  Gender;
        birthdate:  Date;
    }

    class Person {
        public birthdate : Date;
        public gender    : Gender;
        public name      : string;

        constructor({birthdate, gender, name} : PersonProps){
            this.name      = name;
            this.birthdate = birthdate;
            this.gender    = gender;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
        lastAccess: Date;
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class User extends Person {
        
        public lastAccess: Date;
        public email     : string;
        public role      : string;

        constructor({lastAccess, email, role, name, gender, birthdate} : UserProps) {
            super( {name, gender, birthdate} );
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder  : string;
        email           : string;
        role            : string;
        name            : string;
        gender          : Gender;
        birthdate       : Date;
    }


    class UserSettings extends User {
        constructor(
            {workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate} : UserSettingsProps
        ) 
        {
            super({email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings(
        {
        workingDirectory:  '/usr/home',
        lastOpenFolder  :  '/home',
        email           :  'fernando@google.com',
        role            :  'Admin',
        name            :  'Fernando',
        gender          :  'M',
        birthdate       :   new Date('1985-10-21')
        }
        
    );

    console.log({ userSettings });


})();