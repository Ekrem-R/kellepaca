//  1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
//      ornek: “asik veysel“ ==> “Asik Veysel“

let nameString= "ekrem"
let surnameString="bora"
let upperName=nameString.slice(0).charAt(0).toUpperCase();
let upperSurname=surnameString.slice(0).charAt(0).toUpperCase();
console.log("Isim ve Soyisminizin bas harfleri "+upperName+" "+upperSurname);

// 2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda 
//     virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)

let numbers= new Array();
let bottom_row=9;
for(let index=1;index<=100;index++) {     
   numbers[index-1]=numbers.push(index);       
}
 
while(bottom_row<100) {
   numbers[bottom_row]=numbers[bottom_row]+"\n";
   bottom_row+=10;
}
console.log("0'dan 100'e kadar olan sayilar\n"+numbers );

// 3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
//      bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....

let count_=0;
for(let sayi=2;sayi<=100;sayi++){
   let check_=0;
   for(let index=2;index<sayi;index++){      
      if(sayi%index == 0) {
         check_=1;
         break;      }
   }
   if(check_ == 0) {
      console.log(sayi+ "\n");
      count_++;
   }
}

/*5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
​
   *
   **
   ***
   ****
   *****
   ******
   */
  let stars=" ";
  for(let index=1;index<=6;index++){
        stars+="*";
        console.log(stars+"\n");
     }
  