import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class CrewComponent implements OnInit{

    public tabletMedia = window.matchMedia("(max-width: 1000px) and (min-width: 768px)");
    public mobileMedia = window.matchMedia("(max-width: 768px)");
    public desktopMedia = window.matchMedia("(min-width: 1000px)");

    ngOnInit(): void {
        this.verifyMediaDesktop(this.desktopMedia);
        this.desktopMedia.addListener(this.verifyMediaDesktop);

        this.verifyMediaTablet(this.tabletMedia);
        this.tabletMedia.addListener(this.verifyMediaTablet);

        this.verifyMediaMobile(this.mobileMedia);
        this.mobileMedia.addListener(this.verifyMediaMobile);

    }

    ngAfterViewInit(){
        window.scrollTo(0,0);
    }
    public verifyMediaTablet(x) {

        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/product/background-product-tablet.jpg')";
            document.getElementById('header').
            style.backgroundPosition = 'bottom';
        }
    }


    public verifyMediaMobile(x) {

        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/product/background-product-mobile.jpg')";
            document.getElementById('header').
            style.backgroundPosition = 'bottom';
        }
    }

    public verifyMediaDesktop(x){
        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/product/background-product-desktop.jpg')";
        }
    }
}