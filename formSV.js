var SV = [];

function checkID(id){
    var list = this.SV;
    for ( var i =0 ; i< list.length; i++){
        if (list[i].id == id){
            return true;
        }
    }
}

function checkInfo(){
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var math = parseInt(document.getElementById('math').value);
    var literature = parseInt(document.getElementById('literature').value);
    var english = parseInt(document.getElementById('english').value);
    
    if (id && name  && date && math && literature && english){
        return true;

    }else{
        alert('Vui lòng nhập thông tin')
    }

}

function DTB(){
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var math = parseInt(document.getElementById('math').value);
    var literature = parseInt(document.getElementById('literature').value);
    var english = parseInt(document.getElementById('english').value);

 
    var dTB = (math*2+literature*2+english)/5
        function xeloai(){ if(dTB>8){
            return "Giỏi"
        }else if(dTB>6.5){
            return "Khá"
        }else if(dTB> 5){
            return "Trung Bình"
        }else{
            return "yếu"
        } 
    }
    
    var item = {
        id : id,
        name : name,
        date : date,
        math : math,
        literature : literature,
        english : english,
        dTB : dTB,
        xeploai : xeloai(),
    };
    if(checkID(id)){
        confirm('Bạn Chắc chắn thay đổi')
        let index = SV.findIndex((c) => c.id == item.id)
        if(index >= 0){
            SV.splice(index,1,item)
        }else{
            SV.push(item)
        }
    }else if(checkInfo()){
        this.SV.push(item);
        console.log(SV);
        
    } 
    View();
    
}
function View(){
    var list = this.SV;
    var datas = '<table><tr><td>STT</td><td>Mã SV</td><td>Tên SV</td><td>Ngày Sinh</td><td>Điểm toán</td><td>Điểm văn</td><td>Điểm Anh</td><td>Điểm TB</td><td>Xếp loại</td></tr>';
    for (var i = 0; i < list.length; i++){
       
        
        datas += "<tr>";
        datas += "<td>" + (i+1) + "</td>";
        datas += "<td>" + list[i].id + "</td>"; 
        datas += "<td>" + list[i].name + "</td>"; 
        datas += "<td>" + list[i].date + "</td>"; 
        datas += "<td>" + list[i].math + "</td>"; 
        datas += "<td>" + list[i].literature + "</td>";
        datas += "<td>" + list[i].english + "</td>"; 
        datas += "<td>" + list[i].dTB + "</td>";
        datas += "<td>" + list[i].xeploai + "</td>";
        datas += "<td><button onclick='Deletes(" + list[i].id + ")'>Xóa</button>";
        datas += "<td><button onclick='editItem(" + list[i].id + ")'>Edit</button>";
        datas += "</tr>";
        
    }
    datas += '</table>';

    if (list.length != 0) {
        document.getElementById('database').innerHTML = datas;
    }else{
            document.getElementById('database').innerHTML = '';
    }
}

function Deletes(id){
    var list = this.SV;
    var check = confirm("Bạn chắc chắn muốn xoá!!");
    if(check){
        for( var i =0; i< list.length; i++){
            if(list[i].id == id){
                list.splice(i,1);
            }
        }
    }
    View();

}
function editItem(id){
    for(let i = 0; i< SV.length;i++){
        if(SV[i].id == id){
            document.getElementById('id').value = SV[i].id;
            document.getElementById('name').value = SV[i].name;
            document.getElementById('date').value = SV[i].date;
            document.getElementById('math').value = SV[i].math;           
            document.getElementById('literature').value = SV[i].literature;
            document.getElementById('english').value = SV[i].english;
        }
    }
}
function sortlist(){
    for(let i = 0; i<SV.length; i++){
        
        SV.sort((a, b) => (a.dTB < b.dTB) ? 1 : -1)
    }
    View();
}


// function ex2(){
//     var s = 0;
//     var n = 0;
//     for(i=0,i<1000,i++){

//     }
//     console.log(" Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000 là: N=  " +n)
// }
ex2();
function ex3(){
    var soa = document.getElementById('soa').value;
    var sob = document.getElementById('sob').value;
    
     var temp1 = soa;
     var temp2 = sob;
    while (temp1 != temp2) {
        if (temp1 > temp2) {
            temp1 -= temp2;
        } else {
            temp2 -= temp1;
        }
    }
        uscln = temp1;
    alert("UCLN"+" " +uscln)    
}

function Istriangle(){
    var canh1 = parseInt(document.getElementById('canh1').value);
    var canh2 = parseInt(document.getElementById('canh2').value);
    var canh3 = parseInt(document.getElementById('canh3').vuelue);
    
    if(canh1 == canh2 || canh2 == canh3 || canh1 == canh3){
        alert("Tam Giác cân")
    }else if( canh1 == canh2 == canh3){
        alert("Tam Giác đều")
    }else{
        alert("Tam giác thường")
    }
    

}

function isNumbers(){
    var number = parseInt (document.getElementById('numbers').value);
    console.log(number)
    switch (number) {
        case 1:
            alert("Số Một")

            break;
        case 2:
            alert("Số hai")

            break;
        case 3:
            alert("Số Ba")

            break;
        case 4:
            alert("Số bốn")

            break;
        case 5:
            alert('Số năm')
            break;
        case 6:
            alert("Số sáu")

            break;
        case 7:
            alert("Số Bảy")

            break;
        case 8:
            alert("Số Tám")

            break;
        case 9:
            alert("Số Chín")

            break;
        case 10:
            alert('Số Mười')
            break;    
            
        default:
            alert('Mời Bạn nhập lại số từ 1 đến 10');
            break;
    }

}

function ex4(){
   // Thêm 1 phần tử

    var SVV = [1, 4 ,2 , 10 ,9];
   
    // SVV.push('sv4');   
    // console.log("Thêm " ,SVV)
    // // xoa mảng:
    // delete SVV[0];
    // console.log("Xoá: ",SVV)
    // SVV.splice(1,1," SV6");
    // console.log("Sửa: ",SVV)
    // SVV.sort(function(a, b){return b - a});
    // console.log("Sắp xếp", SVV)
    // const find = SVV.find((value) => value ==="sv4");
    // console.log("find", find)

    for(i=0; i<SVV.length; i++){
        if(SVV[i] %2 == 0){
           console.log("sô Chẵn"+ SVV[i])
        }
    }
    var tong= 0;
    for(i=0; i<SVV.length; i++){
        tong+=SVV[i];
    }
    console.log('Tổng: ', tong )
}
ex4();