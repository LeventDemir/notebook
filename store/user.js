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
                    this.$notification({ msg: "registration successfully completed", class: 'is-success' })

                    // redicect to home page
                    this.$router.push({ name: 'index' })
                } else if (response.data.exist) {
                    // send error notification
                    this.$notification({ msg: "this user is already exist", class: 'is-danger' })
                } else {
                    // send error notification
                    this.$notification({ msg: "something went wrong", class: 'is-danger' })
                }
            })
    },
    login({ commit }, user) {
        this.$axios.post('/user/login', user).then(response => {
            if (response.data.token) {
                // set token to cookies
                cookies.set('token', response.data.token)
                // set token to vuex
                commit('setToken', response.data.token)
                // set auth to Vuex 
                commit('setAuth', true)

                // send success notification
                this.$notification({ msg: "login successfully performed", class: 'is-success' })

                // redicect to home page
                this.$router.push({ name: 'index' })
            } else {
                // send error notification
                this.$notification({ msg: "something went wrong", class: 'is-danger' })
            }
        })
    }
}