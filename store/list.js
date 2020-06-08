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
                    this.$notification({ msg: "List successfully created", class: 'is-success' })
                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else if (response.data.exist) {
                    // send warning notification
                    this.$notification({ msg: "This list already exist", class: 'is-warning' })
                } else {
                    // send error notification
                    this.$notification({ msg: "Something went wrong", class: 'is-danger' })
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
                    this.$notification({ msg: "List successfully updated", class: 'is-success' })
                    // redirect to home page
                    this.$router.push({ name: 'index' })
                } else if (response.data.exist) {
                    // send warning notification
                    this.$notification({ msg: "This list already exist", class: 'is-warning' })
                } else {
                    // send error notification
                    this.$notification({ msg: "Something went wrong", class: 'is-danger' })
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
                    this.$notification({ msg: "List successfully deleted", class: 'is-success' })
                } else {
                    // send error notification
                    this.$notification({ msg: "Something went wrong", class: 'is-danger' })
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