import { FC, useCallback, useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Modal, Result, Spin } from 'antd'
import _ from 'lodash'
import { fadeIn } from 'react-animations'
import Radium, { StyleRoot } from 'radium'
import { SpellCard, SpellDetails } from '../../molecules'
import { useSpells } from '../../../queries'
import { spellStore } from '../../../store/spellStore'

const styles = {
  bounce: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'bounce'),
  },
}

const Spells: FC = () => {
  const { data: spellsData, error, isLoading } = useSpells({ enabled: true })
  const { currentSpell } = useSnapshot(spellStore)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [spellCount, setSpellsCount] = useState(20)

  useEffect(() => {
    if (currentSpell) {
      setIsModalOpen(prevState => !prevState)
    }
  }, [currentSpell])

  const closeModal = useCallback(() => {
    setIsModalOpen(prevState => !prevState)
    spellStore.setCurrentSpell(null)
  }, [currentSpell])

  const onCountClick = () => {
    setSpellsCount(prevCount =>
      prevCount === 20 ? (spellsData?.spells?.length as number) : 20,
    )
  }

  if (isLoading) {
    return (
      <section className="bg-no-repeat dark:bg-[#0B1120] min-h-[85.8vh] text-center">
        <Spin size="large" className="mt-10 pt-[20vh]" />
      </section>
    )
  }

  if (error) {
    return (
      <div>
        <Result
          status="403"
          title="Error occured"
          subTitle="Error occured. Please try again later"
        />
      </div>
    )
  }

  return (
    <>
      <section className="bg-no-repeat dark:bg-[#0B1120] min-h-[87.4vh] pb-10 pr-10 pl-10">
        <h3 className="text-6xl text-white text-center pt-10 mb-12">Spells</h3>
        <div className="m-auto max-w-[1480px]">
          <StyleRoot>
            <div
              className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3"
              style={styles.bounce}
            >
              {spellsData?.spells?.slice(0, spellCount).map(spell => {
                return (
                  <SpellCard
                    key={spell.id}
                    id={spell.id}
                    name={spell.name}
                    desc={spell.desc}
                    level={spell.level}
                  />
                )
              })}
            </div>
          </StyleRoot>
        </div>
        <div className="mt-5 text-center">
          <button
            className="dark:bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCountClick}
          >
            {spellCount === 20 ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </section>

      <Modal
        title={_(_.capitalize(currentSpell)).replace('-', ' ')}
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        className=""
      >
        <SpellDetails />
      </Modal>
    </>
  )
}

export { Spells }
