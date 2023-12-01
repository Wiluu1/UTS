<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-voucher">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Detail Voucher</h1>
                    <p class="mt5 mb20 tc-green">Your voucher details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 right">
                <img :src="urlImg" width="50%">
                <div class="mp">
                    <p class="mp abu">CERIA3</p>
                    <h2 class="mp">BOMBASTIS 11.11</h2>
                    <p class="detail-title-bold mp">Voucher Description</p>
                    <P class="mp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, deleniti alias impedit debitis voluptatem eligendi itaque ea inventore magni adipisci aperiam eius, nemo esse distinctio porro! Rerum error harum quos maiores, molestiae ea inventore? Porro veritatis voluptatem velit nam magni necessitatibus explicabo? Asperiores rem aspernatur pariatur excepturi quisquam et numquam.</P>
                    
                    <div class="mp">
                        <p class="detail-title-bold mp">Voucher Category:</p>
                        <p class="abu">CERIA3</p>
                    </div>
                    
                </div>
            </div>
           
            <div class="">
                <p class="detail-title-bold mp">Voucher Description</p>
            </div>
        </div>
    </div>
</template>

<script>
import List from "../voucher/list.vue"

export default {
	name: 'detail-user',
    List,
    data() {
        return {
            urlImg:  require('../../assets/images/voucherimage.jpeg'),
        };
    },
}

</script>

<style>
.right{
    float: right;
    text-align: left;
    margin-top: 30px;
    display: flex;
}

.mp{
    margin-left: 50px;
    margin-bottom: 20px;
}

.abu{
    color: darkgray;
}
</style>