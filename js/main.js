function heartMenu(){
	var hul = document.getElementById('heart_ul');
	var hli = hul.getElementsByTagName('li');
	var heartDiv = document.getElementById('heart_menu');
	for(var i=0;i<hli.length;i++){
		/*
		var dataItem = document.getElementById('data'+i);
		alert(dataItems);
		hli[i].onmouseover = function(){dataItems.style.display = 'block';};
		hli[i].onmouseout = function(){dataItems.style.display = 'none';};
		*/
	}
	var dataItem = document.getElementById('data'+0);
	hli[0].onmouseover = function(){dataItem.style.display = 'block';};
	hli[0].onmouseout = function(){dataItem.style.display = 'none';};
	var dataItem1 = document.getElementById('data'+1);
	hli[1].onmouseover = function(){dataItem1.style.display = 'block';};
	hli[1].onmouseout = function(){dataItem1.style.display = 'none';};
	
	hul.onmouseover = function(){heartDiv.style.display = 'block';};
	hul.onmouseout = function(){heartDiv.style.display = 'none';};
	heartDiv.onmouseover = function(){heartDiv.style.display = 'block';};
	heartDiv.onmouseout = function(){heartDiv.style.display = 'none';};
};
var divId = 3;  //新建起始行id
var totalAddDiv = 5;  //div最大数量
var $divHeightId = $("#floor");
var $divAddHeight = 300;  //每次增加的floor高度
function addDiv(clonedNode,sourceNode){
	if(divId <= totalAddDiv){
		//for(var j = 1;j <= 2;j++){
			//alert(divId);
			clonedNode.setAttribute("id","floor_row" + divId);
			sourceNode.parentNode.appendChild(clonedNode);
			divId++;
		//}
		if(divId < totalAddDiv){  //判断是否是最后一行
			var $divHeight = $divHeightId.height();
			$divHeightId.height($divHeight + $divAddHeight); 
		}else{
			var $divHeight = $divHeightId.height();
			$divHeightId.height($divHeight + 280);  //最后一次增加的floor高度
		}
		return true;
	}else{
		var floorFoot = document.getElementById("footfoot");
		floorFoot.style.display = "block";
		return false;
	}
};
var perDivId = 3;
var perTotalAddDiv = 5;
var $perDivHeightId = $("#b_content");
var $perAddDivHeight = 350;
function perAddDiv(clonedNode,sourceNode){
	if(perDivId <= perTotalAddDiv){
		clonedNode.setAttribute("id","b_row" + perDivId);
		sourceNode.parentNode.appendChild(clonedNode);
		perDivId++;
		if(perDivId < perTotalAddDiv){  //判断是否是最后一行
			var $perDivHeight = $perDivHeightId.height();
			$perDivHeightId.height($perDivHeight + $perAddDivHeight); 
		}else{
			var $perDivHeight = $perDivHeightId.height();
			$perDivHeightId.height($perDivHeight + 300);  //最后一次增加的floor高度
		}
		return true;
	}else{
		var perFoot = document.getElementById("per_content_foot");
		perFoot.style.display = "block";
		return false;
	}
}

