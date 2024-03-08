const montains_behind = document.querySelector("#mountains_behind")
const montains_front = document.querySelector("#mountains_front")
const header = document.querySelector("header")
const stars = document.querySelector("#stars")
const moon = document.querySelector("#moon")
const text = document.querySelector("#text")
const btn = document.querySelector(".btn")

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if(scrollY * 1.5 < 1000) {
        montains_behind?.style.setProperty("top", `${scrollY * 0.5}px`)
        montains_front?.style.setProperty("top", `${scrollY * 0}px`)
        // text?.style.setProperty("margin-right", `${scrollY * 4}px`)

        // if(scrollY * 1.5 < 425) 
        
        if(scrollY * 1.05 < 750) {
            text?.style.setProperty("margin-top", `${scrollY * 1.5}px`)
            btn?.style.setProperty("margin-top", `${scrollY * 1.5}px`)
            moon?.style.setProperty("top", `${scrollY * 1.05}px`)
        }
        
        stars?.style.setProperty("left", `${scrollY * 0.25}px`)
        header?.style.setProperty("top", `${scrollY * 0.5}px`)
    }

    
    
})

