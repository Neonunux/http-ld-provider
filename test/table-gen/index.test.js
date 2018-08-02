import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

import provide from '@'

const configPath = path.resolve(__dirname, 'config.yml')
const config = yaml.load(fs.readFileSync(configPath))

provide(config)

function sum(a, b) {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
