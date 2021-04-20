$('.nav-link').on('click', function () { //jquery tolong carikan saya element yang nama kelassnya nav-link ,pada saat dia diklik jalankan fungsi dibawah

    $('.nav-link').removeClass('active');//ketika nav-link ditekan hilangkan semua klass nav-link yang aktif

    $(this).addClass('active');//this adalah li yang kita klik,pada saat saya mengklik tambahkan kelas baru aktif

})