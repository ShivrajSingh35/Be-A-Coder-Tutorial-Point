var count=0;
var flag1=0;
var flag2=0;
var flag3=0;
var flag4=0;
var flag5=0;
var radio=document.my_form.htmlq1;
		var radio=document.my_form.radio_button;
		   for(i=0;i<radio.length;i++)
    	    {
			  if(radio[i].checked==true)
		       {
		         return true;
		       }
			  if(radio[0].checked==true)
		       {
				   flag1=4;
				   document.getElementById("show").innerHTML="total score"+flag1;
		       }
			}
           document.getElementById("show").innerHTML="total score"+flag1;
			    return false;			
			/*
var qu1=document.getElementsByName("q1");
		if(qu1[1].checked)
		{
		  count=count+4;;
		}
var qu2=document.getElementsByName("q2");
		if(qu2[1].checked)
		{
		  count+=4;;
		}
var qu3=document.getElementsByName("q3");
		if(qu3[0].checked)
		{
		  count+=4;;
		}		
var qu4=document.getElementsByName("q4");
		if(qu1[0].checked)
		{
		  count+=4;;
		}
var qu5=document.getElementsByName("q5");
		if(qu5[3].checked)
		{
		  count+=4;;
		}
	document.write("Your Total Score is : "+count);*/