import { URL } from 'node:url'
import { Buffer } from 'node:buffer'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

async function load(relative) {
  const source = await readFile(new URL(relative, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}
const { orientProject } = await load('../src/lib/orientation.ts')
const { isFormSuccess } = await load('../src/lib/form-response.ts')
const expected = {
  public: { ponctuel: ['site', 'site'], regulier: ['site', 'site'], telephone: ['application', 'site'] },
  clients: { ponctuel: ['site', 'reprise'], regulier: ['application', 'reprise'], telephone: ['application', 'reprise'] },
  equipe: { ponctuel: ['outil', 'reprise'], regulier: ['outil', 'reprise'], telephone: ['outil', 'reprise'] },
}
for (const [audience, usages] of Object.entries(expected)) {
  for (const [usage, results] of Object.entries(usages)) {
    for (const [index, existing] of ['nouveau', 'existant'].entries()) {
      test(`orientation : ${audience}, ${usage}, ${existing}`, () => assert.equal(orientProject({ audience, usage, existing }), results[index]))
    }
  }
}
test('aucune recommandation tant que les trois réponses ne sont pas renseignées', () => {
  for (const field of ['audience', 'usage', 'existing']) {
    assert.equal(orientProject({ audience: 'clients', usage: 'regulier', existing: 'nouveau', [field]: '' }), null)
  }
})
test('un succès applicatif explicite est nécessaire pour comptabiliser une demande', () => {
  for (const payload of [null, undefined, false, true, {}, { success: false }, { success: 'false' }, { success: 1 }, { message: 'success' }]) assert.equal(isFormSuccess(payload), false)
  for (const payload of [{ success: true }, { success: 'true' }]) assert.equal(isFormSuccess(payload), true)
})
