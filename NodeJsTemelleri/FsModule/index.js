const fs = require("fs");

// //Dosya okumak
// fs.readFile("password.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("Dosya okundu");
// });

// //Dosya yazmak
// fs.writeFile(
//   "example.json",
//   `{"name":"Yunus", "lastname":"İNAN"}`,
//   "utf-8",
//   (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log("yeni şifre girildi");
//   }
// );

// //Dosyaya veri eklemek

// fs.appendFile(
//   "password.txt",
//   "\n Dosya Ekleme İşlemi Yapıldı",
//   "utf-8",
//   (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log("Yeni metin eklendi");
//   }
// );

// //Veri Silme

// fs.unlink("password.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("Veri silindi");
// });

// //Klasör oluşturmak

// fs.mkdir("uploads/img", { recursive: true }, (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("Klasörler oluşturuldu");
// });

//Klasör silmek

fs.rmdir("uploads", { recursive: true }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Klasörler silindi");
});
