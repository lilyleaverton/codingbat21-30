
function countEvens(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            count+=1;
        }
    }
    return count;
}

function countHi(string) {
    var count = 0;
    for(var i=0; i<string.length; i++){
        if(string.substring(i, i+1) == "h"){
            if(string.substring(i+1, i+2) == "i"){
                count += 1;
            }
        }
    }
    return count;
}

function no14(arr) {
    var one = 0;
    var four = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] == 1){
            one += 1;
        }
        if(arr[i] == 4){
            four += 1;
        }
    }
    if(one == 0 || four == 0){
        return true;
    }
    return false;
}

function either24(arr) {
    var two = 0;
    var four = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i]==2 && arr[i+1]==2){
            two +=1;
        }
        if(arr[i]==4 && arr[i+1]==4){
            four +=1;
        }
    }
    if(two == 0 && four == 0){
        return false;
    }
    if(two != 0 && four != 0){
        return false;
    }
    return true;
}

function makeChocolate(small, big, goal) {
    var b = 5*big;
    if(goal-b<=small){
        if(goal-b>=0){
            return goal-b;
        }else{
            if(goal%5<=small){
                return goal%5;
            }else{
                return -1;
            }
        }
    }else{
        return -1;
    }
}

function luckySum(a, b, c) {
    if(a == 13){
        return 0;
    }
    if(b == 13){
        return a;
    }
    if(c == 13){
        return a+b;
    }
    return a+b+c;
}

function maxBlock(string) {
    var value = "";
    var intermediate = 1;
    var final = 0;
    for(var i=0; i<string.length; i++){
        value = string.substring(i,i+1);
        for(var e=i+1; e<string.length; e++){
            if(string.substring(e,e+1) == value){
                intermediate += 1;
            }else{
                break;
            }
        }
        if(intermediate>final){
            final = intermediate;
        }
        intermediate = 1;
    }
    return final;
}

function linearIn(outer, inner) {
    var n = 0;
    for(var i=0; i<outer.length; i++){
        if(outer[i] == inner[n]){
            n += 1;
        }
        if(n> inner.length-1){
            return true;
        }
    }
    return false;
}

function countTriple(string) {
    var count = 0;
    for(var i=0; i<string.length; i++){
        if(string.substring(i,i+1)==string.substring(i+1,i+2) && string.substring(i,i+1)==string.substring(i+2,i+3)){
            count += 1;
        }
    }
    return count;
}

// doesn't work
function sameEnds(string) {
    if(string.length < 2){
        return "";
    }
    var n = 0;
    if(string.length %2 == 0){
        n = string.length/2;
    }else{
        n = (string.length-1)/2;
    }
    console.log(n);
    for(var i=n; i>0; i--){
        console.log("comparing " + string.substring(0,i) + " and " + string.substring(string.length-(i+1)));
        if(string.substring(0,i)==string.substring(string.length-(i))){
            console.log(string.substring(0,i));
            return string.substring(0,i);
        }else{
        }
    }
    return "";
}

function onClick() {
    document.getElementById("result").innerHTML += maxBlock("xxyz");
    document.getElementById("result").innerHTML += countEvens([5,9,8,2,5]);
    document.getElementById("result").innerHTML += countHi("alsnfhialkndf hi hi");
    document.getElementById("result").innerHTML += no14([5,9,8,2,5]);
    document.getElementById("result").innerHTML += either24([5,9,8,2,5]);
    document.getElementById("result").innerHTML += makeChocolate(5, 8, 10);
    document.getElementById("result").innerHTML += luckySum(5,8,1);
    document.getElementById("result").innerHTML += linearIn([2,3,4,5][5,6]);
    document.getElementById("result").innerHTML += countTriple("jlk;klbdsadddvndiooo");
    document.getElementById("result").innerHTML += sameEnds("xxouxxwteyyyhuioxx");

}

