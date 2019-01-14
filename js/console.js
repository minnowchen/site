$(document).ready(function() {

	$('#datalist').DataTable({
		"pageLength" : 10,
		"lengthMenu" : [[10, 25, 50, -1], [10, 25, 50, "全部"]],
		"columnDefs" : [ 
		  	 	{"targets" : -1, "orderable" : false}, 
		  	 	{"width" : "10%", "targets": 1 },
		  	 	{"width" : "18%", "targets": 2 },
		  	 	{"width" : "5%", "targets": -1 },
		  	 ],
		"order": [[1,'desc'],[7,'asc'],[4,'asc'],[6,'asc']]
	});
	
	$('#artInfo').DataTable({
		"pageLength" : 10,
		"lengthMenu" : [[10, 25, 50, -1], [10, 25, 50, "全部"]],
		"columnDefs" : [ 
			{"targets" : -1, "orderable" : false}, 
			{"targets" : 0, "visible" : false}, 
			{"width" : "10%", "targets": 1 },
			{"width" : "18%", "targets": 2 },
			{"width" : "5%", "targets": -1 },
			],
			"order": [[1,'desc'],[7,'asc'],[4,'asc'],[6,'asc']]
	});
	
	
	$('#artlist').DataTable({
		"pageLength" : 10,
		"lengthMenu" : [[10, 25, 50, -1], [10, 25, 50, "全部"]],
		"columnDefs" : [ 
		  	 	{"targets" : -1, "orderable" : false}, 
		  	 	{"width" : "10%", "targets": 1 },
//		  	 	{"width" : "18%", "targets": 2 },
		  	 	{"width" : "8%", "targets": -1 },
		  	 ],
		"order": [1,'desc']
	});
	
	
	$("body").on('click',"#artlist tbody tr td",function(){
		var ntr= $(this).parent();
//		console.log('ntr=' + $(this).parent().index())
		var nTds=$('td',ntr);
		var local = nTds.index($(this));
		if(local < 8){
			window.location.href='console_artInfo'+$(this).parent().index()+'.html'
		}
	});
	
	
	setDialog("#dialog", 500, true);
});

/* 共用Dialog
 * 先用setDialog設定顯示模式，再用openDialog傳進資料打開畫面
 */
function setDialog(id, width, isModal){
	$(id).dialog({
		autoOpen : false,
		show : { effect : "blind", duration : 300},
		hide : { effect : "explode", duration : 300},
		width : width,
//		beforeClose : function(){ //關掉之前可以做一些事情
//			$(id).html("");
//		},
		modal : isModal
	});
}

function open_Dialog(id, index){
	
	var artName = $(index).closest("tr").find("td:eq(3)").text();
	$("#"+id+" #artName").html(artName);
	$("#"+id+" #chartName").attr("src","images/chart01.PNG")
							.attr("alt","性別比分析");
	$("#"+id).dialog("open");
}

function changeChart(id){
	var chart = $("select[name='chartName']").val();
	var name = $("select[name='chartName'] :selected").text();
	
	$("#"+id+" #chartName").attr("src","images/"+chart+".PNG")
							.attr("alt",name);
}
