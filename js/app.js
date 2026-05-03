
document.getElementById(`signup`).addEventListener(`submit`, e => {
    e.preventDefault();
    const form = e.target;
    let valid = true;

    const missionchecked = form.querySelector('input[name="mission"]:checked');
    if (!missionchecked) {
        valid = false;
        form.querySelector('#mission1').closest('.radio-group').classList.add(`error`);
        document.getElementById("errorMission").textContent = "Choose only one";
    }
    else {
        document.getElementById("errorMission").textContent = "";
        form.querySelector('#mission1').closest('.radio-group').classList.remove(`error`);
    }

    const emailcheck = form.email.value.trim();
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailcheck === "") {
        valid = false;
        document.getElementById('erorEmail').textContent = 'Email address required.';
        form.email.closest('div').classList.add(`error`);
    } else if (!emailregex.test(emailcheck)) {
        valid = false;
        document.getElementById('erorEmail').textContent = 'Enter valid email address.';
        form.email.closest('div').classList.add(`error`);
    } else {
        document.getElementById('erorEmail').textContent = '';
        form.email.closest('div').classList.remove(`error`);
    }

    const namecheck = form.name.value.trim();
    const namesize = namecheck.split(' ').filter(part => part.length > 0);
    const numbercheck = /\d/;

    if (namecheck === "") {
        valid = false;
        document.getElementById('erorName').textContent = 'Name is required';
        form.name.closest('div').classList.add(`error`);
    } else if (numbercheck.test(namecheck)) {
        valid = false;
        document.getElementById('erorName').textContent = 'Enter valid name and surname.';
        form.name.closest('div').classList.add(`error`);
    }else if (namesize.length < 2) {
        valid = false;
        document.getElementById('erorName').textContent = 'Enter valid name and surname.';
        form.name.closest('div').classList.add(`error`);
    } else {
        document.getElementById('erorName').textContent = '';
        form.name.closest('div').classList.remove(`error`);
    }

    if (!form.accept.checked) {
        valid = false;
        document.getElementById('errorTerms').textContent = 'I know its scary, but you need to accept';
        form.accept.closest('div').classList.add(`error`);
    }
    else {
        document.getElementById('errorTerms').textContent = '';
        form.accept.closest('div').classList.remove(`error`);
    }

    if (form.rola.value === ""){
        valid = false;
        document.getElementById('errorRole').textContent = 'Please select role';
        form.rola.closest('div').classList.add(`error`);
    }
    else {
        document.getElementById('errorRole').textContent = '';
        form.rola.closest('div').classList.remove(`error`);
    }

    if (valid) {
        alert(`See you among the stars.`);
        form.reset();
    }
});
