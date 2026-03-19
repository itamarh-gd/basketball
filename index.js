let homeScoreEl = document.getElementById("home_score")
let guestScoreEl = document.getElementById("guest_score")

let homeScore = 0
let guestScore = 0

function homeScoreAdd(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore 
}

function guestScoreAdd(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore 
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore 
}