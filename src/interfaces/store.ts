export interface ISpellStore {
  currentSpell: string | null
  setCurrentSpell: (id: string | null) => void
}
