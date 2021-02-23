module.exports = function toReadable (number) {

    let arrEd = ['zero',  'one',  'two',  'three',  'four',
      'five', 'six',  'seven',  'eight',  'nine', 'ten',
      'eleven', 'twelve','thirteen','fourteen', 'fifteen', 'sixteen',
       'seventeen', 'eighteen', 'nineteen', 'twenty'];
     let arrDes = ['0','1','twenty', 'thirty', 'forty', 'fifty', 'sixty', 
     'seventy', 'eighty', 'ninety'];

    if (number <= 21) return arrEd[number];

    let arrNumber = String(number).split('').reverse();

    sot = function(x) {
        if (x == null) return '';
        return arrEd[+x]+' '+'hundred ';
    }
    des = function(y) {
      if (y == "0") return '';
      if (y == '1') return arrEd[+('1'+arrNumber[0])];
        return arrDes[+y]+" ";
    }
    ed = function(z) {
        if (z == "0") return '';
        return arrEd[+z];
    }


    if(arrNumber.length == 3 && arrNumber[1] == '1') return sot(arrNumber[2]) + des(arrNumber[1])

    else return sot(arrNumber[2]) + des(arrNumber[1]) + ed(arrNumber[0]);
    

}
