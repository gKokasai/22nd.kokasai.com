new Vue({
    el: '#navbar',
    data: {
        navbarIsActive: false
    },
    methods: {
        showNavbar() {
            return this.navbarIsActive = !this.navbarIsActive
        }
    }
})