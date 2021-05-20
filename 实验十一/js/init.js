window.onload=function(){
	
	var navBt=document.getElementsByClassName("nav-st-box")[0];
	var navPane=document.getElementsByClassName("navPane")[0];
	var navPane_on=false;
	navBt.onclick=function(e){
		if(navPane_on==false){
			document.getElementById("st-icon").src="img/svg/x.svg";
			navPane.style.display="flex";
			navPane_on=true;
			e.stopPropagation();
			navPane.onclick=function(e){
				e.stopPropagation();
			}
		}
		window.onclick=function(e){
			if(navPane_on){
				navPane_on=false;
				document.getElementById("st-icon").src="img/svg/list.svg";
				navPane.style.display="none";
			}
		}
	}


	var footernavList=document.getElementsByClassName("footernav-link");
	var footernavList_on=false;
	var navList;
	for(let i=0;i<footernavList.length;++i){
		footernavList[i].onclick=function(e){
			var reset=function (){
				for(let i=0;i<footernavList.length;++i){
					var son=footernavList[i].children[1];
					let cg_icon=footernavList[i].children[0].children[1].children[0];
					son.style.display="none";
					cg_icon.src="img/svg/chevron-down.svg";
				}
				footernavList_on=false;
			}
			
			if(navList!=this.children[1]) reset();
			let cg_icon=this.children[0].children[1].children[0];
			this.children[1].style.display="flex";
			cg_icon.src="img/svg/chevron-up.svg"; 
			if(footernavList_on==false) e.stopPropagation();
			footernavList_on=true;
			navList=this.children[1];

			window.onclick=function(e){
				var left=navList.offsetLeft,right=left+navList.offsetWidth,top=navList.offsetTop,bottom=navList.offsetTop+navList.offsetHeight;
				var x=e.layerX,y=e.layerY;
			//	console.log(x,y,left,right,top,bottom);
				if(x<left||x>right||y<top||y>bottom) reset();
			}
		}
	}

	var headernavList=document.getElementsByClassName("bd-top")[0];
	function fade(timenum,st,ed,op){
		var per=(ed-st)/(50/timenum);
		var now=st;
		var timeId=setInterval(function(){
			now+=per;
			headernavList.style.opacity=now;
			if(op==1&&now>=1||op==0&&now<=0) clearInterval(timeId);
		},timenum);
	}
	window.onmousewheel=function(ev){
		var ev=ev||window.event;
		var flag=ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		var timenum=10;
		if(flag==false){
			if(headernavList.style.opacity>=1) return;
			fade(timenum,0,1,1);
			setTimeout(50);
			headernavList.style.display="flex";
		}
		else{
			if(headernavList.style.opacity<=0) return;
			fade(timenum,1,0,0);
			setTimeout(50);
			headernavList.style.display="none";
		}
	}
}

