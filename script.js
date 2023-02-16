document.querySelector("#pwd").addEventListener('keyup', function (e) {
    // console.log(e.target.value);
    const userPwd = document.querySelector("#pwd").value;
    const validPwd = (userPwd.length >= 6 && userPwd.length <= 30) ? true : false;
    if (validPwd) {
        e.target.className = "green";
    } else {
        e.target.className = "red";
    }
});



document.querySelector("#male").addEventListener('change', function (e) {
    // console.log(e.target.value);

});
document.querySelector("#female").addEventListener('change', function (e) {
    // console.log(e.target.value);

});

let submit = document.querySelector("input[type='submit']");
submit.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    // console.log("SUBMIT!");


    // validate name field
    let userName = document.querySelector("#name").value;
    const nameRegex = /^[a-z\-]{2,30}$/i;
    const validName = nameRegex.test(userName);
    // console.log ("validName: ", validName);

    // validate pwd field
    const userPwd = document.querySelector("#pwd").value;
    const validPwd = (userPwd.length >= 6 && userPwd.length <= 30) ? true : false;
    // console.log ("validPwd: ", validPwd);

    // validate gender
    let radios = document.getElementsByName("gender");
    // console.log(radios);
    let userGender;
    for (let radio of radios) {
        if (radio.checked) {
            userGender = radio.value;
        }
    }
    // console.log(userGender);
    let validGender = true;
    if (userGender !== "m" && userGender !== "f") {
        validGender = false;
    }
    /*
    let validGender = false;
    if (userGender == "m" || userGender == "f"){
        validGender = true;
    }
    */

    // validate country
    const countryList = ["USA", "Canada", "Mexico"];
    const country = document.querySelector('select');
    const userCountry = country.options[country.selectedIndex].value;
    // console.log("User country: ", userCountry);
    let validCountry = countryList.includes(userCountry);
    // console.log("validCountry: ", validCountry);


    // validate checkboxes
    const validTerms = document.querySelector("#terms").checked;
    const validPrivacy = document.querySelector("#privacy").checked;

    if (validName &&
        validPwd &&
        validGender &&
        validCountry &&
        validTerms &&
        validPrivacy
    ) {
        console.log("SUBMIT!");
    } else {
        e.preventDefault();
    }

}