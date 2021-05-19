// if(!(isNaN(data)))

function convertFahrToCelsius(data) { 
        if((!(Number(data)) || !parseInt(data)) && Array.isArray(data) === false) {
            let data1 = JSON.stringify(data)                                                                                                                 
            return console.error(`${data1} is not a valid number but a/an ${typeof(data)}`);  
        }

        if(Array.isArray(data) === true) {
            let data2 = JSON.stringify(data)
            return console.error(`${data2} is not a valid number but a/an array`);
        }

        else {
            var result = (data - 32) * 5/9;  
            return console.log(`${result.toFixed(4)}`);  
        }
        
}

// convertFahrToCelsius(50);
// convertFahrToCelsius('50');
// convertFahrToCelsius({"temp": 0})
// convertFahrToCelsius([1,2,3])
// convertFahrToCelsius(false);





function checkYuGiOh(n) {

    if (isNaN(n)) {
        let nError = JSON.stringify(n);
        return console.error(`Invalid parameter: ${nError}`);
        
    }

    var pot = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            var potX = [];
                if (j % 2 === 0) {
                    potX.push("yu");
                }

                if (j % 3 === 0) {
                    potX.push("gi");
                }

                if (j % 5 === 0) {
                    potX.push("oh");
                }
        }
        if (potX.length > 0)
            pot.push(potX.join("-"));

        else
            pot.push(i);

    }
    return console.log(pot);
    
}

// checkYuGiOh(10);
// checkYuGiOh('5');
// checkYuGiOh('fizzbuzz is meh');


