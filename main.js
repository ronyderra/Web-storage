

// Web Storage - שמירת מידע במחשב הלקוח
// רק הדפדפן בעצמו יכול לבצע את השמירה במקום מרכזי בו הדפדפן משתמש
// אנו לא יכולים לשמור קבצים במחשב הלקוח איפה שבא לנו
// אנו יכולים לומר לדפדפן לשמור עבורנו את המידע
// קיימים מספר מקומות בהם ניתן לשמור מידע
// sessionStorage - שמירת מידע שנשמר רק בגלישה הנוכחית
// localStorage - שמירת מידע שנשמר גם עבור גלישות עתידיות
// cookies - שמירת מידע שיכול להיות עבור הגלישה הנוכחית ועבור גלישות עתידיות
// ויש עוד...   

// function saveToSessionStorage() {
//     sessionStorage.setItem("color", "green");
//     sessionStorage.setItem("font", "david");
// }

// function readFromSessionStorage() {
//     var color = sessionStorage.getItem("color");
//     var font = sessionStorage.getItem("font");
//     alert("Color: " + color + ", Font: " + font);
// }

// function saveToLocalStorage() {
//     localStorage.setItem("color", "green");
//     localStorage.setItem("font", "david");
// }

// function readFromLocalStorage() {
//     var color = localStorage.getItem("color");
//     var font = localStorage.getItem("font");
//     alert("Color: " + color + ", Font: " + font);
// }

function saveNonPersistentCookie() {
    document.cookie = "color=green";
    document.cookie = "font=david";
}

function readNonPersistentCookie() {
    alert(document.cookie);
}

function savePersistentCookie() {
    var date = new Date(); // Get current date and time.
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = "color=green; expires=" + date.toUTCString();
    document.cookie = "font=david; expires=" + date.toUTCString();
}

function readPersistentCookie() {
    alert(document.cookie);
}



