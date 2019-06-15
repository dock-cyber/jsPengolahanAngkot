var penumpang = ['Salim', undefined, 'Rafli'];
var tambahPenumpang = function (namaPenumpang, penumpang){
    // Jika angkot kosong
    if(penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i< penumpang.length ; i++){
            // jika ada nama yang sama
            if(penumpang[i] == namaPenumpang){
                // tambil pesan error
                console.log(namaPenumpang +' sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
        for(var i = 0; i< penumpang.length ; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined && namaPenumpang != penumpang[i] ){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            //  jika seluruh kursi terisi
            else if (i == penumpang.length-1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }  
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong 
    if (penumpang.length == 0){
        // tampilkan pesan angkot kosong
        console.log('Angkot masih kosong bambang');
        // kembalikan isi array dan keluar dari function
        
    }
    else{
        // telusuri kursi dari awal
        for(var i = 0; i<penumpang.length; i++){
            // jika nama sesuai
            if(penumpang[i] == namaPenumpang){
                // hapus nama menjadi undifined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika tidak ada nama yg sesuai
            else if(i < penumpang.length -1){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang+' tidak ada di daftar penumpang bambang!');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }         
    }
    return penumpang;
}
