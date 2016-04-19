



var onScrollHandler = function() {
  var newImageUrl = yourImageElement.src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
     newImageUrl = "img/Sheldon.jpg"
  }
  if (scrollTop > 200) {
     newImageUrl = "img/sheldonLines.jpg"
  }
  if (scrollTop > 300) {
     newImageUrl = "img/Space.jpg"
  }
  yourImageElement.src = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);



var yPos;
function yScroll(){
yPos = window.pageYOffset;
if(yPos < 20){
    $("#phone").attr("src", "assets/img/phone-right.png");
    } if(yPos < 40) {
      $("#phone").attr("src", "assets/img/phone-front.png");
    } if(yPos > 41){
      $("#phone").attr("src", "assets/img/phone-left.png");
    }
window.addEventListener("scroll", yScroll);}
</script>