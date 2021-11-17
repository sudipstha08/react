import { useState, useMemo } from 'react'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

const useUndoableState = init => {
  const [states, setStates] = useState([init])
  const [index, setIndex] = useState(0)

  const setState = value => {
    if (isEqual(state, value)) {
      return
    }

    const copy = cloneDeep(states)
    copy.length = index + 1
    copy.push(value)
    setStates(copy)
    setIndex(copy.length - 1)
  }

  const state = useMemo(() => states[index], [states, index])

  const resetState = init => {
    setIndex(0)
    setStates([init])
  }

  const goBack = (steps = 1) => {
    setIndex(Math.max(0, Number(index) - Number(steps) || 1))
  }

  const goForward = (steps = 1) => {
    setIndex(Math.min(states.length - 1, Number(index) + (Number(steps) || 1)))
  }

  return {
    state,
    setState,
    resetState,
    index,
    lastIndex: states.length - 1,
    goBack,
    goForward,
  }
}

export { useUndoableState }
