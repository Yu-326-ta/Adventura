import { create } from 'zustand'

type EditTask = {
  id: number
  title: string
}

type State = {
  editedTask: EditTask
  updateEditedTask: (payload: EditTask) => void
  resetEditTask: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { id: 0, title: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditTask: () => set({ editedTask: { id: 0, title: '' } }),
}))

export default useStore