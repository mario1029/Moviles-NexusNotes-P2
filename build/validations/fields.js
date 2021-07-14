"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkResult = exports.taskValidation = exports.loginFieldsValidation = exports.updateUserFieldsValidation = exports.signUpFieldsValidation = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
exports.signUpFieldsValidation = [
    express_validator_2.check('alias').notEmpty({ ignore_whitespace: true }).withMessage('Es necesario un alias').isString().isLength({ min: 4 }).withMessage('Alias invalido, de tener por lo menos 4 caracteres'),
    express_validator_2.check('correo').notEmpty({ ignore_whitespace: true }).withMessage('Falta un correo').isEmail().withMessage('Correo invalido'),
    express_validator_2.check('descripcion').notEmpty({ ignore_whitespace: true }).withMessage('Falta descripcion').isString().isLength({ min: 10 }).withMessage('Descripcion invalida, la descripcion debe de ser de almenos 10 caracteres'),
    express_validator_2.check('contrasenia').notEmpty({ ignore_whitespace: true }).withMessage('Falta una contraseña').isLength({ min: 4, max: 20 }).withMessage('Contrasenia invalida, debe tener una longitud de 4 a 20 caracteres'),
];
exports.updateUserFieldsValidation = [
    express_validator_2.check('alias').notEmpty({ ignore_whitespace: true }).withMessage('Es necesario un alias').isString().isLength({ min: 4 }).withMessage('Alias invalido, de tener por lo menos 4 caracteres'),
    express_validator_2.check('correo').notEmpty({ ignore_whitespace: true }).withMessage('Falta un correo').isEmail().withMessage('Correo invalido'),
    express_validator_2.check('descripcion').notEmpty({ ignore_whitespace: true }).withMessage('Falta descripcion').isString().isLength({ min: 10 }).withMessage('Descripcion invalida, la descripcion debe de ser de almenos 10 caracteres'),
];
exports.loginFieldsValidation = [
    express_validator_2.check('correo').notEmpty({ ignore_whitespace: true }).withMessage('Falta un correo').isEmail().withMessage('Correo invalido'),
    express_validator_2.check('contrasenia').notEmpty({ ignore_whitespace: true }).withMessage('Falta una contraseña').isLength({ min: 4, max: 20 }).withMessage('Contrasenia invalida, debe tener una longitud de 4 a 20 caracteres')
];
exports.taskValidation = [
    express_validator_2.check('titulo').notEmpty({ ignore_whitespace: true }).withMessage('Falta un titulo').isString().withMessage('titulo invalido'),
    express_validator_2.check('contenido').notEmpty({ ignore_whitespace: true }).withMessage('Falta el contenido').isString().isLength({ min: 10 }).withMessage('contenido debe ser mayor a 10 caracteres'),
    express_validator_2.check('tipo').notEmpty({ ignore_whitespace: true }).withMessage('Falta un tipo').isNumeric().withMessage('tipo invalido'),
    express_validator_2.check('fechaVencimiento').optional().isDate().withMessage('fechaVencimiento invalido'),
    express_validator_2.check('horaVencimiento').optional().isString().withMessage('horaVencimiento invalido'),
    express_validator_2.check('fechaNotificacion').optional().isDate().withMessage('fechaNotificacion invalido'),
    express_validator_2.check('horaNotificacion').optional().isString().withMessage('horaNotificacion invalido'),
];
const checkResult = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            status: 400,
            message: 'Error en datos enviados',
            error: errors.array()[0],
        });
    }
    else {
        next();
    }
};
exports.checkResult = checkResult;
//# sourceMappingURL=fields.js.map