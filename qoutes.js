
const currdata=document.getElementById("date");
let weatehrcon=document.getElementById("weather")
var y=document.getElementById("yrs");
var weak= ["Sun" ,"Mon", "Tues", "Wed", "Thurs","Fri ","Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
// const getCurrentday=()=>
// {
//  let currentTime=new Date();
//  return weak[currentTime.getDay()];
// }
const getCurrentTime=()=>{

    var now=new Date();
    var month=now.getMonth()+1;

    // console.log(months[month])
    var day=now.getDay();
    var hours=now.getHours();
    // console.log(day);
    var mins=now.getMinutes();
    let period="AM"
    if(hours>11)
    { period="PM"
        if(hours>12)
        {
            hours-=12;
            hours="0"+hours;
        }
    }
    if(mins<10)
    {
        mins="0"+mins
    }
    var yr=now.getFullYear();
    return `${months[month]} | ${weak[day]} ${'0'+day}| ${hours} : ${mins} ${period}`;
   
    // console.log(now)
    

}
//  getCurrentday();
y.innerHTML=new Date().getFullYear();
// console.log(getCurrentTime())
currdata.innerHTML=getCurrentTime();

const add_btn=document.querySelector(".ii");
const add_b=document.querySelector(".i");
add_btn.addEventListener("click",  ()=>{
   document.getElementsByClassName("ipt")[0].style. display="flex";
   document.getElementsByClassName("ipt")[0].style. transition="10s";
   add_b.style.display="flex";
   add_btn.style.display="none";
})
add_b.addEventListener("click",  ()=>{
    document.getElementsByClassName("ipt")[0].style. display="none";
    add_b.style.display="none";
    add_btn.style.display="flex";
 })


 let api="https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=2220e0730d77ea8576a16f9b0aa4f2ff";
 window.addEventListener("load", ()=>{
    // console.log("h");
    ft();
 })
 
 const ft= async ()=>{
    const t= await  fetch(api)
    let data=await t.json();
     const tem=(data.main.temp-273.15).toFixed(2);
     let ht_city=document.querySelector("h2");
    //  console.log(ht_city)
     const cit=data.name;
     ht_city.innerText=`${cit},${data.sys.country}`;
     let tmp=document.querySelector(".info h1")
     tmp.innerText=`${tem}°C`
     let min_max=document.querySelector(".info h4")
     min_max.innerText=`Min ${(data.main.temp_min-290.15).toFixed(2)} °C | ${(data.main.temp_max-273.15).toFixed(2)} °C`
    //  console.log(cit);
    // console.log(temp);
 }
 const click=document.querySelector(".cli")
 click.addEventListener("click", ()=>{
    let get_input=document.querySelector(".ipt input");
    let city=get_input.value
    api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2220e0730d77ea8576a16f9b0aa4f2ff`;

   ft()
 })
 
//  ft();

 