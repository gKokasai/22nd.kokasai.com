new Vue({
    el: '#navbar',
    data: {
        navbarIsActive: true
    },
    methods: {
        showNavbar() {
            return this.navbarIsActive = !this.navbarIsActive
        }
    }
})