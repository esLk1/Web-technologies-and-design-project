
document.getElementById(`signup`).addEventListener(`submit`, e => {
    e.preventDefault();
    const form = e.target;
    let valid = true;

    form.querySelectorAll(`.error`).forEach(el => el.classList.remove(`error`));

    ["name", "email", "rola", "accept"].forEach(id => {
        const input = form.querySelector("#" + id);
        const wrapper = input.closest(`div`);

        if (!input.checkValidity()) {
            wrapper.classList.add(`error`);
            valid = false;
            }
    });

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
    if (!emailregex.test(emailcheck)) {
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

    if (numbercheck.test(namecheck)) {
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

    if (valid) {
        alert(`See you among the stars.`);
        form.reset();
    }
});
