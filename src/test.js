var date = "2022-03-10T13:13";
var newDate = [];

const dateShort = (date) => {
    for(let i=0; i<date.length; i++){
        if(date[i] === 'T')
        break;
        else{
            newDate[i] = date[i];
        }
    }
    console.log(newDate);
}
dateShort(date);