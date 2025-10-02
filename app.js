/*
var date = +prompt("enter your date");
var studentName = prompt("Enter your name");
var fatherName = prompt("Enter your Father name");
var surName = prompt("Enter your sur name");
var img = prompt("enter your image url");
var groupName = +prompt("enter your group (1)COMPUTER (2) Science");
var com_Sci_Group = "" ;
var eng_Marks = +prompt("enter your Eng obtained marks")
var urdu_Marks = +prompt("enter your Urdy obtained marks")
var math_Marks = +prompt("enter your Math obtained marks")
var physics_Marks = +prompt("enter your Physics obtained marks")
var chemistry_Marks = +prompt("enter your Chemistry obtained marks")
var computer_Marks = +prompt("enter your Computer or Science obtained marks")
var Islamiyat_Marks = +prompt("enter your Islamiyat obtained marks")
var pak_Marks = +prompt("enter your Pak Studies obtained marks")
var total_Sub_Marks = eng_Marks + urdu_Marks + math_Marks + physics_Marks + chemistry_Marks + computer_Marks + Islamiyat_Marks + pak_Marks
var total_Sub_Marks_loop = [eng_Marks , urdu_Marks , math_Marks , physics_Marks , chemistry_Marks , computer_Marks , Islamiyat_Marks , pak_Marks]
var seatNo =+prompt("enter our seat no :-");
var instituteName = prompt("Enter your institute name");
var districtName = prompt("Enter your district name");
var dateOfBirth = prompt("enter your date of Birth");
if( groupName == "1" ){
    alert("your selected Computer group \n YOur subject is :- \n English \n Urdu \n Math \n Physics \n Chemistry \n Computer \n Islamiat \n Pak Studies")
    com_Sci_Group = "COMPUTER";
    var subject = ["English", "Urdu", "Math", "Physics", "Chemistry", "Computer", "Islamiyat", "Pak Studies"];  
    var total_Marks = [100 , 100 , 100 , 100 , 100 , 100 , 100 , 100 ,]
     }
else if( groupName == "2" ){
    alert("your selected Science group \n YOur subject is :- \n English \n Urdu \n Math \n Physics \n Chemistry \n Computer \n Islamiat \n Pak Studies")
    com_Sci_Group = "SCIENCE";
    var subject = ["English", "Urdu", "Math", "Physics", "Chemistry", "Science", "Islamiyat", "Pak Studies"];  
    var total_Marks = [100 , 100 , 100 , 100 , 100 , 100 , 100 , 100 ,]
}
else{
    alert("please selected 1 or 2 option")
}
for(let i = 0 ; i < total_Sub_Marks_loop.length ; i++){
    var each_Sub_Marks = total_Sub_Marks_loop[i];
}
var percentage = (total_Sub_Marks / 800) *100 ;
var grade = "";
var result  = ""

if(percentage>=80 && percentage<=100){
    grade = "A+";
    result = "Pass" ; 
}
else if(percentage>=70 && percentage<=79){
    grade = "A";
    result = "Pass" ;
}
else if(percentage>=60 && percentage<=69){
    grade = "B";
    result = "Pass" ;
}
else if(percentage>=59 && percentage<=50){
    grade = "C";
    result = "Pass" ;
}
else if(percentage>= 40 && percentage<=49){
    grade = "D";
    result = "Pass" ;
}
else if(percentage>=0 && percentage<=39){
    grade = "FAIL";
    result = "Fail" ;
}
    */
document.body.innerHTML =`
   <div class="container-fluid">
        <div class="container">
            <div class="row mt-5">
                <div class="logo-sec">
                    <h5 class="text-center fw-bold text-wrap">BOARD OF INTERMEDIATE & SECONDARY EDUCATION HYDERABAD SINDH</h5>
                <h5 class="text-center text-wrap">MARKS CERTIFICATE</h5>
                <div class="top-head">
                <h6 class="text-center text-uppercase text-wrap annual-examination">secondary school certificate <br class="mob"> part I & II <br class="lap"><br class="mob"> annual examination <br class="mob"> 2024  held in  the <br class="mob"> month of may 2024</h6>
                </div>   
                <div class="logo-sec-2">
                    <div class="logo-div">
                        <img src="assests/logo.png" class="logo">
                    </div>
                    <div>
                        <table class="fw-bold group-table">
                            <tr>
                                <td>GROUP : </td>
                                <td>${com_Sci_Group}</td>
                            </tr>
                            <tr>
                                <td>SEAT NO :</td>
                                <td>${seatNo}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                </div>
           </div>
           <!-------Name-section--->
           <div class="row">
             <div class="col-lg-12 col-12 d-flex justify-content-between align-items-center mt-5">
                <table class="name-table">
                    <tr>
                        <td>NAME :</td>
                        <td>${studentName}</td>
                    </tr>
                    <tr>
                        <td>FATHER NAME :</td>
                        <td>${fatherName}</td>
                    </tr>
                    <tr>
                        <td>SUR NAME :</td>
                        <td>${surName}</td>
                    </tr>
                    <tr>
                        <td>INSTITUTE</td>
                        <td>${instituteName}</td>
                    </tr>
                    <tr>
                        <td>DISTRICT</td>
                        <td>${districtName}</td>
                    </tr>
                </table>
              <div>
                <img src="${img}" class="stud-img">
              </div>
            </div>
           </div>
           <!-------------subject marks section------->
           <div class="row">
            <div class="col-lg-12 cSol-12">
                <table border="1" class="sub-table">
                    <thead>
                        <tr>
                            <th style="width: 200px !important;">Subjects</th>
                            
                            <th>maximum marks</th>
                            <th>obtained marks</th>
                            
                       </thead>
                        </tr>
                        <tbody>
                            <tr>
                                <td>ENGLISH</td>
                                <td>100</td>
                                <td>${eng_Marks}</td>
                             </tr>
                                 <tr>
                                <td>URDU</td>
                                <td>100</td>
                                <td>${urdu_Marks}</td>
                            </tr>
                             <tr>
                                <td>MATH</td>
                                <td>100</td>
                                <td>${math_Marks}</td>
                               </tr>
                             <tr>
                                <td>PHYSICS</td>
                                <td>100</td>
                                <td>${physics_Marks}</td>
                            </tr>
                             <tr>
                                <td>CHEMISTRY</td>
                                <td>100</td>
                                <td>${chemistry_Marks}</td>
                            </tr>
                             <tr>
                                <td>COMPUTER OR SCIENCE</td>
                                <td>100</td>
                                <td>${computer_Marks}</td>
                                </tr>
                             <tr>
                                <td>ISLAMIYAT</td>
                                <td>100</td>
                                <td>${Islamiyat_Marks}</td>
                                </tr>
                             <tr>
                                <td>SOCIAL STUDIES</td>
                                <td>100</td>
                                <td>${pak_Marks}</td>
                            </tr>
                           <tr>
                            <td>Total marks </td>
                            <td colspan="1 ">800</td>
                            <td>${total_Sub_Marks}</td>
                           </tr>
                        </tbody>
                
                    </table>
                    <table class="per-sec">
                        <tr>
                            <td>RESULT :</td>
                            <td>${result}</td>
                        </tr>
                        <tr>
                            <td>PERCENTAGE :</td>
                            <td>${percentage}%</td>
                        </tr>
                        <tr>
                            <td>GRADE :</td>
                            <td>${grade}
                        </tr>
                        <tr>
                            <td>DATE OF BIRTH :</td>
                            <td>${dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td>DATE :</td>
                            <td>${date}</td>
                        </tr>
                    </table>
                    <div class="sign-con">
                        <div>
                            <p style="font-weight: 600;" class="sign-sec">Certificate</p>
                            <p   style="line-height:1px;" class="sign-sec">#0419</p>
                        </div>
                        <div>
                            <img src="assests/62161cf7328ad280841f653f_esignature-signature.png"    class="sign-img">
                            <p class="sign-sec">Prepared by :</p>
                        </div>
                        <div>
                            <img src="assests/sign.png" class="sign-img">
                            <p class="sign-sec">Checked by :</p>
                        </div>
                        <div>
                            <img src="assests/sign2.png" class="sign-img">
                            <p class="sign-sec">CONTROLLER OF EXAMINATIONS</p>
                        </div>
                    </div>
           </div>
        </div>
    </div>
    </div>
    `
