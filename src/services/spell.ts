import { QueryFunction } from '@tanstack/react-query'
import { ISpell } from '../interfaces'
import { API } from '../lib'

export const fetchSpells: QueryFunction<{
  count: number
  results: ISpell[]
}> = async () => {
  const { data } = await API.get(`/spells`, {
    params: {},
  })
  return data
}

export const fetchSpell: QueryFunction<ISpell> = async ({ queryKey }) => {
  const spellId = queryKey?.[1]

  const { data } = await API.get(`/spells/${spellId}`, {})
  return data
}

export const spellService = {
  fetchSpells,
  fetchSpell,
}
