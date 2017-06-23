import $ from 'jquery';

class MobileMenu {
    constructor() {

        this.menuIcon = $(".mobile-menu__menu-icon");
        this.menuContent = $(".mobile-menu__menu-content");
        this.opaqueScreen = $(".mobile-menu__opaque-screen");
        this.events();
    }
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass("mobile-menu__menu-content--is-visible");
        this.menuIcon.toggleClass("mobile-menu__menu-icon--close-x");
        this.opaqueScreen.toggleClass("mobile-menu__opaque-screen--is-visible");
    }
}
    
export default MobileMenu;