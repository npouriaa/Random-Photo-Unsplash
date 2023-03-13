//Access
const btn = document.querySelector(".btn"),
  photos = document.querySelector(".photos");

//Event Listeners
btn.addEventListener("click", showphoto);

//Functions
function showphoto() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.unsplash.com/photos/random?client_id=j_F9mmAaw4khI0msmmSPrv3Zw6Z9BU3jvIPLEZ5wEMQ");
  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      let res = JSON.parse(xhr.response);
      let img = `<img src="${res.urls.small}" alt="">`;
      photos.innerHTML = img;
    }
  }
  xhr.send();
}
