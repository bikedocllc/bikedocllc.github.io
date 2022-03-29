$(document).ready(function(){
	$("#logo").click(function(){
		$("#nav-home-tab").click();
	});
	$("#divProducts .card").click(function(){
		var imgList = $(this).find('.images').text().split('|');
		var title = $(this).find('div').find('.title').text();
		var price = $(this).find('div').find('.price').text();
		var info = $(this).find('div').find('.info').html();
		info = info.length > 0 ? '<br/>' + info : info;
		
		if(imgList.length > 1){
			$("#carouselProductImages > div").html('<a class="carousel-control-prev" href="#carouselProductImages" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselProductImages" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>');
		}else{
			$("#carouselProductImages > div").empty();
		}
		
		
		for(let i = imgList.length-1; i >= 0 ; i--){
			var div = $('<div></div>');
			div.addClass('carousel-item');
			
			var img = $('<img />');
			img.addClass('d-block w-100');
			img.attr('src', 'img/'+ imgList[i]);
			
			if(i === 0){
				div.addClass('active');
			}
			div.append(img);
			
			$("#carouselProductImages > div").prepend(div);
		}
		
		$("#txtPrice").text(price);
		$("#divInfo").html(info)
		$("#mdlProductTitle").text(title);
		$("#mdlProduct").modal('show');
	});
});

const showDialog = () => {
  document.getElementById('dialog').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});