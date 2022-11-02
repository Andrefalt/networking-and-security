//Enter the string to encrypt/decrypt using the rot13 encryption
let string = "iwanttoencryptthis";

let final = ""

let first = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

let second = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for(i=0;i<string.length;i++){
    for(j=0;j<first.length;j++){
        
        if(string[i] == first[j]){
            //console.log(`replacing ${string[i]} at ${i} with ${second[j]}`);
            final += second[j];
        }

        else if(string[i] == second[j]){
            //console.log(`replacing ${string[i]} at ${i} with ${first[j]}`);
            final += first[j];
        }
        
    }
}

console.log("Final string: " + final);
