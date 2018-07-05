$(document).ready(function(){
	$("#data1").show();
	$("#data2").hide();
	$("#data3").hide();
	$("#dropdown").hide();
	
	$("#item1").click(()=>{
		$("#data1").toggle(70);
		$("#data2").hide();
		$("#data3").hide();
		
	});
	
	$("#item2").click(()=>{
		$("#data2").toggle(70);
		$("#data1").hide();
		$("#data3").hide();
	});
	
	$("#item3").click(()=>{
		$("#data3").toggle(70);
		$("#data1").hide();
		$("#data2").hide();
	});
	
	$("#item1").hover(()=>{
		$("#item1").addClass("hoverItem");
	} ,()=>{
		$("#item1").removeClass("hoverItem");
})	
	$("#item2").hover(()=>{
		$("#item2").addClass("hoverItem");
	} ,()=>{
		$("#item2").removeClass("hoverItem");
})	
	$("#item3").hover(()=>{
		$("#item3").addClass("hoverItem");
	} ,()=>{
		$("#item3").removeClass("hoverItem");
		})	
		
	
	


	
	
})