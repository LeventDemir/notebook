import { get } from "mongoose"

export const state = () => ({
    lists: []
})

export const getters = {
    getLists(state) {
        return state.lists
    }
}

export const mutations = {
    setLists(state, lists) {
        state.lists = lists
    }
}

export const actions = {
    create({ rootGetters, dispatch }, name) {
        console.info(name)
        this.$axios.post('/list/create', { token: rootGetters['user/getToken'], name })
            .then(response => {
                if (response.data.success) {
                    // get lists
                    dispatch('lists')
                    // send success notification
                    this.$toast.global.success("List successfully created")
                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else if (response.data.exist) {
                    // send warning notification
                    this.$toast.global.warning("This list already exist")
                } else {
                    // send error notification
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    update({ rootGetters, dispatch }, list) {
        this.$axios.post('/list/update', { token: rootGetters['user/getToken'], ...list })
            .then(response => {
                if (response.data.success) {
                    // get notes 
                    dispatch('lists')
                    // send success notification
                    this.$toast.global.success("List successfully updated")
                    // redirect to home page
                    this.$router.push({ name: 'index' })
                } else if (response.data.exist) {
                    // send warning notification
                    this.$toast.global.warning("This list already exist")
                } else {
                    // send error notification
                    this.$toast.global.error({ msg: "Something went wrong", class: 'is-danger' })
                }
            })
    },
    delete({ rootGetters, dispatch }, id) {
        this.$axios.post('/list/delete', { token: rootGetters['user/getToken'], id })
            .then(response => {
                if (response.data.success) {
                    // get notes 
                    dispatch('lists')
                    // send success notification
                    this.$toast.global.success("List successfully deleted")
                } else {
                    // send error notification
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    lists({ rootGetters, commit }) {
        return this.$axios.get('/list/lists', { params: { token: rootGetters['user/getToken'] } })
            .then(response => {
                if (response.data.lists) {
                    commit('setLists', response.data.lists)
                }
            })
    }
}