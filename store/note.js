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
    create({ rootGetters }, note) {
        this.$axios.post('/note/create', { token: rootGetters['user/getToken'], ...note })
            .then(response => {
                if (response.data.success) {
                    // send success notification
                    this.$notification({ msg: "registration successfully completed", class: 'is-success' })
                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else {
                    // send error notification
                    this.$notification({ msg: "something went wrong", class: 'is-danger' })
                }
            })
    }
}