export default ({ store, redirect }) => {
    if (!store.state.user.auth) {
        return redirect({ name: 'login' })
    }
}