function go() {
    var n = document.getElementById("text").value;
    document.getElementById("test").innerHTML = identity(n);
}

function identity(x) {
    return x;
}

export {go}