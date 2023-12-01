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
                    <h1 class="m0">Update Voucher</h1>
                    <p class="mt5 mb20 tc-green">Make your customer shop using voucher</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Voucher Image</label>
                </div>
                <div class="voucher-image gg" :style="{ backgroundImage: 'url(' + (imageUrl || defaultImageUrl) + ')'}">
                        <input  type="file" @change="handleFileChange" id="iF" >
                </div> 
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Voucher Code</label>
                </div>
                <div class="w80">
                    <input 
                            id="txt" 
                            v-model="inputText" :maxlength="6"
                            class="form-text txt" 
                            type="text" 
                            placeholder="Input your full name" disabled>
                            <div class="p-kanan" >| {{ letterCount }}/6</div>  
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Voucher Name</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your email"
                    >
                    
                    <div class="p-kanan" >| {{ letterCount }}/6</div> 
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Description</label>
                </div>
                <div class="w80">
                    <textarea 
                    v-model="inputText3" :maxlength="500"
                    class=" form-text description-textarea" 
                    placeholder="Masukan voucher description"></textarea>
                    <div class="p-kanan p-kanan-desk" > | {{ letterCount3 }} /500</div>                        
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Type</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your email"
                    >
                    <div class="p-kanan xPojok" ><img src="../../assets/icons/x.png" width="30%"></div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Min. Transaction</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Minimal Transaction"
                    >
                    <div class="p-kanan xPojok" ><img src="../../assets/icons/x.png" width="30%"></div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Amount</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Amount"
                    >
                    <div class="p-kanan xPojok" ><img src="../../assets/icons/x.png" width="30%"></div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid From</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Tanggal"
                    >
                    <div class="p-kanan xPojok" ><img src="../../assets/icons/x.png" width="30%"></div>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Until</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Tanggal"
                    >
                    <div class="p-kanan xPojok" ><img src="../../assets/icons/x.png" width="30%"></div>
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-user">
                    <button class="bt-submit-green">Update User</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import List from "../voucher/list.vue"

export default {
    components:{
       List
    },
    data(){
        return{
            name: 'detail-voucher',
            imageUrl: null,
            letterCount: 0,
            letterCount2: 0,
            letterCount3: 0,
            defaultImageUrl: require('../../assets/icons/addimg.jpeg'),
        }
    },
    methods: {
            handleFileChange(event) {
                const file = event.target.files[0];
                if (file) {
                    this.imageUrl = URL.createObjectURL(file);
                } else {
                    this.imageUrl = null; // Atur ke null jika tidak ada gambar yang dipilih
                }
            },
        },
    watch: {
            inputText() {
                this.countLetters();          
            },
            inputText2() {
                this.countLetters2();
            },
            inputText3() {
                this.countLetters3();
            }
        },
    methods: {
            changeFile() {
                let file = e.target.files[0];
                this.file = file;
                console.log(this.file);
            },

            countLetters() {
                this.letterCount = this.inputText.length;   
            },
            countLetters2() {
                this.letterCount2 = this.inputText2.length; 
            },
            countLetters3() {
                this.letterCount3 = this.inputText3.length; 
            },
        }
}
</script>

<style>
.xPojok{
  text-align: right;
} 

.p-kanan{
    font-family: sans-serif;
    z-index: 1;
    margin-top: -30px;
    float: right;
    margin-right: 20px;
}


.p-kanan-desk{
    margin-top: -110px;
}

input[type="file"] {
   content: "";
   opacity: 0;
   width: 80px;
   height: 80px;
}

.voucher-image{ 
    display: block;
    width: 10%;
    padding: 10px;
    height: 80px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.gg{
    background-image: url('../../assets/icons/addimg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
}

.description-textarea {
    width: 64,5em; /* Lebar textarea */
    height: 100px; /* Tinggi textarea */
    padding: 10px; /* Padding untuk jarak teks dari tepi textarea */
    user-select: none;
    resize: none;
    font-family: sans-serif;
}
</style>