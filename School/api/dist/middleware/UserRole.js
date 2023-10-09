"use strict";
// export const IsAdminRole = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user?.role_id)) {
//       return res.json({
//         status: "fail",
//         message: `the ${req.user?.role_id} cannot do it!`,
//       });
//     }
//     return next();
//   };
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAdminRole = void 0;
const IsAdminRole = (...roles) => {
    return (req, res, next) => {
        var _a;
        if (!roles.includes((_a = req.user) === null || _a === void 0 ? void 0 : _a.role_id)) {
            return res.json({
                status: "fail",
                message: `sorry you are not authorised to do this`,
            });
        }
        return next();
    };
};
exports.IsAdminRole = IsAdminRole;
