export const state = () => ({
    notes: []
})

export const getters = {
    getNotes(state) {
        return state.notes
    }
}

export const mutations = {
    setNotes(state, notes) {
        state.notes = notes
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
                    this.$notification({ msg: "registration successfully completed", class: 'is-success' })
                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else {
                    // send error notification
                    this.$notification({ msg: "something went wrong", class: 'is-danger' })
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
                    this.$notification({ msg: "Note successfully updated", class: 'is-success' })
                    // redirect to home page
                    this.$router.push({ name: 'index' })
                } else {
                    // send error notification
                    this.$notification({ msg: "something went wrong", class: 'is-danger' })
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
                    this.$notification({ msg: "Note successfully deleted", class: 'is-success' })
                } else {
                    // send error notification
                    this.$notification({ msg: "something went wrong", class: 'is-danger' })
                }
            })
    },
    notes({ rootGetters, commit }) {
        return this.$axios.get('/note/notes', { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.notes) {
                    commit('setNotes', response.data.notes)
                }
            })
    },
}