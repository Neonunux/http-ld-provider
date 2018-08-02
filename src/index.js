import {generateTable} from '@/data'

export default function (models) {
  console.log('Provider starting with config:')
  console.log(models)
  Object.entries(models).forEach(([name, props]) =>
    generateTable(name, props))
}
