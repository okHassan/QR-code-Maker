const wrapper = document.querySelector(".wrapper")
const qrInput = document.querySelector(".form input")
const generatBtn = wrapper.querySelector(".form button")
const qrImg = wrapper.querySelector(".qr-code img")

generatBtn.addEventListener("click", () => {

    const qrValue = qrInput.value

        if(!qrValue) return ;

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`

    wrapper.classList.add("active")
    qrInput.value = null
    qrInput.focus()
})