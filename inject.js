// Auto-fill username from EB API (if available)
EB.System.getUserName(function(result) {
    var userField = document.getElementById("username");
    if (userField && result.userName) {
        userField.value = result.userName;
    }
});

// Style tweaks for SAP RFUI
document.body.style.backgroundColor = "#ffffff";

var style = document.createElement('style');
style.innerHTML = `
    .sapRFUIButton {
        height: 48px !important;
        font-family: Roboto-Bold !important;
        font-size: 18px !important;
    }
    input[type="text"] {
        font-size: 18px;
    }
    .footer, .header-banner {
        display: none !important;
    }
`;
document.head.appendChild(style);

// Optional: Hide login button if needed
var loginBtn = document.getElementById("login-button");
if (loginBtn) {
    loginBtn.style.display = "none";
} 

// Create a logout button
var logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";
logoutBtn.style.position = "fixed";
logoutBtn.style.top = "10px";
logoutBtn.style.right = "10px";
logoutBtn.style.zIndex = "9999";
logoutBtn.style.padding = "10px 20px";
logoutBtn.style.backgroundColor = "#d9534f";
logoutBtn.style.color = "#fff";
logoutBtn.style.border = "none";
logoutBtn.style.borderRadius = "5px";
logoutBtn.style.fontSize = "16px";
logoutBtn.style.cursor = "pointer";
logoutBtn.onclick = function() {
    window.location.href = "https://your-sap-server/logout"; // Replace with your actual logout URL
};

// Add the button to the page
document.body.appendChild(logoutBtn);
