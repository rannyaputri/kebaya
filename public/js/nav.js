const createNav = () => {
      let nav = document.querySelector('.navbar');

      nav.innerHTML = `
            <div class="nav">
                  <img src="images/logo6.png" class="brand-logo" alt="">
                  <div class="nav-items">
                        <div class="search">
                              <input type="text" class="search-box" placeholder="Temukan kebaya impian Anda di sini...">
                              <button class="search-btn">search</button>
                        </div>
                        <a>
                              <img src="images/profil1.png" id="user-img" alt="">
                              <div class="login-logout-popup hide">
                                    <p class="account-info">Log In as, Name</p>
                                    <button class="btn" id="user-btn">Log Out</button>
                              </div>
                        </a>
                        <a href="#">
                              <img src="images/cart.png" alt=""></a>
                  </div>
            </div>
            <ul class="links-container">
                  <li class="link-item"><a href="#" class="link">Home</a></li>
                  <li class="link-item"><a href="#" class="link">Collection</a></li>
                  <li class="link-item"><a href="#" class="link">Catalog</a></li>
                  <li class="link-item"><a href="#" class="link">About Us</a></li>
                  <li class="link-item"><a href="#" class="link">Sign Up</a></li>
            </ul>
            `;
}
createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
      userPopup.classList.toggle('hide');
})

window.onload = () => {
      let user = JSON.parse(sessionStorage.user || null);
      if (user != null) {
            //means user is logged in
            popuptext.innerHTML = `sign in as, ${user.name}`;
            actionBtn.innerHTML = `sign out`;
            actionBtn.addEventListener('click', () => {
                  sessionStorage.clear();
                  location.reload();
            })
      } else {
            //user is logged out 
            popuptext.innerHTML = `sign in untuk menyewa kebaya`;
            actionBtn.innerHTML = `sign in`;
            actionBtn.addEventListener(`click`, () => {
                  location.href = '/login';
            })
      }
}