let mainList1 = document.getElementById("mainList1")
let mainList2 = document.getElementById("mainList2")
let mainList3 = document.getElementById("mainList3")

const mainListArr = ["Wordpress", "React JS", "ECommerce", "Web Design", "UX/UI", "Photography", "Javascript", "CSS / SASS", "Adobe Creative Cloud Suite", "MySQL", "Project Management"]

function listItems(){
  let listInterval = setInterval(function(){
    mainList1.textContent = mainListArr[2]
    mainList2.textContent = mainListArr[1]
    mainList3.textContent = mainListArr[0]
    let shifted = mainListArr.shift()
    mainListArr.push(shifted)
  }, 2000)
}

listItems()