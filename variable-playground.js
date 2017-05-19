var person = {
    name: 'Putri',
    age: 23
};

function updatePerson(obj){
    //jika melakukan sesuatu di bawah ini variable person tidak akan berubah
    // obj = {
    //     name: "Putri",
    //     age: 20
    // }; 

    //jika melakukan di bawah ini variable person akan berubah
    obj.age = 21;
}

updatePerson(person);
console.log(person);

var grades = [10, 60, 80];

function addGrades(gradesArr) {
    // gradesArr.push(30);
    gradesArr = [2, 3];
    //debugger adalah special keyword that tells node where to stop with the program 
    //-> cara next dengan ketik : cont
    //-> cara inspect variable dan fungsi dengan : repl 
    //    setelah melakukan perintah repl dapat melakukan perintah misal melihat isi variable dengan ketik nama variable
    //-> cara keluar dari repl : tekan Control+C
    //-> untuk menghentikan program ketik : kill
    //-> untuk menghentikan debug ketik : quit
    debugger; 
}

addGrades(grades);
console.log(grades);
