import React, { FC, useCallback } from 'react'
import { Rate } from 'antd'
import { ISpell } from '../../../interfaces'
import { spellStore } from '../../../store/spellStore'

interface ICard {
  id: string
  name: string
  desc: string
  level: ISpell['level']
}

const SpellCard: FC<ICard> = ({ id, name, level }) => {
  const onCardClick = useCallback(() => {
    spellStore.setCurrentSpell(id)
  }, [])

  return (
    <div
      className="flex flex-col bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 cursor-pointer"
      onClick={onCardClick}
    >
      <div className="text-slate-300 font-semibold text-sm">{name}</div>
      <Rate
        defaultValue={level}
        count={10}
        disabled
        value={level}
        className="pt-2"
        allowClear={false}
      />
    </div>
  )
}

export { SpellCard }
