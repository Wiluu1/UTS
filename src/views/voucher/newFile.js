export default (await import('vue')).defineComponent({
name: 'list-voucher',
components: {
Menu,
},
data() {
return {
list_voucher: [
{
id: "1",
voucher_code: "ABC123",
voucher_name: "Wily",
valid_from: "25-11-2023",
valid_until: "25-12-2023",
status: 'Active',
urlImg: '../../assets/icons/dcsopi.jpg'
},
{
id: "1",
voucher_code: "ABC123",
voucher_name: "Ramadhan",
valid_from: "25-11-2023",
valid_until: "25-12-2023",
status: 'Active',
urlImg: '../../assets/icons/dcsopi.jpg'
},
{
id: "1",
voucher_code: "ABC123",
voucher_name: "Taufiq",
valid_from: "20-11-2023",
valid_until: "25-11-2023",
status: 1,
urlImg: '../../assets/icons/dcsopi.jpg'
},
{
id: "1",
voucher_code: "ABC123",
voucher_name: "Yuriza",
valid_from: "20-11-2023",
valid_until: "25-11-2023",
status: 2,
urlImg: '../../assets/icons/dcsopi.jpg'
},
{
id: "1",
voucher_code: "ABC123",
voucher_name: "Danis",
valid_from: "20-11-2023",
valid_until: "25-11-2023",
status: 1,
urlImg: '../../assets/icons/dcsopi.jpg'
}
]
};
},
methods: {
updateVoucherStatus(voucher) {
const tanggalTenggang = new Date(voucher.valid_until);
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

voucher.status = tanggalTenggang <= formattedDate ? 'Inactive' : 'Active';
},
},
});
