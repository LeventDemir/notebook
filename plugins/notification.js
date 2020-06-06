import Vue from "vue"
import Vuex from "vuex"


const notificationElemenet = document.getElementById('notification')



const notification = data => {
    notificationElemenet.classList.toggle("is-hidden")

    notificationElemenet.firstChild.lastChild.innerText = data.msg
    notificationElemenet.firstChild.classList.add(data.class)

    setTimeout(() => {
        notificationElemenet.classList.toggle("is-hidden")
        notificationElemenet.firstChild.classList.remove(data.class)
    }, 5000)
}


Vue.prototype.$notification = notification
Vuex.Store.prototype.$notification = notification