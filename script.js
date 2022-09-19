

// Box = document.getElementById("box")

// Box.addEventListener("mouseover", function Giftitem() {

//     box.textContent = "coungratiolation you have won somthing"
//     console.log("s")

// })

// Box.addEventListener("mouseout", function Giftitem() {

//     box.textContent = "Open the box!"
//     console.log("s")

// })

// InputBtn = document.getElementById("input-btn")

// InputBtn.addEventListener("click", function BtnClicked() {
//     console.log("clicked")
// })


// let myLeads = ["sada", "zara", "kara"]
// const inputEl = document.getElementById("input-el")
// const InputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")




// InputBtn.addEventListener("click", function BtnClicked() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);


// })



// for (x = 0; x <= myLeads.length; x++) {

//     ulEl.textContent += " " + myLeads[x] + " "
// }









// let myLeads = ["sada", "zara", "kara"]
// const inputEl = document.getElementById("input-el")
// const InputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")




// InputBtn.addEventListener("click", function BtnClicked() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);


// })



// for (x = 0; x <= myLeads.length; x++) {

//     ulEl.innerHTML += "<li> " + myLeads[x] + "</li >"
// }









// let myLeads = ["sada", "zara", "kara"]
// const inputEl = document.getElementById("input-el")
// const InputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const allInEl = document.getElementById("divEl")



// InputBtn.addEventListener("click", function BtnClicked() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);


// })



// for (x = 0; x <= myLeads.length; x++) {

//     ulEl.innerHTML += '<li id="li-el"> ' + myLeads[x] + '</li >'

// }



// divEl.innerHTML += "<button id='buy-btn' onclick='buyClick()'>" + "Buy!" + "</button>"

// function buyClick() {
//     divEl.innerHTML += "<p id='thanks-p'>" + "Thank You For your Purches!" + "</p>"
// }









// let myLeads = ["sada", "zara", "kara"]
// const inputEl = document.getElementById("input-el")
// const InputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const allInEl = document.getElementById("divEl")
// let listItems = document.body


// InputBtn.addEventListener("click", function BtnClicked() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads);


// })



// for (x = 0; x <= myLeads.length; x++) {


//     //way1

//     // ulEl.innerHTML += "<li> " + myLeads[x] + "</li> "

//     //way2
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[x]
//     // ulEl.append(li)
// }











// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const InputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")




// InputBtn.addEventListener("click", function BtnClicked() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLead()


// })

// let renderLead = () => {

//     let listItems = ""

//     for (x = 0; x < myLeads.length; x++) {



//         //listItems += "<li> <a href='" + myLeads[x] + "'target='_blank'>" + myLeads[x] + "</a>" + "</li > " + "</a > "

//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[x]}'>
//                 ${myLeads[x]}
//                 </a>
//             </li>
// `
//     }

//     ulEl.innerHTML = listItems
// }









//strings template




// const recipient = "james"
// const sender = "sadra"




// const email = `hey  ${recipient}!
// How is it going?
// cheers ${sender}`

// console.log(email)










// let myLeads = `["www.google.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("wwww.yahoo.com")

// console.log(myLeads)




// let myLeads = ["www.google.com"]

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)







// let myLeads = `["www.google.com"]`


// myLeads = JSON.parse(myLeads)


// myLeads.push("www.yahoo.com")


// myLeads = JSON.stringify(myLeads)


// console.log(myLeads)
// console.log(typeof myLeads)










// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const InputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const deleteBTN = document.getElementById("delete-btn")









// let render = (leads) => {

//     let listItems = ""

//     for (x = 0; x < leads.length; x++) {



//         listItems += `
//         <li> <a target='_blank'    href='${leads[x]}' >
//         ${leads[x]}
//         </a>
//         </li >
// `
//     }

//     ulEl.innerHTML = listItems
// }








// if (leadsFromLocalStorage) {

//     myLeads = leadsFromLocalStorage

//     render(myLeads)
// }











// deleteBTN.addEventListener('dblclick', function () {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })






// InputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""

//     localStorage.setItem("myLeads", JSON.stringify(myLeads))

//     render(myLeads)


// })









// function add(num1, num2) {

//     return num1 + num2
// }

// console.log(add(3, 4))









// function getFirst(arr) {
//     return arr[0]
// }

// console.log(getFirst([11, 0, 1, 2]))














let myLeads = []
const inputEl = document.getElementById("input-el")
const InputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBTN = document.getElementById("delete-btn")
const saveBTN = document.getElementById("save-btn")





saveBTN.addEventListener("click", function () {


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        myLeads.push(tabs[0].url)


        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)



    })



})







let render = (leads) => {

    let listItems = ""

    for (x = 0; x < leads.length; x++) {



        listItems += `
        <li> <a target='_blank'    href='${leads[x]}' >
        ${leads[x]}
        </a>
        </li >
`
    }

    ulEl.innerHTML = listItems
}











if (leadsFromLocalStorage) {

    myLeads = leadsFromLocalStorage

    render(myLeads)
}











deleteBTN.addEventListener('dblclick', function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})






InputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)


})