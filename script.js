 function changeTheme() {
        let body = document.querySelector("body");
        if (body.classList.contains("darky")) {
          body.classList.remove("darky");
        } else {
          body.classList.add("darky");
        }
      }
      let themeButton = document.querySelector(".darkness");
      themeButton.addEventListener("click", changeTheme);
