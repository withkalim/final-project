const slider = document.querySelector(".slider2");
const next = document.querySelector(".next2");
const prev = document.querySelector(".prev2");
const card = document.querySelector(".card");

let cardWidth = card.offsetWidth + 16; // card width + margin

next.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  // checkButtons();
});

prev.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  // checkButtons();
});

function ClickOnBasket(){
  window.location.href = "http://localhost:3000/addedbasket/";
}
function addToFavourite(){
  window.location.href = "http://localhost:3000/addedfavourite";
}

        const openBtn = document.getElementById("openModal");
        const modal = document.getElementById("modal");
        const closeBtn = document.getElementById("closeModal");
        const mainContent = document.getElementById("main-content");
        const signUpForm = document.getElementById("signupForm");
        const signInForm2 = document.getElementById("signUpForm-2");

        function toggleForms(){
          let users = JSON.parse(localStorage.getItem("SignUpUser")) || [];
          if(users.length > 0){
            signUpForm.style.display = "none";
            signInForm2.style.display = "block";
          }else{
            signUpForm.style.display = "block";
            signInForm2.style.display = "none";
          }
        }
        openBtn.addEventListener("click", () => {
          modal.style.display = "flex";
          toggleForms();
          if (mainContent) mainContent.classList.add("blur");
        });
        
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
          if (mainContent) mainContent.classList.remove("blur");
        });

        signUpForm.addEventListener("submit", (e) => {
          e.preventDefault();

          const userData = {
            userName: document.getElementById("userName").value,
            userEmail: document.getElementById("userEmail").value,
            userPassword: document.getElementById("userPassword").value,
          };

         let users = JSON.parse(localStorage.getItem("SignUpUser")) || [];
          const userExists = users.find(u => u.userEmail === userData.userEmail);
          if (userExists) {
            alert("Email is already registered!");
            return;
          }

          users.push(userData);
          localStorage.setItem("SignUpUser", JSON.stringify(users));

          alert("Signup successful!");
          signUpForm.reset();
          toggleForms();
          modal.style.display = "none";
          if (mainContent) mainContent.classList.remove("blur");
        });

        // for sign in form
        signInForm2.addEventListener("submit", (e) => {
          e.preventDefault();

          const userData2 = {
            userEmail2: document.getElementById("userEmail2").value,
            userPassword2: document.getElementById("userPassword2").value,
          }
          let users = JSON.parse(localStorage.getItem("SignUpUser")) || [];

          const signupExistData = users.find(u => 
  u.userEmail === userData2.userEmail2 && 
  u.userPassword === userData2.userPassword2
);
          if (signupExistData) {
            alert(`Welcome back, ${signupExistData.userName}!`);
            modal.style.display = "none";
            if(mainContent) mainContent.classList.remove("blur");
          } else {
            alert("Invalid Email Or Password");
          }
          signInForm2.reset();
        });
        