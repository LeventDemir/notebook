export const state = () => ({
    allNotes: [],
    notes: []
})

export const getters = {
    getAllNotes(state) {
        return state.allNotes
    },
    getNotes(state) {
        return state.notes
    }
}

export const mutations = {
    setNotes(state, data) {
        state.allNotes = data.notes
        state.notes = []

        data.notes.map(note => {
            if (!note.list) {
                state.notes.push(note)
            }
        })

        data.lists.map(list => list.notes = [])

        data.lists.map((list) => {
            data.notes.map(note => {
                if (list._id == note.list) {
                    if (list.notes) {
                        list.notes.push(note)
                    }
                    else {
                        list.notes = [note]
                    }
                }
            })
        })

        this.commit('list/setLists', data.lists, { root: true })
    }
}

export const actions = {
    create({ rootGetters, dispatch }, note) {
        this.$axios.post('/note/create', { token: rootGetters['user/getToken'], ...note })
            .then(response => {
                if (response.data.success) {
                    // get notes 
                    dispatch('notes')
                    // send success notification
                    this.$toast.global.success("Note created successfully")
                    // redicect to home page
                    this.$router.push({ name: 'index', query: { page: "note" } })
                } else {
                    // send error notification
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    update({ rootGetters, dispatch }, note) {
        this.$axios.post('/note/update', { token: rootGetters['user/getToken'], ...note })
            .then(response => {
                if (response.data.success) {
                    // get notes 
                    dispatch('notes')
                    // send success notification
                    this.$toast.global.success("Note successfully updated")
                    // redirect to home page
                    this.$router.push({ name: 'index', query: { page: "note" } })
                } else {
                    // send error notification
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    delete({ rootGetters, dispatch }, id) {
        this.$axios.post('/note/delete', { token: rootGetters['user/getToken'], id })
            .then(response => {
                if (response.data.success) {
                    // get notes 
                    dispatch('notes')
                    // send success notification
                    this.$toast.global.success("Note successfully deleted")
                } else {
                    // send error notification
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    notes({ rootGetters, commit }) {
        return this.$axios.get('/note/notes', { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.notes) {
                    commit('setNotes', { notes: response.data.notes, lists: rootGetters['list/getLists'] })
                }
            })
    },
}