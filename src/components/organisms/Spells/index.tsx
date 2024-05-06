import { FC, useCallback, useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Modal, Result, Spin } from 'antd'
import { SpellCard, SpellDetails } from '../../molecules'
import { useSpells } from '../../../queries'
import { spellStore } from '../../../store/spellStore'

const Spells: FC = () => {
  const { data: spellsData, error, isLoading } = useSpells({ enabled: true })
  const { currentSpell } = useSnapshot(spellStore)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (currentSpell) {
      setIsModalOpen(prevState => !prevState)
    }
  }, [currentSpell])

  const closeModal = useCallback(() => {
    setIsModalOpen(prevState => !prevState)
    spellStore.setCurrentSpell(null)
  }, [currentSpell])

  if (isLoading) {
    return (
      <section className="bg-no-repeat dark:bg-[#0B1120] min-h-[87.4vh] text-center">
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
          <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spellsData?.spells?.map(spell => {
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
        </div>
      </section>

      <Modal
        title={currentSpell}
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
