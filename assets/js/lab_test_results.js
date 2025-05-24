function cal(event){
            event.preventDefault();

            const glucose = parseFloat(document.getElementById('glucose').value);
            const hemoglobin = parseFloat(document.getElementById('hemoglobin').value);
            const results = document.getElementById('result');

            let msg = [];

            if(glucose < 70) {
                msg.push('Glucose is LOW. (Possible hypoglycemia)');
            }
            else if (glucose > 99) {
                msg.push('Glucose is HIGH. (May indicate diabetes risk)');
            } 
            else {
                msg.push('Glucose is NORMAL.');
            }

            if (hemoglobin < 13.8) {
                msg.push(`<br>Hemoglobin is LOW. (Possible anemia)`);
            } 
            else if (hemoglobin > 17.2) {
                msg.push(`<br>Hemoglobin is HIGH. (Possible dehydration or other issues)`);
            } 
            else {
                msg.push(`<br>Hemoglobin is NORMAL.`);
            }

            results.innerHTML = `<strong> ${msg} </strong>`;
            console.log(msg);
            
        }