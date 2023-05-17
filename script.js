{
    document.getElementById("button").onclick = function () {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const age = document.getElementById("age").value;
        const hobby = document.getElementById("hobby").value;

        document.getElementById("welcome").innerHTML = `Welcome to our website ${name} ${surname} who are ${age} years old and who hobby is ${hobby}.`;
    }
}