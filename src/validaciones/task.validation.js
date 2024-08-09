import { check } from "express-validator"
import { validateResult } from "../helpers/validate.helpers.js"

const validateCreate = [
    check('title')
        .exists().withMessage('es obligatorio agregar un titulo')
        .notEmpty().withMessage('el titulo de la tarea es obligatoria')
        .isString().withMessage('el titulo debe ser de tipo texto, no se admiten numeros')
        .isLength({ min: 5 }).withMessage('la tarea tiene que tener un mínimo de 5 caracteres'),
    check('description')
        .exists().withMessage('es obligatorio agregar una descripción')
        .notEmpty().withMessage('el campo de descripción no puede estar vacío')
        .isString().withMessage('la descripción tiene que ser un texto, no se admiten números')
        .isLength({ min: 10 }).withMessage('la descripción tiene que tener un mínimo de 10 caracteres'),
    check('isComplete')
        .exists().withMessage('es obligatorio especificar si está completado')
        .isBoolean().withMessage('el campo "isComplete" debe ser de tipo booleano'),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

export { validateCreate }