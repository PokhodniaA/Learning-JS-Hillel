window.onload = function () {

    function Move(currentIndex, nextIndex) {
        forms[currentIndex].classList.remove('center');
        forms[nextIndex].classList.add('center');
    }

    const forms = document.querySelectorAll('form');

    forms.forEach(function (node, currentIndex) {
        const button = node.querySelector('button'),
            login = node.querySelector('input[name = login]'),
            password = node.querySelector('input[name = password]'),
            nextIndex = (currentIndex == forms.length - 1) ? 0 : currentIndex + 1;
        button.onclick = function (event) {
            event.preventDefault();
            ajax({
                url: 'http://localhost:3004/',
                method: 'get',
                success: (data, status) => {
                    if (status == 200) {
                        Move(currentIndex, nextIndex)
                    }
                },
                error: (error) => console.log(error, "error"),
            })
        }
    })
}

