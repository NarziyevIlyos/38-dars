// Sinf ishi

// let a, color, qizil, yashil, kuk;
// a = 400;
// // 3-misol
// if (a >= 90 && a <= 100) {
//   console.log("A");
// } else if (a >= 80 && a <= 89) {
//   console.log("B");
// } else if (a >= 70 && a <= 79) {
//   console.log("C");
// } else if (a >= 60 && a <= 69) {
//   console.log("D");
// } else if (a >= 50 && a <= 59) {
//   console.log("E");
// } else if (a >= 50 && a <= 59) {
//   console.log("F");
// } else {
//   console.log("yo'q");
// }

// // 4-misol

// // qizil - 1, yashil - 2, ko'k - 3
// // color o'zgaruvchisiga qiymat bering
// color = prompt("Ranglar qnday ma'noni bildirishi uchun ushbu ranglardan birini: qizil, yashil, ko'kni kiriting")

// color = color.toLowerCase;
// if (color == "qizil") {
//   alert("Qizil rang to'qlikni anglatadi");
// } else if (color == "yashil") {
//   alert("Yashil rang tinchlikni anglatadi");
// } else if (color == "ko'k") {
//   alert("Ko'k rang xotirjamlikni anglatadi");
// } else {
//   alert("Bu haqda ma'lumot yo'q");
// }

// UY ISHI
let a,
  b,
  c,
  d,
  n,
  m,
  counter = 0,
  negative = 0,
  positive = 0;

// if2
n = +prompt("Agar kiritilgan son musbat bo'lsa uni birga oshiruvchi, manfiy bo'lsa 2 ga kamaytiruvchi dastur ishga tushdi. n ga qiymatni kiriting. n =");
if(n>0){
    alert("n = " + (++n))
}else {
    alert("n = " + (n-2))
}

// if3
n = +prompt("Agar kiritilgan son musbat bo'lsa uni birga oshiruvchi, manfiy bo'lsa 2 ga kamaytiruvchi, 0 bo'lsa o'zini ekranga chiqaruvchi dastur ishga tushdi. n ga qiymatni kiriting. n =");
if(n>0){
    alert("n = " + (++n))
} else if(n<0) {
    alert("n = " + (n-2))
}else {
    alert("n = " + n)
}

//if4
a = +prompt(
  "3 ta butun sondan nechtasi musbat son ekanligini aniqlovchi dastur ishga tushdi. 3 butun son kiriting. a="
);
b = +prompt("b =");
c = +prompt("c =");

if (a >= 0) ++counter;
if (b >= 0) ++counter;
if (c >= 0) ++counter;

alert("Jami musbat sonlar = " + counter);

// if5
a = +prompt(
  "3 ta butun sondan nechtasi musbat son, nechtasi manfiy ekanligini aniqlovchi dastur ishga tushdi. 3 butun son kiriting. a="
);
b = +prompt("b =");
c = +prompt("c =");

if (a >= 0) ++positive;
else ++negative
if (b >= 0) ++positive;
else ++negative;
if (c >= 0) ++positive;
else ++negative;

alert("Jami musbat sonlar = " + positive + "\n" + "Jami manfiy sonlar = " + negative);

//if6

a = +prompt("Ikkita butun sondan kattasini aniqlovchi dastur ishga tushdi. A va B sonlarga qiymat kiriting. a = ");
b = +prompt("b = ");

(a>b)? alert("A katta"): alert("B katta");

// if7
a = +prompt("Kiritilgan ikkita butun sonning kichigining tartib raqamini aniqlovchi dastur ishga tushdi. Sonlarni kiriting. a = ");
b = +prompt("b = ");

(a>b)? alert("1") : alert("2");

// if8
a = +prompt("Kiritilgan ikkita butun sonning avval eng kattasini, keyin eng kichigini ekranga chiqaruvchi dastur ishga tushdi. Sonlarni kiriting. a = ");
b = +prompt("b = ");

(a>b)? alert("Eng katta son = " + a + "\n" + "Eng kichik son = " + b) : alert("Eng katta son = " + b + "\n" + "Eng kichik son = " + a);

// if9
a = +prompt(
  "Kiritilgan ikkita A va B sonlardan eng kichig qiymatini A ga beruvchi, eng kattasini B o'zgaruvchisiga beruvchi dastur ishga tushdi. a = "
);
b = +prompt("b = ");

a - b < 0
  ? alert("A = " + a + "\n" + "B = " + b)
  : alert("A = " + b + "\n" + "B = " + a);

// if10
a = +prompt(
  "Kiritilgan ikkita A va B sonlar teng bo'lmasa, ularning yig'inidisini shu o'zgaruvchilarning har biriga qiymat sifatida beruvchi, agar teng bo'lsa ularning har biriga 0 ni qiymat sifatida beruvchi dastur ishga tushdi. Sonlarni kiriting. A ="
);
b = +prompt("b = ");
(a != b)
? alert("A = " + (a+b) + "\n" + "B = " + (a+b))
: alert("A = " + 0 + "\n" + "B = " + 0);

// if11
a = +prompt(
  "Kiritilgan ikkita A va B sonlar teng bo'lmasa, shu sonlardan eng kattasini shu o'zgaruvchilarning har biriga qiymat sifatida beruvchi, agar teng bo'lsa ularning har biriga 0 ni qiymat sifatida beruvchi dastur ishga tushdi. Sonlarni kiriting. A ="
);
b = +prompt("b = ");
a != b
  ? a > b
    ? alert("A = " + a + "\n" + "B = " + a)
    : alert("A = " + b + "\n" + "B = " + b)
  : alert("A = " + 0 + "\n" + "B = " + 0);

// if12
a = +prompt(
  "3 ta sonning eng kichigini aniqlovchi dastur ishga tushdi. Sonlarni kiriting. a ="
);
b = +prompt("b = ");
c = +prompt("c = ");

// if(a>b && b>c) alert("c = " + c);
// else if (b>a && a<c) alert("a = " + a)
// else alert("b = " + b)

(a>b && b>c)
    ? alert("c = " + c)
    :   (
            (b>a && a<c)
            ? (alert("a = " + a))
            : alert("b = " + b)
        );

// if13
a = +prompt(
    "3 ta son orasidagi o'rta qiymatli sonni aniqlovchi dastur ishga tushdi. Sonlarni kiriting. a ="
  );
b = +prompt("b = ");
c = +prompt("c = ");
if(a>b && a>c){
  if(b>c) alert("b = " + b);
  else alert("c = " + c)
}else if(b>a && b>c){
  if(a>c) alert("a = " + a);
  else alert("c = " + c)
}else {
  if(a>b) alert("a = " + a);
  else alert("b = " + b)
}


// if14
a = +prompt(
  "3 ta son orasidan avval kichik qiymatli sonni, keyin kattasini aniqlovchi dastur ishga tushdi. Sonlarni kiriting. a ="
);
b = +prompt("b = ");
c = +prompt("c = ");

if(a>b && a>c){
    if(b>c) alert("c = " + c + "\n" + "a = " + a);
        else alert("b = " + b + "\n" + "a = " + a)
}else if (b>a && b>c){
    if(a>c) alert("c = " + c + "\n" + "b = " + b);
    else alert("a = " + a + "\n" + "b = " + b)
}else {
    if(a>b)  alert("b = " + b + "\n" + "c = " + c);
    else  alert("a = " + a + "\n" + "c = " + c);
}

// if15
a = +prompt(
    "3 ta son orasidagi eng katta qiymatli 2 tasining yig'indisini ekranga chiqaruvchi dastur ishga tushdi. Sonlarni kiriting. a ="
  );
b = +prompt("b = ");
c = +prompt("c = ");

// alert(a>b && b>c);

if(a>b && a>c){
    if(b>c){
      alert("Eng katta yig'indi = " + (a+b));
    }
    else {alert("Eng katta yig'indi = " + (a+c));}
}else if (b>a && b>c){
    if(a>c) {
      alert("Eng katta yig'indi = " + (b+a));
    }
    else {
      alert("Eng katta yig'indi = " + (b+c));
    }
}else {
    if(a>b)  {
      alert("Eng katta yig'indi = " + (c+a));
    }
    else  {
      alert("Eng katta yig'indi = " + (c+b));
    }
}