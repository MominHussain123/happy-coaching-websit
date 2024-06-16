// heart.style.display = "none"
function plus(word) {
    let sta = document.getElementById('star1').parentNode

    console.log(sta);
    let star1 = document.getElementById('star1')
    let star2 = document.getElementById('star2')
    let star3 = document.getElementById('star3')
    let star4 = document.getElementById('star4')
    let heart1 = document.getElementById('heart1')
    let heart2 = document.getElementById('heart2')
    let heart3 = document.getElementById('heart3')
    let heart4 = document.getElementById('heart4')
    let helo1 = document.getElementById('helo1')
    let helo2 = document.getElementById('helo2')
    let helo3 = document.getElementById('helo3')
    let helo4 = document.getElementById('helo4')
    if(word === "add1"){
        star1.style.display = "none"
        heart1.style.display = "inline"
        helo1.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est praesentium fuga nisi ipsam dolorum sit? Voluptates, ab voluptate eos odit asperiores a iste deleniti expedita illo consequatur itaque autem qui!"
    }else if(word === "subtract1"){
        star1.style.display = "inline"
        heart1.style.display = "none"
        helo1.innerHTML = ""
    }else if(word === "add2"){
        star2.style.display = "none"
        heart2.style.display = "inline"
        helo2.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est praesentium fuga nisi ipsam dolorum sit? Voluptates, ab voluptate eos odit asperiores a iste deleniti expedita illo consequatur itaque autem qui!"
    }else if(word === "subtract2"){
        star2.style.display = "inline"
        heart2.style.display = "none"
        helo2.innerHTML = ""
    }else if(word === "add3"){
        star3.style.display = "none"
        heart3.style.display = "inline"
        helo3.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est praesentium fuga nisi ipsam dolorum sit? Voluptates, ab voluptate eos odit asperiores a iste deleniti expedita illo consequatur itaque autem qui!"
    }else if(word === "subtract3"){
        star3.style.display = "inline"
        heart3.style.display = "none"
        helo3.innerHTML = ""
    }else if(word === "add4"){
        star4.style.display = "none"
        heart4.style.display = "inline"
        helo4.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est praesentium fuga nisi ipsam dolorum sit? Voluptates, ab voluptate eos odit asperiores a iste deleniti expedita illo consequatur itaque autem qui!"
    }else if(word === "subtract4"){
        star4.style.display = "inline"
        heart4.style.display = "none"
        helo4.innerHTML = ""
    } 
}
