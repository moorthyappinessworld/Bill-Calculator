const optionValue = "";
        function viewOptions() {
            var e = document.getElementById("service");
            optionValue = e.options[e.selectedIndex].text;
        }
        function showOutput() {
            const amountCheck = document.getElementById("amount").value;
            const countCheck = document.getElementById("count").value;
            const symbol = '+';
            if (!optionValue) {
                document.getElementById('tip').innerHTML = "Please select the Options";
                document.getElementById('total').innerHTML = "Please select the Options";
                document.getElementById('share').innerHTML = "Please select the Options";
            } else if (amountCheck === "") {
                document.getElementById('tip').innerHTML = "Please Enter the Aount";
                document.getElementById('total').innerHTML = "Please Enter the Aount";
                document.getElementById('share').innerHTML = "Please Enter the Aount";
            } else if (countCheck === "") {
                document.getElementById('tip').innerHTML = "Please Enter the Count";
                document.getElementById('total').innerHTML = "Please Enter the Count";
                document.getElementById('share').innerHTML = "Please Enter the Count";
            } else {
                if (optionValue === "Outstanding") {
                    const tipTotal = eval(amountCheck * 0.10);
                    const Total = eval(amountCheck + symbol + tipTotal);
                    const Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else if (optionValue === "Good") {
                    const tipTotal = eval(amountCheck * 0.08);
                    const Total = eval(amountCheck + symbol + tipTotal);
                    const Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else if (optionValue === "Okay") {
                    const tipTotal = eval(amountCheck * 0.06);
                    const Total = eval(amountCheck + symbol + tipTotal);
                    const Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else if (optionValue === "Bad") {
                    const tipTotal = eval(amountCheck * 0.04);
                    const Total = eval(amountCheck + symbol + tipTotal);
                    const Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else {
                    const tipTotal = eval(amountCheck * 0.02);
                    const Total = eval(amountCheck + symbol + tipTotal);
                    const Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                }
            }

        }
