var newsActive = false;

function SetNews(news_id) {
	if(newsActive == false){
		document.getElementById("News1").style.display = "none";
		document.getElementById("News2").style.display = "none";
		document.getElementById("News3").style.display = "none";
		document.getElementById("News4").style.display = "none";

		document.getElementById("NewsText"+news_id).style.display = "block";
		document.getElementById("NewsText"+news_id).style.position = "relative";

		var newsName = document.getElementById("NewsName"+news_id).value;
		document.getElementById("NameNews").value = newsName;

		document.getElementById("News"+news_id).style.display = "block";
		newsActive = true;
	}
	else{
		document.getElementById("NewsText"+news_id).style.display = "none";
		document.getElementById("NewsText"+news_id).style.position = "absolute";

		document.getElementById("News1").style.display = "block";
		document.getElementById("News2").style.display = "block";
		document.getElementById("News3").style.display = "block";
		document.getElementById("News4").style.display = "block";
		
		newsActive = false;
	}
}