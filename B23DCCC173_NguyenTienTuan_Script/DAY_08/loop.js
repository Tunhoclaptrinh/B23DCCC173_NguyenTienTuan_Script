var  a = prompt();
/* if else*/
if(a == 2 ) {
	document.write('<br>Hôm nay là thứ hai');
} else if (a==3) {
	document.write('<br>hom nay la thu ba');
} else if (a==4) {
	document.write('<br>hom nay la thu tu');
	
} else if (a == 5) {
	document.write('<br>hom nay la thu 5');
	
} else if (a==6) {
	document.write("<br>hom nay la thu 6");
} else if (a == 7) {
	document.write("<br>hom nay la thu 7");
} else {
	document.write('<br>hom nay la chu nhat');
}




switch (a) {
	case 2:
	   document.write('<br>Hôm nay là thứ hai');	
		break;
	case 3:
		document.write('<br>hom nay la thu ba');
		break;
	case 4:
	    document.write('<br>hom nay la thu tu');
	    break;
	case 5 :
		document.write('<br>hom nay la thu nam');
		break;
	case 6:
		document.write('<br>hom nay la thu sau');
		break;
	case 7:
		document.write('<br>hom nay la thu bay');
		break;
	case 8 :
		document.write('<br>hom nay la chu nhat');
		break;
    default :
    	document.write('<br> khong hop le');
}
