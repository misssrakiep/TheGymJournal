//handlebars list
var agendaListItems = [];

var goalForm = document.querySelector(".goalForm");



var initialDate = new Date(2017, 4, 8);
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay) + 1;

document.getElementById("daysSince").innerHTML = "Day " + daysSince;

var agenda = document.getElementById("agenda");

var targetListText = document.querySelector(".targetList");

var targetTemplate = Handlebars.compile(targetListText.innerHTML);

var allTargets = document.querySelector(".allTargets");

var actualListText = document.querySelector(".actualList");

var actualTemplate = Handlebars.compile(actualListText.innerHTML);

var dayInput = document.getElementById("dayInput").value;
var runInput = document.getElementById("run");
var squatInput = document.getElementById("squatting");
var crunchInput = document.getElementById("crunchie");
var liftInput = document.getElementById("lift");
var twistInput = document.getElementById("twisty");
var jackInput = document.getElementById("jacky");
var allActual = document.querySelector(".allActual");
var dayData = [];
var runData = [];
var squatData = [];
var crunchData = [];
var liftData = [];
var twistData = [];
var jackData = [];
var goalListText = document.querySelector(".goalList");
var allGoals = document.querySelector(".allGoals");
var saveAchievement = document.getElementById("saveAchievement");
//var actual = document.querySelector(".actual");

var actualList = [];
saveAchievement.addEventListener("click", function() {
    actualList.push({
        day: dayInput.value,
        running: runInput.value,
        squats: squatInput.value,
        crunches: crunchInput.value,
        lifts: liftInput.value,
        twists: twistInput.value,
        jacks: jackInput.value
    });
localStorage.setItem('actualData', JSON.stringify(actualList));
//var actualData = JSON.parse(localStorage.getItem(actualData));
}, false);



//goal list output using handlebars
window.onload =
    function howManyDays() {
        if (daysSince == 1) {
            document.getElementById("Running").innerHTML = 5;
            document.getElementById("Squats").innerHTML = 50;
            document.getElementById("Crunches").innerHTML = 10;
            document.getElementById("lifts").innerHTML = 20;
            document.getElementById("twists").innerHTML = 25;
            document.getElementById("jacks").innerHTML = 25;
        } else if (daysSince == 2) {
            document.getElementById("Running").innerHTML = 5;
            document.getElementById("Squats").innerHTML = 55;
            document.getElementById("Crunches").innerHTML = 15;
            document.getElementById("lifts").innerHTML = 22;
            document.getElementById("twists").innerHTML = 30;
            document.getElementById("jacks").innerHTML = 25;
        } else if (daysSince == 3) {
            document.getElementById("Running").innerHTML = 5;
            document.getElementById("Squats").innerHTML = 60;
            document.getElementById("Crunches").innerHTML = 20;
            document.getElementById("lifts").innerHTML = 24;
            document.getElementById("twists").innerHTML = 35;
            document.getElementById("jacks").innerHTML = 30;
        } else if (daysSince == 4) {
            agenda.style.display = "none";
        } else if (daysSince == 5) {
            document.getElementById("Running").innerHTML = 6;
            document.getElementById("Squats").innerHTML = 65;
            document.getElementById("Crunches").innerHTML = 10;
            document.getElementById("lifts").innerHTML = 26;
            document.getElementById("twists").innerHTML = 40;
            document.getElementById("jacks").innerHTML = 35;
        } else if (daysSince == 6) {
            document.getElementById("Running").innerHTML = 6;
            document.getElementById("Squats").innerHTML = 70;
            document.getElementById("Crunches").innerHTML = 15;
            document.getElementById("lifts").innerHTML = 28;
            document.getElementById("twists").innerHTML = 45;
            document.getElementById("jacks").innerHTML = 40;
        } else if (daysSince == 7) {
            document.getElementById("Running").innerHTML = 6;
            document.getElementById("Squats").innerHTML = 75;
            document.getElementById("Crunches").innerHTML = 20;
            document.getElementById("lifts").innerHTML = 30;
            document.getElementById("twists").innerHTML = 50;
            document.getElementById("jacks").innerHTML = 45;

        } else if (daysSince == 8) {
            agenda.style.display = "none";
        } else if (daysSince == 9) {
            document.getElementById("Running").innerHTML = 7;
            document.getElementById("Squats").innerHTML = 80;
            document.getElementById("Crunches").innerHTML = 25;
            document.getElementById("lifts").innerHTML = 32;
            document.getElementById("twists").innerHTML = 55;
            document.getElementById("jacks").innerHTML = 50;
        } else if (daysSince == 10) {
            document.getElementById("Running").innerHTML = 7;
            document.getElementById("Squats").innerHTML = 85;
            document.getElementById("Crunches").innerHTML = 30;
            document.getElementById("lifts").innerHTML = 34;
            document.getElementById("twists").innerHTML = 60;
            document.getElementById("jacks").innerHTML = 55;
        } else if (daysSince == 11) {
            document.getElementById("Running").innerHTML = 7;
            document.getElementById("Squats").innerHTML = 90;
            document.getElementById("Crunches").innerHTML = 35;
            document.getElementById("lifts").innerHTML = 36;
            document.getElementById("twists").innerHTML = 65;
        } else if (daysSince == 12) {
            agenda.style.display = "none";
        } else if (daysSince == 13) {
            document.getElementById("Running").innerHTML = 8;
            document.getElementById("Squats").innerHTML = 95;
            document.getElementById("Crunches").innerHTML = 40;
            document.getElementById("lifts").innerHTML = 38;
            document.getElementById("twists").innerHTML = 70;
            document.getElementById("jacks").innerHTML = 65;
        } else if (daysSince == 14) {
            document.getElementById("Running").innerHTML = 8;
            document.getElementById("Squats").innerHTML = 100;
            document.getElementById("Crunches").innerHTML = 45;
            document.getElementById("lifts").innerHTML = 40;
            document.getElementById("twists").innerHTML = 75;
            document.getElementById("jacks").innerHTML = 70;
        } else if (daysSince == 15) {
            document.getElementById("Running").innerHTML = 8;
            document.getElementById("Squats").innerHTML = 105;
            document.getElementById("Crunches").innerHTML = 50;
            document.getElementById("lifts").innerHTML = 42;
            document.getElementById("twists").innerHTML = 80;
            document.getElementById("jacks").innerHTML = 75;
        } else if (daysSince == 16) {
            agenda.style.display = "none";
        } else if (daysSince == 17) {
            document.getElementById("Running").innerHTML = 9;
            document.getElementById("Squats").innerHTML = 110;
            document.getElementById("Crunches").innerHTML = 55;
            document.getElementById("lifts").innerHTML = 44;
            document.getElementById("twists").innerHTML = 85;
            document.getElementById("jacks").innerHTML = 80;
        } else if (daysSince == 18) {
            document.getElementById("Running").innerHTML = 9;
            document.getElementById("Squats").innerHTML = 115;
            document.getElementById("Crunches").innerHTML = 60;
            document.getElementById("lifts").innerHTML = 46;
            document.getElementById("twists").innerHTML = 90;
            document.getElementById("jacks").innerHTML = 85;
        } else if (daysSince == 19) {
            document.getElementById("Running").innerHTML = 9;
            document.getElementById("Squats").innerHTML = 120;
            document.getElementById("Crunches").innerHTML = 65;
            document.getElementById("lifts").innerHTML = 48;
            document.getElementById("twists").innerHTML = 95;
            document.getElementById("jacks").innerHTML = 90;
        } else if (daysSince == 20) {
            agenda.style.display = "none";
        } else if (daysSince == 21) {
            document.getElementById("Running").innerHTML = 10;
            document.getElementById("Squats").innerHTML = 125;
            document.getElementById("Crunches").innerHTML = 70;
            document.getElementById("lifts").innerHTML = 50;
            document.getElementById("twists").innerHTML = 100;
            document.getElementById("jacks").innerHTML = 95;
        } else if (daysSince == 22) {
            document.getElementById("Running").innerHTML = 10;
            document.getElementById("Squats").innerHTML = 130;
            document.getElementById("Crunches").innerHTML = 75;
            document.getElementById("lifts").innerHTML = 52;
            document.getElementById("twists").innerHTML = 105;
            document.getElementById("jacks").innerHTML = 100;
        } else if (daysSince == 23) {
            document.getElementById("Running").innerHTML = 10;
            document.getElementById("Squats").innerHTML = 135;
            document.getElementById("Crunches").innerHTML = 80;
            document.getElementById("lifts").innerHTML = 54;
            document.getElementById("twists").innerHTML = 110;
            document.getElementById("jacks").innerHTML = 105;
        } else if (daysSince == 24) {
            agenda.style.display = "none";
        } else if (daysSince == 25) {
            document.getElementById("Running").innerHTML = 11;
            document.getElementById("Squats").innerHTML = 140;
            document.getElementById("Crunches").innerHTML = 85;
            document.getElementById("lifts").innerHTML = 56;
            document.getElementById("twists").innerHTML = 115;
            document.getElementById("jacks").innerHTML = 110;

        } else if (daysSince == 26) {
            document.getElementById("Running").innerHTML = 11;
            document.getElementById("Squats").innerHTML = 145;
            document.getElementById("Crunches").innerHTML = 90;
            document.getElementById("lifts").innerHTML = 58;
            document.getElementById("twists").innerHTML = 120;
            document.getElementById("jacks").innerHTML = 115;
        } else if (daysSince == 27) {
            document.getElementById("Running").innerHTML = 11;
            document.getElementById("Squats").innerHTML = 150;
            document.getElementById("Crunches").innerHTML = 95;
            document.getElementById("lifts").innerHTML = 60;
            document.getElementById("twists").innerHTML = 125;
            document.getElementById("jacks").innerHTML = 120;
        } else if (daysSince == 28) {
            agenda.style.display = "none";
        } else if (daysSince == 29) {
            document.getElementById("Running").innerHTML = 12;
            document.getElementById("Squats").innerHTML = 155;
            document.getElementById("Crunches").innerHTML = 100;
            document.getElementById("lifts").innerHTML = 62;
            document.getElementById("twists").innerHTML = 130;
            document.getElementById("jacks").innerHTML = 125;
        } else if (daysSince == 30) {
            document.getElementById("Running").innerHTML = 12;
            document.getElementById("Squats").innerHTML = 160;
            document.getElementById("Crunches").innerHTML = 105;
            document.getElementById("lifts").innerHTML = 64;
            document.getElementById("twists").innerHTML = 135;
            document.getElementById("jacks").innerHTML = 130;
        } else {
            document.getElementById("Running").innerHTML = 0;
            document.getElementById("Squats").innerHTML = 0;
            document.getElementById("Crunches").innerHTML = 0;
            document.getElementById("lifts").innerHTML = 0;
            document.getElementById("twists").innerHTML = 0;
            document.getElementById("jacks").innerHTML = 0;
        }
    };

var runChart = document.getElementById("runChart");
var myRunChart = new Chart(runChart, {
    type: 'line',
    data: {
        xAxisID: "Day",
        yAxisID: "Distance",
        datasets: [{
                label: "Your Running Target",
                fill: false,
                lineTension: 0.02,
                borderCapStyle: 'butt',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{
                        x: 1,
                        y: 5
                    },
                    {
                        x: 2,
                        y: 5
                    },
                    {
                        x: 3,
                        y: 5
                    },
                    {
                        x: 4,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 6
                    },
                    {
                        x: 6,
                        y: 6
                    },
                    {
                        x: 7,
                        y: 6
                    },
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 7
                    },
                    {
                        x: 10,
                        y: 7
                    },
                    {
                        x: 11,
                        y: 7
                    },
                    {
                        x: 12,
                        y: 0
                    },
                    {
                        x: 13,
                        y: 8
                    },
                    {
                        x: 14,
                        y: 8
                    },
                    {
                        x: 15,
                        y: 8
                    },
                    {
                        x: 16,
                        y: 0
                    },
                    {
                        x: 17,
                        y: 9
                    },
                    {
                        x: 18,
                        y: 9
                    },
                    {
                        x: 19,
                        y: 9
                    },
                    {
                        x: 20,
                        y: 0
                    },
                    {
                        x: 21,
                        y: 10
                    },
                    {
                        x: 22,
                        y: 10
                    },
                    {
                        x: 23,
                        y: 10
                    },
                    {
                        x: 24,
                        y: 0
                    },
                    {
                        x: 25,
                        y: 11
                    },
                    {
                        x: 26,
                        y: 11
                    },
                    {
                        x: 27,
                        y: 11
                    },
                    {
                        x: 28,
                        y: 0
                    },
                    {
                        x: 29,
                        y: 12
                    },
                    {
                        x: 30,
                        y: 12
                    }
                ]
            },

        ],
    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

var squatChart = document.getElementById("squatChart");
var mySquatChart = new Chart(squatChart, {
    type: 'line',
    data: {
        xAxisID: "Day",
        yAxisID: "Amount",
        datasets: [{
                label: "Your Squat Target",
                fill: false,
                lineTension: 0.02,
                borderCapStyle: 'butt',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{
                        x: 1,
                        y: 50
                    },
                    {
                        x: 2,
                        y: 55
                    },
                    {
                        x: 3,
                        y: 5
                    },
                    {
                        x: 4,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 60
                    },
                    {
                        x: 6,
                        y: 65
                    },
                    {
                        x: 7,
                        y: 70
                    },
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 75
                    },
                    {
                        x: 10,
                        y: 80
                    },
                    {
                        x: 11,
                        y: 85
                    },
                    {
                        x: 12,
                        y: 0
                    },
                    {
                        x: 13,
                        y: 90
                    },
                    {
                        x: 14,
                        y: 95
                    },
                    {
                        x: 15,
                        y: 100
                    },
                    {
                        x: 16,
                        y: 0
                    },
                    {
                        x: 17,
                        y: 105
                    },
                    {
                        x: 18,
                        y: 110
                    },
                    {
                        x: 19,
                        y: 115
                    },
                    {
                        x: 20,
                        y: 0
                    },
                    {
                        x: 21,
                        y: 120
                    },
                    {
                        x: 22,
                        y: 125
                    },
                    {
                        x: 23,
                        y: 130
                    },
                    {
                        x: 24,
                        y: 0
                    },
                    {
                        x: 25,
                        y: 135
                    },
                    {
                        x: 26,
                        y: 140
                    },
                    {
                        x: 27,
                        y: 145
                    },
                    {
                        x: 28,
                        y: 0
                    },
                    {
                        x: 29,
                        y: 150
                    },
                    {
                        x: 30,
                        y: 155
                    }
                ]
            },

        ],
    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
//
var crunchChart = document.getElementById("crunchChart");
var myCrunchChart = new Chart(crunchChart, {
    type: 'line',
    data: {
        xAxisID: "Day",
        yAxisID: "Amount",
        datasets: [{
                label: "Your Crunch Target",
                fill: false,
                lineTension: 0.02,
                borderCapStyle: 'butt',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{
                        x: 1,
                        y: 10
                    },
                    {
                        x: 2,
                        y: 15
                    },
                    {
                        x: 3,
                        y: 20
                    },
                    {
                        x: 4,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 25
                    },
                    {
                        x: 6,
                        y: 30
                    },
                    {
                        x: 7,
                        y: 35
                    },
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 40
                    },
                    {
                        x: 10,
                        y: 45
                    },
                    {
                        x: 11,
                        y: 50
                    },
                    {
                        x: 12,
                        y: 0
                    },
                    {
                        x: 13,
                        y: 55
                    },
                    {
                        x: 14,
                        y: 60
                    },
                    {
                        x: 15,
                        y: 65
                    },
                    {
                        x: 16,
                        y: 0
                    },
                    {
                        x: 17,
                        y: 70
                    },
                    {
                        x: 18,
                        y: 75
                    },
                    {
                        x: 19,
                        y: 80
                    },
                    {
                        x: 20,
                        y: 0
                    },
                    {
                        x: 21,
                        y: 85
                    },
                    {
                        x: 22,
                        y: 90
                    },
                    {
                        x: 23,
                        y: 95
                    },
                    {
                        x: 24,
                        y: 0
                    },
                    {
                        x: 25,
                        y: 100
                    },
                    {
                        x: 26,
                        y: 105
                    },
                    {
                        x: 27,
                        y: 110
                    },
                    {
                        x: 28,
                        y: 0
                    },
                    {
                        x: 29,
                        y: 115
                    },
                    {
                        x: 30,
                        y: 120
                    }
                ]
            },

        ],
    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

var liftChart = document.getElementById("liftChart");
var myLiftChart = new Chart(liftChart, {
    type: 'line',
    data: {
        xAxisID: "Day",
        yAxisID: "Amount",
        datasets: [{
                label: "Your Leg Lift Target",
                fill: false,
                lineTension: 0.02,
                borderCapStyle: 'butt',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{
                        x: 1,
                        y: 20
                    },
                    {
                        x: 2,
                        y: 22
                    },
                    {
                        x: 3,
                        y: 24
                    },
                    {
                        x: 4,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 26
                    },
                    {
                        x: 6,
                        y: 28
                    },
                    {
                        x: 7,
                        y: 30
                    },
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 32
                    },
                    {
                        x: 10,
                        y: 34
                    },
                    {
                        x: 11,
                        y: 36
                    },
                    {
                        x: 12,
                        y: 0
                    },
                    {
                        x: 13,
                        y: 38
                    },
                    {
                        x: 14,
                        y: 40
                    },
                    {
                        x: 15,
                        y: 42
                    },
                    {
                        x: 16,
                        y: 0
                    },
                    {
                        x: 17,
                        y: 44
                    },
                    {
                        x: 18,
                        y: 46
                    },
                    {
                        x: 19,
                        y: 48
                    },
                    {
                        x: 20,
                        y: 0
                    },
                    {
                        x: 21,
                        y: 50
                    },
                    {
                        x: 22,
                        y: 52
                    },
                    {
                        x: 23,
                        y: 54
                    },
                    {
                        x: 24,
                        y: 0
                    },
                    {
                        x: 25,
                        y: 56
                    },
                    {
                        x: 26,
                        y: 58
                    },
                    {
                        x: 27,
                        y: 60
                    },
                    {
                        x: 28,
                        y: 0
                    },
                    {
                        x: 29,
                        y: 62
                    },
                    {
                        x: 30,
                        y: 64
                    }
                ]
            },

        ],
    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
//
var twistChart = document.getElementById("twistChart");
var myTwistChart = new Chart(twistChart, {
    type: 'line',
    data: {
        xAxisID: "Day",
        yAxisID: "Amount",
        datasets: [{
                label: "Your Russian Twist Target",
                fill: false,
                lineTension: 0.02,
                borderCapStyle: 'butt',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{
                        x: 1,
                        y: 20
                    },
                    {
                        x: 2,
                        y: 25
                    },
                    {
                        x: 3,
                        y: 30
                    },
                    {
                        x: 4,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 35
                    },
                    {
                        x: 6,
                        y: 40
                    },
                    {
                        x: 7,
                        y: 45
                    },
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 50
                    },
                    {
                        x: 10,
                        y: 55
                    },
                    {
                        x: 11,
                        y: 60
                    },
                    {
                        x: 12,
                        y: 0
                    },
                    {
                        x: 13,
                        y: 65
                    },
                    {
                        x: 14,
                        y: 70
                    },
                    {
                        x: 15,
                        y: 75
                    },
                    {
                        x: 16,
                        y: 0
                    },
                    {
                        x: 17,
                        y: 80
                    },
                    {
                        x: 18,
                        y: 85
                    },
                    {
                        x: 19,
                        y: 90
                    },
                    {
                        x: 20,
                        y: 0
                    },
                    {
                        x: 21,
                        y: 95
                    },
                    {
                        x: 22,
                        y: 100
                    },
                    {
                        x: 23,
                        y: 105
                    },
                    {
                        x: 24,
                        y: 0
                    },
                    {
                        x: 25,
                        y: 110
                    },
                    {
                        x: 26,
                        y: 115
                    },
                    {
                        x: 27,
                        y: 120
                    },
                    {
                        x: 28,
                        y: 0
                    },
                    {
                        x: 29,
                        y: 125
                    },
                    {
                        x: 30,
                        y: 130
                    }
                ]
            },

        ],
    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
//
var jackChart = document.getElementById("jackChart");
var myJackChart = new Chart(jackChart, {
    type: 'line',
    data: {
        xAxisID: "Day",
        yAxisID: "Amount",
        datasets: [{
                label: "Your Jumping Jack Target",
                fill: false,
                lineTension: 0.02,
                borderCapStyle: 'butt',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [{
                        x: 1,
                        y: 25
                    },
                    {
                        x: 2,
                        y: 30
                    },
                    {
                        x: 3,
                        y: 35
                    },
                    {
                        x: 4,
                        y: 0
                    },
                    {
                        x: 5,
                        y: 40
                    },
                    {
                        x: 6,
                        y: 45
                    },
                    {
                        x: 7,
                        y: 50
                    },
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 55
                    },
                    {
                        x: 10,
                        y: 60
                    },
                    {
                        x: 11,
                        y: 65
                    },
                    {
                        x: 12,
                        y: 0
                    },
                    {
                        x: 13,
                        y: 70
                    },
                    {
                        x: 14,
                        y: 75
                    },
                    {
                        x: 15,
                        y: 80
                    },
                    {
                        x: 16,
                        y: 0
                    },
                    {
                        x: 17,
                        y: 85
                    },
                    {
                        x: 18,
                        y: 90
                    },
                    {
                        x: 19,
                        y: 95
                    },
                    {
                        x: 20,
                        y: 0
                    },
                    {
                        x: 21,
                        y: 100
                    },
                    {
                        x: 22,
                        y: 105
                    },
                    {
                        x: 23,
                        y: 110
                    },
                    {
                        x: 24,
                        y: 0
                    },
                    {
                        x: 25,
                        y: 115
                    },
                    {
                        x: 26,
                        y: 120
                    },
                    {
                        x: 27,
                        y: 125
                    },
                    {
                        x: 28,
                        y: 0
                    },
                    {
                        x: 29,
                        y: 130
                    },
                    {
                        x: 30,
                        y: 135
                    }
                ]
            },

        ],
    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

////var Chart = require('Chart.js');
var liftProgress = document.querySelector(".liftProgress");
var crunchProgress = document.querySelector(".crunchProgress");
var twistProgress = document.querySelector(".twistProgress");
var jackProgress = document.querySelector(".jackProgress");
var chart = document.querySelector(".runProgress");
var squatProgress = document.querySelector(".squatProgress");
var progress = document.getElementById("progress");
var allTargets = document.querySelector(".allTargets");
progress.addEventListener('click', function() {
	allTargets.style.display = "none";
    agenda.style.display = "none";
    goalForm.style.display = "none";
    chart.style.display = "block";
    squatProgress.style.display = "block";
    crunchProgress.style.display = "block";
    liftProgress.style.display = "block";
    twistProgress.style.display = "block";
    jackProgress.style.display = "block";
});
//
//
var home = document.getElementById("home");
home.addEventListener('click', function() {
    agenda.style.display = "block";
    goalForm.style.display = "block";
    allTargets.style.display = "none";
    chart.style.display = "none";
    squatProgress.style.display = "none";
    crunchProgress.style.display = "none";
    liftProgress.style.display = "none";
    twistProgress.style.display = "none";
    jackProgress.style.display = "none";
});

var allActual = document.querySelector(".allActual");


var target = document.getElementById("target");
target.addEventListener('click', function() {
    agenda.style.display = "none";
    goalForm.style.display = "none";
	chart.style.display = "none";
    squatProgress.style.display = "none";
    crunchProgress.style.display = "none";
    liftProgress.style.display = "none";
    twistProgress.style.display = "none";
    jackProgress.style.display = "none";
	
    allTargets.innerHTML = targetTemplate({
        targetList: targetList
    });
	
var actualDataList = JSON.parse(localStorage.actualData);
	
    allActual.innerHTML = actualTemplate({
        actualList: actualDataList
    });
});