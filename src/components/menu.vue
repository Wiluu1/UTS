<template>
    <div class="container">
        <div class="row">
            <div class="col center">
                <router-link to="/list-user" @click.native="handleClick('use')">
                    <div  >
                        User<hr  :class="{ 'uline-green': activeMenu === 'use', 'uline-grey': activeMenu !== 'use' }" >
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-voucher" @click.native="handleClick('pr')">
                    <div >
                        Product<hr :class="{ 'uline-green': activeMenu === 'pr', 'uline-grey': activeMenu !== 'pr' }">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-voucher" @click.native="handleClick('vo')">
                    <div >
                        Voucher<hr  :class="{ 'uline-green': activeMenu === 'vo', 'uline-grey': activeMenu !== 'vo' }">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Banner<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Plannogram<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Article<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Notification<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Delivery Method<hr class="uline-grey">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Menu',
        data(){
            return {
                activeMenu: "use",
                klik: true,
            }
        },
        
        methods: {
            handleClick(menu) {
                this.activeMenu = menu
                console.log(this.activeMenu)
            },
            isActive(menu) {
                return this.$store.state.activeMenu === menu;
            },
        },
    }
</script>

<style>
.uline-green {
    border: 1px solid #10B989; margin: 5px 0;
}

.uline-grey {
    border: 1px solid #D1D1D1; margin: 5px 0;
}
</style>