import { Controller } from "stimulus"
import {useClickOutside} from "stimulus-use";

export default class extends Controller {
    static targets = [ "view" ];
    isOpen;
    connect(){
        this.close()
        this.isOpen = false;
        useClickOutside(this, { element: this.viewElement })
    }

    open(){
        this.isOpen = true;
        this.viewTarget.classList.remove("hidden");
    }

    close(){
        this.isOpen = false;
        this.viewTarget.classList.add("hidden");
    }

    toggle(){
        if(this.isOpen)
            this.close()
        else
            this.open()
    }

    clickOutside(e){
        e.preventDefault();
        this.close();
    }

}