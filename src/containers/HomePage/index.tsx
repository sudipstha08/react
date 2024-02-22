import { FC } from 'react'
import { useUndoableState } from '../../components'

interface IProps {
  data?: any
}

const init = { text: 'The quick brown fox jumps over the lazy dog' }

const HomePage: FC<IProps> = () => {
  const {
    state: doc,
    setState: setDoc,
    resetState: resetDoc,
    index: docStateIndex,
    lastIndex: docStateLastIndex,
    goBack: undoDoc,
    goForward: redoDoc,
  } = useUndoableState(init)

  const canUndo = docStateIndex > 0
  const canRedo = docStateIndex < docStateLastIndex
  return (
    <div style={{ display: 'block' }}>
      <textarea
        style={{ margin: '16px' }}
        onChange={event => setDoc({ text: event.target.value })}
        rows={5}
        value={doc.text}
      />
      <div>
        <button
          onClick={() => undoDoc()}
          disabled={!canUndo}
          style={{ marginRight: '8px' }}
        >
          Undo
        </button>
        <button
          onClick={() => redoDoc()}
          disabled={!canRedo}
          style={{ marginRight: '8px' }}
        >
          Redo
        </button>
        <button onClick={() => resetDoc(init)}>Reset</button>
      </div>
    </div>
  )
}

export  {HomePage}
