// 
fetch("https://api.example.com/weather?city=Mogadishu")
  .then(res => res.json())
  .then(data => console.log(data.temperature));