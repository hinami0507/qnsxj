
var use;
var xuan;
var result;
var end;
var rwidth;
var rheight;


  function shengt()
{ 
  end=use+result;
  document.title=end;
}
function getuser()
{

  use=document.getElementById("user").value;
  hrtitle="亲爱的"+use+"同学:";
  document.getElementById("username").innerHTML=hrtitle;

}

function zuihouyes()
{ 
	screen();
	$("#shareyes").addClass("show");
	$("#cross").fadeIn("slow");
}
function zuihouno()
{ 
	screen();
	$("#shareno").addClass("show");
	$("#cross").fadeIn("slow");

}
function clickyes()
{ 
  xuan=1;
   switch(company)
	{ 
		case 0:result="已拿到阿里巴巴 Special offer，可还是填不饱TA的胃口！";break;
		case 1:result="已拿到百度Special offer，至此集齐BAT三家可召唤神龙！";break;
		case 2:result="已拿到腾讯 Special offer，又一个秋招名额没了！";break;
		case 3:result="已拿到Google的 Special offer，都是因为翻墙翻得好！";break;
		case 4:result="已拿到微软 Special offer，从此开启外挂走向人生巅峰！";break;
		case 5:result="已拿到苹果Special offer，全中国只招一人！";break;
		case 6:result="已拿到Facebook的 Special offer，伙伴们表示已经震惊了！";break;
	}
	  shengt();
    $("#accept").fadeIn("fast");
    $("#accept").animate({width:'20%',height:'10%',opacity:'0.8'},1000);
    $("#no").fadeOut("slow");
    $("#yes").fadeOut("slow");


    tagyesflash();
    $("#hello").delay(500).fadeIn("slow");
    $("#again").delay(500).fadeIn("slow");

}
function clickno()
{ 
  xuan=2;
     switch(company)
	{ 
		  case 0:result="拒绝阿里巴巴Special offer，马云正在赶来的路上！";break;
		  case 1:result="拒绝百度Special offer，表示年薪30万还是太低了！";break;
		  case 2:result="拒绝腾讯Special offer，马化腾已经哭晕在厕所！";break;
		  case 3:result="拒绝Google Special offer，HR竟然在电话里哭了";break;
		  case 4:result="拒绝微软Special offer，因为没办法接受异地恋！";break;
		  case 5:result="拒绝苹果Special offer，表示一生愿做小米粉！";break;
		  case 6:result="拒绝Facebook Special offer，爱国是TA一生的事业！";break;
	}
	  shengt();
    $("#refuse").fadeIn("fast");
    $("#refuse").animate({width:'20%',height:'10%',opacity:'0.8'},1000);

    $("#no").fadeOut("slow");
    $("#yes").fadeOut("slow");
     
    tagnoflash();
        $("#hello").delay(500).fadeIn("slow");
        $("#again").delay(500).fadeIn("slow");

}


function tagyesflash()
{
    $("#tag1").animate({right:'850px'},8500);
    $("#tag2").animate({right:'850px'},6700);
    $("#tag3").animate({right:'620px'},9000);
    $("#tag4").animate({right:'650px'},7800);
    $("#tagyes").addClass("show");
    
}
function tagnoflash()
{
    $("#tag11").animate({right:'950px'},8500);
    $("#tag12").animate({right:'750px'},7700);
    $("#tag13").animate({right:'850px'},9000);
    $("#tag14").animate({right:'950px'},6800);
    $("#refuse").animate({right:'650px'},7800);
    $("#tagno").addClass("show");
   
}
function namepoi()
{ 
switch(company)
{ 
    case 0:
    document.write("<img id='haha1' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjalilogo.jpg'>")
    document.write("<img id='haha' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjali.png'>");break;
    case 1:
    document.write("<img id='haha1' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjbaidulogo.jpg'>")
    document.write("<img id='haha' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjbaidu.png'>");break;
    case 2:
    document.write("<img id='haha1' width='100%'src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjtencentlogo.jpg'>")
    document.write("<img id='haha' width='100%'src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjtencent.png'>");break;
    case 3:
    document.write("<img id='haha1' width='100%' src='./img/googlelogo.jpg'>")
    document.write("<img id='haha' width='100%' src='./img/google.png'>");break;
    case 4:
    document.write("<img id='haha1' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjmicrologo.jpg'>")
    document.write("<img id='haha' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjmicro.png'>");break;
    case 5:
    document.write("<img id='haha1' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjapplelogo.jpg'>")
    document.write("<img id='haha' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjapple.png'>");break;
    case 6:
    document.write("<img id='haha1' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjfacebooklogo.jpg'>")
    document.write("<img id='haha' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjfacebook.png'>");break;
    default:
    document.write("<img id='haha1' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjgooglelogo.jpg'>")
    document.write("<img id='haha' width='100%' src='http://7xnp0k.com1.z0.glb.clouddn.com/qnsxjgoogle.png'>");break;
}
rwidth=document.body.clientWidth;
rheight=document.body.clientHeight;

rwidth=rwidth*0.150;
rheight=rheight*0.3105;
document.write("\<p id=\"username\" style=\"left:"+rwidth+";top:"+rheight+";\"\>"+use+"\</p\>");       
}
function screen()
{ 

    $("#bscreen").fadeIn("slow");
    
    
}


$(document).ready(function(){
  $("#cross").click(function(){
      $("#bscreen").fadeOut("slow");
      $("#cross").fadeOut("slow");
      $("#point").fadeOut("slow");
  });
});


$(document).ready(function(){
  $("#sb").click(function(){
    $("#basic").hide();
    $("#offer").fadeIn("slow");
   $("#sb").attr({"disabled":"disabled"});
  });
});


