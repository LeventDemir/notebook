const cookies = require('js-cookie')


export const state = () => ({
    token: null,
    auth: null
})

export const getters = {
    getToken(state) {
        return state.token
    },
    getAuth(state) {
        return state.auth
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setAuth(state, auth) {
        state.auth = auth
    }
}


export const actions = {
    register({ commit }, user) {
        this.$axios.post('/user/register', user)
            .then(response => {
                if (response.data.token) {
                    // set token to cookies
                    cookies.set('token', response.data.token)
                    // set token to vuex
                    commit('setToken', response.data.token)
                    // set auth to Vuex 
                    commit('setAuth', true)

                    // send success notification
                    this.$toast.global.success("Registration successfully completed")

                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else if (response.data.exist) {
                    // send error notification
                    this.$toast.global.warning("This user is already exist")
                } else {
                    // send error notification
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    login({ commit, dispatch }, user) {
        this.$axios.post('/user/login', user).then(response => {
            if (response.data.token) {
                // set token to cookies
                cookies.set('token', response.data.token)
                // set token to vuex
                commit('setToken', response.data.token)
                // set auth to Vuex 
                commit('setAuth', true)
                // get notes from server
                dispatch('note/notes', null, { root: true })
                // get lists from server
                dispatch('list/lists', null, { root: true })

                // send success notification
                this.$toast.global.success("Logged in")

                // redicect to home page
                this.$router.push({ name: 'index' })
            } else {
                // send error notification
                this.$toast.global.error("Something went wrong")
            }
        })
    },
    logout({ getters, commit }) {
        this.$axios.post('/user/logout', { token: getters.getToken })
            .then(response => {
                if (response.data.success) {
                    // delete token from cookies
                    cookies.remove('token')
                    //delete token from vuex
                    commit('setToken', null)
                    // delete auth from vuex
                    commit('setAuth', null)
                    // delete notes from vuex
                    commit('note/setNotes', [], { root: true })
                    // delete lists from vuex
                    commit('list/setLists', [], { root: true })

                    // send success notification
                    this.$toast.global.success("Logged out")

                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else {
                    this.$toast.global.error("Something went wrong")
                }
            })
    },
    isAuth({ getters, commit }) {
        return this.$axios.get('/user/is-auth', { params: { token: getters.getToken } })
            .then(response => commit('setAuth', response.data.auth || false))
    }
}