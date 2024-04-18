function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPointSpeed = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / demeritPointSpeed);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", points);
        }
    }
}

const speed = prompt("80");
calculateDemeritPoints(Number(speed));
