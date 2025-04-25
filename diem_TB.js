/**
 ** Đầu vào
 - tạo biến num_1
 - tạo biến num_2
 - tạo biến num_3
 - tạo biến num_4
 - tạo biến num_5

 ** Xử lý
 -tạo biến dtb và gán giá trị là 0
 -dtb được cập nhập giá trị là (num_1+num_2+num_3+num_4+num_5) / 5
 ** Đầu ra
 - in ra tongTien (log)
 -
 -
 */



 let num_1 = prompt("vui long nhap so 1: ");
 let num_2 = prompt("vui long nhap so 2: ");
 let num_3 = prompt("vui long nhap so 3: ");
 let num_4 = prompt("vui long nhap so 4: ");
 let num_5 = prompt("vui long nhap so 5: ");



 //  chuyển đổi kiểu dữ liệu từ string(black) sang number(blue)

 num_1 = Number(num_1);
 num_2 = Number(num_2);
 num_3 = Number(num_3);
 num_4 = Number(num_4);
 num_5 = Number(num_5);


 console.log(num_1);
 console.log(num_1);
 console.log(num_1);
 console.log(num_1);
 console.log(num_1);


 let dtb = 0;
 dtb = (num_1 + num_2 + num_3 + num_4 + num_5) / 5

 console.log("diem trung binh: " + dtb);
 



 
