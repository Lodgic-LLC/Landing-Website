/** Un HTTP 200 ne suffit pas : FormSubmit doit confirmer le succès applicatif. */
export function isFormSuccess(payload: unknown): boolean {
  if (!payload || typeof payload !== 'object' || !('success' in payload)) return false
  return payload.success === true || payload.success === 'true'
}
