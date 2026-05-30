for(let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Loop terminated at value 7");
        break;
    }
    else if (i === 5) {
        console.log("Skipping value 5");
        continue;
    }
    console.log("Current value:", i);
}