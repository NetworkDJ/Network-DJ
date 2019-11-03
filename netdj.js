// JavaScript Document 
//*Network DJ
var i = 0;
		function getColor(){
			i++;
			switch(i){ 
				case 1:return '#ffffff';
				case 2:return '#0000ff';
			}
		}
		function colorful(){
			var o =document.getElementById('actext');
			o.style.color=getColor();
			if(i==2)i=0;
			setTimeout('colorful()',200);
		}
		colorful();
		var i2 = 0;
		function getColor2(){
			i2++;
			switch(i2){ 
				case 1:return '#ffffff';
				case 2:return '#ff0000';
			}
		}
		function colorful2(){
			var o =document.getElementById('actext2');
			o.style.color=getColor2();
			if(i2==2)i2=0;
			setTimeout('colorful2()',200);
		}
		colorful2();
		var i3 = 0;
		function getColor3(){
			i3++;
			switch(i3){ 
				case 1:return '#ffffff';
				case 2:return '#009900';
			}
		}
		function colorful3(){
			var o =document.getElementById('actext3');
			o.style.color=getColor3();
			if(i3==2)i3=0;
			setTimeout('colorful3()',200);
		}
		colorful3();
		var i4 = 0;
		function getColor4(){
			i4++;
			switch(i4){ 
				case 1:return '#ffffff';
				case 2:return '#ff0000';
			}
		}
		function colorful4(){
			var o =document.getElementById('actext4');
			o.style.color=getColor4();
			if(i4==2)i4=0;
			setTimeout('colorful4()',200);
		}
		colorful4();