data =[]
function checkID(id){
    var list = this.data;
    for ( var i =0 ; i< list.length; i++){
        if (list[i].id == id){
            return true;
        }
    }
};

function emailIsValid(email){
   return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
}

function checkInfo(){
    var maSV = document.getElementById('id').value;
    var tenSV = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ghiChu = document.getElementById('note').value;
    var interests = '';
    var country = document.getElementById('country').value;

    if(document.getElementById)   
    if(_.isEmpty(country)){
        document.getElementById('country-error').innerHTML = 'Vui lòng Chọn quốc gia'
    }
    else{
        document.getElementById('country-error').innerHTML = ''
    }


    if(_.isEmpty(maSV)){
        document.getElementById('id-error').innerHTML = 'Vui lòng nhập mã SV'
    }
    else{
        document.getElementById('id-error').innerHTML = ''
    }

    if(_.isEmpty(tenSV)){
        document.getElementById('name-error').innerHTML = 'Vui lòng nhập tên SV'
    }
    else{
        document.getElementById('name-error').innerHTML = ''
    }

    if(_.isEmpty(email)){
        document.getElementById('email-error').innerHTML = 'Vui lòng nhập email'
    }else if(!emailIsValid(email)){
        document.getElementById('email-error').innerHTML = 'Email ko đúng định dạng'
    }
    else{
        document.getElementById('email-error').innerHTML = ''
    }


    if(ghiChu.length>20){
        document.getElementById('note-eror').innerHTML = "Vui lòng nhập dưới 20 kí tự"
    }
    else{
        document.getElementById('note-error').innerHTML = ''
    }


    if(maSV && tenSV && email && ghiChu && country && interests){
        return true;

    }
}

function add(){
    event.preventDefault();
    var maSV = document.getElementById('id').value;
    var tenSV = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ghiChu = document.getElementById('note').value;
    
    if(checkID(maSV)){
        alert("tên tài khoản đã tồn tại")
    }else if(checkInfo()){
        alert("Đăng kí thành công")
    }   
}
