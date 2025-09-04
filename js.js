var deny_list = ["nuh uh","hell nawhh", "bawal nga","di pwede","no."]
var convince_list = ["please?","bigyan kita sardinas na pula araw araw","sige na oh",":((","iiyak na ko"]

var height_no = 50
var width_no = 100

var height_yes = 50
var width_yes = 100

var no_font = 20

var yes = document.querySelector(".yes").style
var no = document.querySelector(".no").style
var convince = document.querySelector(".convince")

deny_count = 0

function yess(){
    window.location.href = "yes.html"
}

function deny(){
    convince.textContent = convince_list[deny_count]

    height_no -=10;
    width_no -=20;
    no_font -=5;
    no.height = height_no+"px";
    no.width = width_no+"px";
    no.fontSize = no_font+"px";


    height_yes +=50;
    width_yes +=100;
    yes.height = height_yes+"px";
    yes.width = width_yes+"px";


    document.querySelector(".no").textContent = deny_list[deny_count];
    deny_count+=1


}