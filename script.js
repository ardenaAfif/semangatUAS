let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let ti;
let hmp;

if (url.searchParams.get('in') != null) {
    ti = url.searchParams.get('in');
} else {
    ti = "Teknik Informatika";
}

let footer  = document.getElementById("credit");
footer.innerHTML = ti;
footer.href = "https://informatika.unida.gontor.ac.id";

function time(){
    var d = new Date();
    var n = d.getHours();
    console.log(n);
    if (n >= 5 && n <= 10){
        return "Pagi"
    } else if (n >= 10 && n <= 14){
        return "Siang"
    } else if (n >= 14 && n <= 18){
        return "Sore"
    } else if (n >= 18 && n <= 24){
        return "Malam"
    }
}

function belajar(){
    switch (time()){
        case "Pagi" :
            return "belajar pagi"
            break;
        case "Siang" :
            return "belajar siang"
            break;
        case "Sore" :
            return "belajar Sore"
            break;
        case "Malam" :
            return "belajar malam"
            break;
        default :
        break;
    }
}

function selesai(){
    const teks  = document.getElementById('teks');
    const btn = document.querySelector(',tombol');
    teks.innerHTML = `Semangat UAS Sayyid ${himatif} <i 
    class="fas fa-himatif text-danger animate__animated animate__himatif animate__repeat-3"></i>`;
    btn.classList.add('d-none');
    teks.classList.remove('d-none');
}

document.querySelector(".tombol").addEventListener('click', function(){
    Swal.fire({
        title: 'Hallo Sayyid',
        html: `Selamat ${time()}, Apakah antum sudah ${belajar()} ini ?`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire(`Kalau belum ${belajar()}, Jangan lupa belajar ya.. Sayyid`).then((result) => {
                Swal.fire({
                    title: ' ',
                    html: `Kami tau antum lagi sibuk banget`,
                    timer: 2500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        Swal.fire({
                            title: ' ',
                            html: `Lagi pusing banget, capek banget`,
                            timer: 2500,
                            timerProgressBar: true,
                            showConfirmButton: false,
                        }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                                Swal.fire('Semangat UAS Sayyid :=)').then((result) => {
                                    Swal.fire(
                                        'Jangan Keseringan Nge-Game !',                                        
                                        '',
                                        'error'
                                    ).then((result) => {
                                        Swal.fire(
                                            'Jangan Keseringan Begadang !',
                                            '',
                                            'error'
                                        ).then((result) => {
                                            Swal.fire(
                                                'Jangan Lupa Belajar !',
                                                '',
                                                'error'
                                            ).then((result) => {
                                                Swal.fire(
                                                    'Jangan Lupa Shalat !',
                                                    '',
                                                    'error'
                                                ).then((result) => {
                                                    Swal.fire('Good Luck for Us').then((result) => {
                                                        Swal.fire({
                                                            title: 'Minta Saran Nih Yid',
                                                            text: 'Apakah ada yang pengin antum sampaikan ?',
                                                            showDenyButton: true,
                                                            confirmButtonText: `Ada dong`,
                                                            denyButtonText: `Ga ada kayanya`,
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                Swal.fire({
                                                                    title: 'Sampaikan Saran Antum',
                                                                    input: 'text',
                                                                    inputPlaceholder: 'Silahkan isi disini',
                                                                    showCancelButton: false,
                                                                    inputValidator: (value) => {
                                                                        if(!value) {
                                                                            return 'Harap Diisi Sayyid'
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            }
                        })
                    }
                })
            })
            
        }
    })
})