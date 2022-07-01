const header1 = document.querySelector(".header1")
const about_me = document.querySelector(".ab_me")
const my_name = document.querySelector(".name")
const protfolio_btn = document.querySelector(".port")
const look_at_my_work_btn = document.querySelector(".port2")
const contact_me1 = document.querySelector(".con1")
const contact_me2 = document.querySelector(".con2")




about_me.addEventListener("click", function() {
    header1.style = "background:linear-gradient(to right, rgb(103, 1, 1), rgb(165, 81, 2));"
})

my_name.addEventListener("click", function() {
    header1.style = "background: linear-gradient(to right, #00AAFF, #00ff6c); "
})

protfolio_btn.addEventListener("click", function() {
    header1.style = "background: linear-gradient(to right, grey, darkgray); "
})

look_at_my_work_btn.addEventListener("click", function() {
    header1.style = "background: linear-gradient(to right, grey, darkgray); "
})

contact_me1.addEventListener("click", function() {
    header1.style ="background: linear-gradient(to right, #00AAFF, #00ff6c); "
})

contact_me2.addEventListener("click", function() {
    header1.style ="background: linear-gradient(to right, #00AAFF, #00ff6c); "
})