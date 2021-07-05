var optionValue = "";
        function changeText() {
            var e = document.getElementById("service");
            optionValue = e.options[e.selectedIndex].text;
        }
        function showInput() {
            var amountCheck = document.getElementById("amount").value;
            var countCheck = document.getElementById("count").value;
            var symbol = '+';
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
                    var tipTotal = eval(amountCheck * 0.10);
                    var Total = eval(amountCheck + symbol + tipTotal);
                    var Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else if (optionValue === "Good") {
                    var tipTotal = eval(amountCheck * 0.08);
                    var Total = eval(amountCheck + symbol + tipTotal);
                    var Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else if (optionValue === "Okay") {
                    var tipTotal = eval(amountCheck * 0.06);
                    var Total = eval(amountCheck + symbol + tipTotal);
                    var Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else if (optionValue === "Bad") {
                    var tipTotal = eval(amountCheck * 0.04);
                    var Total = eval(amountCheck + symbol + tipTotal);
                    var Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                } else {
                    var tipTotal = eval(amountCheck * 0.02);
                    var Total = eval(amountCheck + symbol + tipTotal);
                    var Sharing = eval(Total / countCheck);
                    document.getElementById('tip').innerHTML = tipTotal;
                    document.getElementById('total').innerHTML = Total;
                    document.getElementById('share').innerHTML = Sharing;
                }
            }

        }
