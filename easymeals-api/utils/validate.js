const { ValueError } = require('../errors')

function validate(params) {
    params.forEach(({ key, value, type, optional }) => {
        switch (true) {
            case type === 'string':
                if (optional && value == null) break

                if (typeof value !== 'string') throw TypeError(`${value} is not a string`)

                if (!value.trim().length) throw new ValueError(`${key} is empty or blank`)

                break
            case type === 'boolean':
                if (optional && value == null) break

                if (typeof value !== 'boolean') throw TypeError(`${value} is not a boolean`)

                break
            case type === 'number':
                if (optional && value == null) break

                if (typeof value !== 'number') throw TypeError(`${value} is not a number`)

                break
            case type instanceof Array:
                if (optional && value == null) break

                if (!(value instanceof Array)) throw TypeError(`${value} is not an array`)

                const [_type] = type

                value.forEach(item => {
                    if (optional && item == null) return

                    if (!(typeof item === _type)) throw TypeError(`${item} inside array is not a ${_type}`)
                })
                break
            case type === 'object':
                if (optional && value == null) break

                if (value.constructor !== Object) throw TypeError(`${value} is not an object`)

                break
        }
    })
}

module.exports = validate