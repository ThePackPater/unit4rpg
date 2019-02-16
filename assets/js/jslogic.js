
        var cpuRdm = ["H", "T", "D", "E", "N"];

        var won = 0;

        var lost = 0;

        var cpu = document.getElementById("#cpuChose");

        var playerOne = document.getElementById("#playerOne");

        var wonText = document.getElementById("#won");

        var lostText = document.getElementById("#lost");


        var N = {

            firstName: "Issac",
            lastName: "Newton",
            attack: 55,
            defense: 25,
            heatlh: 200,
            img: "assets/newtonattack.gif",
            //: function(movePlayer) into battlerealm #playerOne the have cpu choose random move to #cpu        
        
        };

        var T = {

            firstName: "Nikola",
            lastName: "Tesla",
            attack: 60,
            defense: 15,
            heatlh: 220,
            img: "assets/teslaattack.gif",
            //: function(movePlayer) into battlerealm #playerOne the have cpu choose random move to #cpu

        };

        var E = {

            firstName: "Albert",
            lastName: "Einstien",
            attack: 75,
            defense: 30,
            heatlh: 165,
            img: "assets/einstienattack.gif",
            //: function(movePlayer) into battlerealm #playerOne the have cpu choose random move to #cpu

        };

        var D = {

            firstName: "Charles",
            lastName: "Darwin",
            attack: 85,
            defense: 25,
            heatlh: 165,
            img: "assets/darwinattack.gif",
            //: function(movePlayer) into battlerealm #playerOne the have cpu choose random move to #cpu

        };

        var H = {

            firstName: "Stephen",
            lastName: "Hawking",
            attack: 80,
            defense: 30,
            heatlh: 160,
            img: "assets/hawkingattack.gif",
            //: function(movePlayer) into battlerealm #playerOne the have cpu choose random move to #cpu

        };

        document.onclick = function (playerOne) {

            var playerOneChose = playerOne.click;

            var cpuChose = cpuRdm[Math.floor(Math.random() * cpuRdm.length)];

            if (playerOneChose === "N") {

                $("#playerOneChose").html(

                    "<img src = 'assets/newtonattack.gif' />"

                );
            }

            if ((playerOneChose === "E") || (playerOneChose === "D") || (playerOneChose === "T") || (playerOneChose === "H") || (playerOneChose === "N")) {

                if ((playerOneChose === "E" && cpuChose === "N" || "T")

                    (playerOneChose === "D" && cpuChose === "E" || "T")

                    (playerOneChose === "T" && cpuChose === "N" || "H")

                    (playerOneChose === "H" && cpuChose === "E" || "D")

                    (playerOneChose === "N" && cpuChose === "D" || "H")) {

                    won++;

                } else {

                    lost++;

                }

                if (won > 3) {

                    location.replace("ultimate.html")

                }


                if (lost > 3) {

                    location.replace("index.html")

                }

            }

        }


  