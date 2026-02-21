let CurrenTime = new Date();
let GetMinutes = CurrenTime.getMinutes();
let GetHours = CurrenTime.getHours();
let FuulTime = `${GetHours}` + ' : ' + `${GetMinutes}`;
const div = document.createElement('div');
let DayIntervalText = '';

if(GetHours >= 8 && GetHours <= 12){
    DayIntervalText = "Утро";
} else if(GetHours >= 13 && GetHours <= 18){
    DayIntervalText = "День";
} else if(GetHours >= 19 && GetHours <= 23){
    DayIntervalText = "Вечер";
} else{
    DayIntervalText = "ночь";
}
div.id = 'time-container';
div.textContent = FuulTime;
document.body.appendChild(div);
document.getElementById('DayIntervalText').innerHTML = `<p> ${DayIntervalText}  </p>`;