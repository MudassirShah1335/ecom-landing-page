const school = "Global Skills Seekers";
// WHEN School IS create
export const createSchoolMsg = (
  school_name?: string,
  user_email?: string | undefined,
  password?: string | undefined
) => {
  return `<div>
    <h3>Dear Principal ${school_name}:</h3>
    <p>We did receive your Email</p>
    <p>Your Registration Email is : ${user_email} and password is :${password}</p>
    <p>Thank you for your trust to do business with ${school}</p>
    <p>Thanks, and regards.</p>
    <p>School : ${school}</p>
    </div>`;
};

export const updateSchoolMsg = (
  school_name?: string,
  user_email?: string | undefined,
  password?: string | undefined
) => {
  return `<div>
    <h3>Dear Principal ${school_name}:</h3>
    <p>We did receive your Email</p>
    <p>Your Email is : ${user_email} and password is Updated to :${password}</p>
    <p>Thank you for your trust to do business with ${school}</p>
    <p>Thanks, and regards.</p>
    <p>School : ${school}</p>
    </div>`;
};

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
export const RegisterStudentMsg = (
  student?: string,
  password?: string | undefined,
  user_email?: string | undefined
) => {
  return `<div>
    <h3>Dear ${student}:</h3>
    <p>We did receive your Email</p>
    <p>Your Email is : ${user_email} password is Updated to :${password}</p>
    <p>Thanks, and regards.</p>
    <p>Global-Skills-Seekers</p>
    </div>`;
};

// update the user
export const UpdateUserMsg = (
  user?: string,
  password?: string | undefined,
  user_email?: string | undefined
) => {
  return `<div>
    <h3>Dear ${user}:</h3>
    <p>We did receive your registration</p>
    <p>Your Registraion email is : ${user_email} password is :${password} you can also change your password with forgot password during Login</p>
    <p>Thanks, and regards.</p>
    <p>Global-Skills-Seekers</p>
    </div>`;
};

// contact us
export const contactUsMsg = (
  name?: string,
  email?: string | undefined,
  message?: string | undefined
) => {
  return `<div>
    <p>Name : ${name}</p>
    <p>Email : ${email}</p>
    <p>Message : ${message}</p>
    </div>`;
};
