"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsMsg = exports.UpdateUserMsg = exports.RegisterStudentMsg = exports.updateSchoolMsg = exports.createSchoolMsg = void 0;
const school = "Global Skills Seekers";
// WHEN School IS create
const createSchoolMsg = (school_name, user_email, password) => {
    return `<div>
    <h3>Dear Principal ${school_name}:</h3>
    <p>We did receive your Email</p>
    <p>Your Registration Email is : ${user_email} and password is :${password}</p>
    <p>Thank you for your trust to do business with ${school}</p>
    <p>Thanks, and regards.</p>
    <p>School : ${school}</p>
    </div>`;
};
exports.createSchoolMsg = createSchoolMsg;
const updateSchoolMsg = (school_name, user_email, password) => {
    return `<div>
    <h3>Dear Principal ${school_name}:</h3>
    <p>We did receive your Email</p>
    <p>Your Email is : ${user_email} and password is Updated to :${password}</p>
    <p>Thank you for your trust to do business with ${school}</p>
    <p>Thanks, and regards.</p>
    <p>School : ${school}</p>
    </div>`;
};
exports.updateSchoolMsg = updateSchoolMsg;
// export const ActivatePendingschoolMsg = (
//   school_name: string,
//   email: string | undefined,
//   school: string | undefined,
//   mobile_no: string | undefined,
//   address: string | undefined,
//   school_email: string | undefined
// ) => {
//   return `<div>
//     <h3>Dear Principal ${school_name}:</h3>
//     <p> We are pleased to inform you that your registration is confirm with us.</p>
//     <p>You may please visit our website ${process.env.WEBSITE_URL} and login to your account with your email ID ${school_email}.</p>
//     <p>Your password is the same when you input at the time of registration or may try with Forget Password.</p>
//     <p>Thanks, and regards.</p>
//     <p>${address}</p>
//     <p>${email}</p>
//    <p>${mobile_no}</p>
//     </div>`;
// };
// Student related messages
// WHEN RegisterStudent
const RegisterStudentMsg = (student, password, user_email) => {
    return `<div>
    <h3>Dear ${student}:</h3>
    <p>We did receive your Email</p>
    <p>Your Email is : ${user_email} password is Updated to :${password}</p>
    <p>Thanks, and regards.</p>
    <p>Global-Skills-Seekers</p>
    </div>`;
};
exports.RegisterStudentMsg = RegisterStudentMsg;
// update the user
const UpdateUserMsg = (user, password, user_email) => {
    return `<div>
    <h3>Dear ${user}:</h3>
    <p>We did receive your registration</p>
    <p>Your Registraion email is : ${user_email} password is :${password} you can also change your password with forgot password during Login</p>
    <p>Thanks, and regards.</p>
    <p>Global-Skills-Seekers</p>
    </div>`;
};
exports.UpdateUserMsg = UpdateUserMsg;
// contact us
const contactUsMsg = (name, email, message) => {
    return `<div>
    <p>Name : ${name}</p>
    <p>Email : ${email}</p>
    <p>Message : ${message}</p>
    </div>`;
};
exports.contactUsMsg = contactUsMsg;
