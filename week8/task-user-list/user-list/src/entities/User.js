class User {
    constructor(user) {
        this.userName = `${user.name.title}  ${user.name.first} ${user.name.last}`;
        this.userPicture = user.picture.medium;
        this.userEmail = user.email;
        this.emailString = this.email();
        this.dayOfBirth = user.dob;
        this.birthString = this.dataBirth();
        this.gender = user.gender;
    }
    email(){
        const firs = this.userEmail.split('.')[0].slice(0, -3)+ "...";
        const last = this.userEmail.split('.')[1].slice(3);
        const email =`${firs}${last}`;
        return email;
    }
    dataBirth(){
        const jsonData = new Date (this.dayOfBirth);
        const day = jsonData.getDay()+1;
        const month = jsonData.getUTCMonth()+1;
        const year = jsonData.getFullYear();
        const birthDate = `${day}.${month}.${year}`;
        return birthDate;
    }
}

export default User;