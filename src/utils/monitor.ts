const m = (window) => {
    let l;
    
    window.console.log = function (arg) {
        l = arg
    }
    return l
}

export default m