var data = 1;

document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

function decrement() {

    if (data > 0) {

        data = data - 1;
        document.getElementById("counting").innerText = data;


    }
}