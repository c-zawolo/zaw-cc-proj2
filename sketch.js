let data;
let data2;
let beetlesheetCSV = 'assets/proj2_btlmanage.csv';
let beetle;
let hairArray= [];
let hairIndex = 0;
let monthIndex = 0;
let monthArray = [
  "Aug 2022",
  "Oct 2022",
  "Nov 2022",
  "Dec 2022",
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "Jun 2023",
  "Jul 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
  "Apr 2024",
  "May 2024",
  "Jun 2024",
  "Jul 2024",
  "Aug 2024",
  "Sep 2024",
  "Oct 2024",
];

function preload() {
  data = loadTable(beetlesheetCSV, 'csv', 'header');
 for (let i = 0; i < 28; i++){
   hairArray[i] = loadImage(i + ".jpg");
  }
}

function setup() {
  let canvas =createCanvas(600,500);
  background(232, 214, 181)
  canvas.parent("canvoid");
  ellipseMode(CENTER);
  rectMode(CENTER);
  stroke(0);
  console.log(hairArray)

  let button22 = createButton("Aug-Dec 2022");
  button22.parent("buttoid");
  button22.mousePressed(hair22);

  let button23 = createButton("Jan-Dec 2023");
  button23.parent("buttoid");
  button23.mousePressed(hair23);

  let button24 = createButton("Jan-Oct 2024");
  button24.parent("buttoid");
  button24.mousePressed(hair24);
  
}

function draw() {
  //line(50,355,350,355)
  noStroke();
  rect(200,260,300,360)
  fill(255);
}

function hair22(){
  image(hairArray[hairIndex], 200, 260, 100, 100)
//} 
 
  //image(hairArray)
}
  //image(monthArray[monthIndex]){
  //monthIndex++
  //if (monthIndex > monthArray[2]
  //}
//}
      
function hair23(){}
function hair24(){}
