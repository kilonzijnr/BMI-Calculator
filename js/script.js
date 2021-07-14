function onSubmit() {
    console.log("Function has been hit!!!");

    let weight = parseInt(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let bmi = calculateBMI(weight, height)
}

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    console.log("BMI: " + bmi)
    if (bmi >= 30) {
        document.getElementById("output").innerHTML = "You are obese, consider taking a workout routine";
    }
    else if (bmi >= 25) {
        document.getElementById("output").innerHTML = "You are overweight, consider taking a workout routine";
    }
    else if (bmi >= 18.5) {
        document.getElementById("output").innerHTML = "You have a healthy BMI";
    }
    else {
        document.getElementById("output").innerHTML = "You underweight. Get on a healthy eating programme";
    }

    return bmi;
}
 