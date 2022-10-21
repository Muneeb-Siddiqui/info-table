var std1={
    name:"Syed Rayyan",
    rollNo:"2021F-BSE-001",
    marks:"545",
    percentage:"95%"
}
var std2={
    name:"Hammad Siddiqui",
    rollNo:"2021F-BSE-002",
    marks:"530",
    percentage:"89%"
}
var std3={
    name:"Muneeb Siddiqui",
    rollNo:"2021F-BSE-003",
    marks:"535",
    percentage:"92%"
}
var std4={
    name:"Faisal Raza",
    rollNo:"2021F-BSE-004",
    marks:"520",
    percentage:"84%"
}
var std5={
    name:"omer Ihab",
    rollNo:"2021F-BSE-005",
    marks:"525",
    percentage:"87%"
}
var all=[std1,std2,std3,std4,std5]

var table=document.getElementById('table')
var data=`
<tr>
<th>Name</th>
<th>Roll no</th>
<th>Marks</th>
<th>%age</th>
</tr>
`
table.innerHTML=data;

for(var i=0;i<all.length;i++){
    table.innerHTML += `
    <tr>
    <td>${all[i].name}</td>
    <td>${all[i].rollNo}</td>
    <td>${all[i].marks}</td>
    <td>${all[i].percentage}</td>
  </tr>
    ` 
}



function show(){
    var inp=document.getElementById("inp")
    var inpVal=inp.value
    index=-1

    for(var i=0;i<all.length;i++){
       if(inpVal.toUpperCase()==all[i].rollNo){
        index=i
        }
    }

    var show=document.getElementsByClassName('data')[0]
    if(index != -1){
    show.innerHTML=`
    <div><span>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>${all[index].name}</span></div>
    <div><span>Marks: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>${all[index].marks}</span></div>
    <div><span>Percentage: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>${all[index].percentage}</span></div>
    `}
    else{
        show.innerHTML=`
        <div class="data2">Record not found!</div>
        `
    }
}

