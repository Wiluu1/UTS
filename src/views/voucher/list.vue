<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Voucher</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your voucher promotion</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-voucher">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Search by invoice number, name, amount..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>CODE VOUCHER</th>
                            <th>VOUCHER NAME</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                            <th>VOUCHER STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_voucher" :key="item.id">
                            <td class="center">{{ item.voucher_code }}</td>
                            <td class="center">{{ item.voucher_name }}</td>
                            <td class="center" ><label class="label-green">{{ item.valid_from }}</label></td>
                            <td class="center" ><label class="label-green">{{ item.valid_until }}</label></td>
                            <td class="center">
                                <div v-if="item.status === 'Active'">
                                    <label class="label-green">Active</label>
                                </div>
                                <div v-else="item.status">
                                    <label class="label-merahdarah">Inactive</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-voucher">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-voucher">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

var valid_until;
var statusVoucher = 'Active';

export default {
	name: 'list-voucher',
	components: {
		Menu,
	},
    data(){
        return {
            list_voucher: [
                {
                    id: "1",
                    voucher_code: "CERIA1",
                    voucher_name: "PROMO",
                    valid_from: "01-06-2023",
                    valid_until: "03-06-2023",
                    status: statusVoucher,
                    urlImg: '../../assets/icons/dcsopi.jpg'
                },
                {
                    id: "2",
                    voucher_code: "CERIA2",
                    voucher_name: "PROMO",
                    valid_from: "04-06-2023",
                    valid_until: "06-06-2023",
                    status: statusVoucher,
                    urlImg: '../../assets/icons/dcsopi.jpg'
                    
                },
                {
                    id: "3",
                    voucher_code: "CERIA3",
                    voucher_name: "PROMO 12.12",
                    valid_from: "07-06-2023",
                    valid_until: "09-06-2023",
                    status: 1,
                    urlImg: '../../assets/icons/dcsopi.jpg'
                }
            ]
        }
    }
}

function validateVoucher(statusVoucher) {
    var tanggalTenggangInput = valid_until;
    // Mendapatkan nilai tanggal dari elemen input
    var tanggalTenggangValue = tanggalTenggangInput.value;

    // Membuat objek Date dari nilai tanggal
    var tanggalTenggang = new Date(tanggalTenggangValue);

    // Mendapatkan format lokal dari tanggal
    var formattedDate = tanggalTenggang.toLocaleDateString();

    // Menetapkan nilai kembali ke elemen input dengan format tanggal
    tanggalTenggangInput.value = formattedDate;

    var today = new Date();

    // Membandingkan tanggal dan status untuk menentukan status voucher
    if (tanggalTenggang <= today && statusVoucher.value === 'Active') {
        statusVoucher = 'Inactive';
    } else {
        statusVoucher = 'Active';
    }
    return statusVoucher;
}
</script>