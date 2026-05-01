//service_w5q5a1j
// //template_d7ix2iw
//iDH4ulqdbRx8kmuWz

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_w5q5a1j",
      "template_d7ix2iw",
      event.target,
      "iDH4ulqdbRx8kmuWz",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on thorkatla@yahoo.com",
      );
    });

  // setTimeout(() => {
  //   console.log("it worked?");
  // }, 1000);
}
