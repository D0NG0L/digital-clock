// setInterval(() => {
//     let date = new Date();
//     let clock = document.querySelector('.clock');
//     clock.innerHTML =
//     date.getHours()+':'+
//     date.getMinutes()+':'+
//     date.getSeconds();
    
// },1000);
setInterval(() => {
    let date = new Date();
    let options = {
        hour: 'num',
        minute: 'num',
        second: 'nume',
    };
    let Time = date.toLocaleString('cairo', date);
    let clock = document.querySelector('.clock');
    clock.innerHTML = Time;
}, 1000);


