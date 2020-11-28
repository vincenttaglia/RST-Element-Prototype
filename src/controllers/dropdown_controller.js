import { Controller } from "stimulus"
import {useClickOutside} from "stimulus-use";
import {enter, leave} from "el-transition";

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
        enter(this.viewTarget);
    }

    close(){
        this.isOpen = false;
        leave(this.viewTarget);
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