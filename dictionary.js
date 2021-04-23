class Dictionary {
 constructor(){
     this.dictionary= {};
 }
 add (key, value){
     this.dictionary[key] = value;

 }
 get(key){
     return this.dictionary[key];
 }
}

const phoneBook = new Dictionary();
phoneBook.add('Ashad','01754323454');
phoneBook.add('Ashique','016553487833');
phoneBook.add('Razu','014393548547');

console.log(phoneBook.dictionary);

const Ashad =phoneBook.get("Ashad");
console.log(Ashad);