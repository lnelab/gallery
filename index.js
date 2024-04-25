import { mergeVidpid } from '@/utils'

const files = import.meta.glob('./**/*.json', { eager: true })
const definitions = {}

for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
        const definition = files[key].default
        const vidpid = mergeVidpid(Number(definition.vendorId), Number(definition.productId))
        definitions[vidpid] = definition
    }
}

export default definitions