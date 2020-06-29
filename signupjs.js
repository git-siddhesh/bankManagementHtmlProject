
	 function func()
	  {	
			var check="a";
		 var str1=document.reg.fnam.value;
		 var str2=document.reg.lnam.value;
		 var str4=document.reg.no.value;
		 var str5=document.reg.pass.value;
		 var str6=document.reg.conf.value;
			
		 var s1= new RegExp("^[a-z A-Z]+$","g");
		 var s4= new RegExp("^[0-9]+$","g");
		 var s5= new RegExp("^[0-9 @ # a-z A-Z]+$","g");
		 
		/* if(!(str1.match(s1)))
		 {		check="b";
				alert("name");
		       // document.getElementById('fnam').innerText="only alphabets";
		 }
		 if(!(str2.match(s1)))
		 {		check="b";
		       // document.getElementById('lnam').innerText="only alphabets";
		 }
		 if(!(str4.match(s4)))
		 {		check="b";
		      //  document.getElementById('no').innerText="only and min 16digits";
		 }
		 if(!(str5.match(s5)))
		 {		check="b";
		      //  document.getElementById('pass').innerText="special char:@,# min:6 digits";
		 }
		 if(!(str6.match(str5)))
		 {		check="b";
		       // document.getElementById('conf').innerText="password not same";
		 }
		 */
		 if(check=="a")
			{
				alert("validating...");
				window.open("welcome.html");
			}
		 else
			 alert("not valid");
	  }
	 
