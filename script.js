let container = document.createElement("div")
container.classList.add("conatiner")

let span = document.getElementById("span")
span.innerHTML = 10


document.body.append(container)
let num = 10;
setTimeout(()=>{
    num = num-1
    span.innerHTML = num
    setTimeout(()=>{
        num = num-1
        span.innerHTML = num
        setTimeout(()=>{
            num = num-1
            span.innerHTML = num
            setTimeout(()=>{
                num = num-1
                span.innerHTML = num
                setTimeout(()=>{
                    num = num-1
                    span.innerHTML = num
                    setTimeout(()=>{
                        num = num-1
                        span.innerHTML = num
                        setTimeout(()=>{
                            num = num-1
                            span.innerHTML = num
                            setTimeout(()=>{
                                num = num-1
                                span.innerHTML = num
                                setTimeout(()=>{
                                    num = num-1
                                    span.innerHTML = num
                                    setTimeout(()=>{
                                        num = num-1
                                        span.innerHTML = "Happy Independence Day"
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
