$(document).ready(function(){
	$("#logo").click(function(){
		$("#nav-home-tab").click();
	});
	$("#divProducts .card").click(function(){
		var src = $(this).find('img').attr('src');
		var title = $(this).find('div').find('p').text();
		$("#imgProduct").attr("src", src);
		$("#mdlProductTitle").text(title);
		$("#mdlProduct").modal('show');
	});
});