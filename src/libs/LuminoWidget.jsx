import { Widget } from "@lumino/widgets";

const returnTrue  = () => true;
const returnFalse = () => false;

export default class LuminoWidget extends Widget {
  constructor(id, name, mainRef, closable, node = LuminoWidget.createNode(id)) {
    super({ node });
    this.id = id;
    this.name = name;
    this.nodeRef = node;
    this.mainRef = mainRef;
    this.closable = closable;
    this.type = "lumino-widget";

    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass("content");

    this.title.label = name; // this sets the tab name
    this.title.closable = closable;
  }

  toJSON(){
    const { id, title } = this;
    return { id, title: title.label, type: "lumino-widget" };
  }

  static createNode(id) {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    return div;
  }

  onCloseRequest(msg) {
    // create custom event
    const event = new CustomEvent("lumino:deleted");
    // Override preventDefault and isDefaultPrevented as they
    // does not work well with custom events
    event.isDefaultPrevented = returnFalse;
    event.preventDefault = () => { event.isDefaultPrevented = returnTrue };
    // fire custom event to element
    this.nodeRef.dispatchEvent(event);
    // Detect event.preventDefault() is called
    if(!event.isDefaultPrevented()) super.onCloseRequest(msg);
  }

  onCloseRequestSingle(msg) {
    super.onCloseRequest(msg);
  }

  onResize (msg){
    // Lumino makes initial onResize call
    if(!this.__onreset_initialized) return this.__onreset_initialized = true;
    // return console.log("onActivateRequest", this.id, msg);
    // create custom event
    // console.log("onResize", this.id);
    const event = new CustomEvent("lumino:updated");
    event.isDefaultPrevented = returnFalse;
    event.preventDefault = () => { event.isDefaultPrevented = returnTrue };
    // fire custom event to parent element


    // console.log("lumino:updated", msg);
    this.mainRef.dispatchEvent(event);
    // continue with normal Widget behaviour
    super.onResize(msg);
  }

  onActivateRequest(msg) {
    // console.log("onActivateRequest");
    // return console.log("onActivateRequest", this.id, msg);
    // create custom event
    const event = new CustomEvent("lumino:updated");
    event.isDefaultPrevented = returnFalse;
    event.preventDefault = () => { event.isDefaultPrevented = returnTrue };
    // fire custom event to parent element


    // console.log("lumino:updated", msg);
    this.mainRef.dispatchEvent(event);
    // continue with normal Widget behaviour
    if(!event.isDefaultPrevented() && msg) super.onActivateRequest(msg);
    
  }


  // onAfterAttach     (msg){ console.log("onAfterAttach",     this.id, msg); }
  // onAfterDetach     (msg){ console.log("onAfterDetach",     this.id, msg); }
  // onAfterHide       (msg){ console.log("onAfterHide",       this.id, msg); }
  // onAfterShow       (msg){ console.log("onAfterShow",       this.id, msg); }
  // onBeforeAttach    (msg){ console.log("onBeforeAttach",    this.id, msg); }
  // onBeforeDetach    (msg){ console.log("onBeforeDetach",    this.id, msg); }
  // onBeforeHide      (msg){ console.log("onBeforeHide",      this.id, msg); }
  // onBeforeShow      (msg){ console.log("onBeforeShow",      this.id, msg); }
  // onChildAdded      (msg){ console.log("onChildAdded",      this.id, msg); }
  // onChildRemoved    (msg){ console.log("onChildRemoved",    this.id, msg); }

  // onActivateRequest (msg){ console.log("onActivateRequest", this.id, msg, this); }





  // onCloseRequest    (msg){ console.log("onCloseRequest",    this.id, msg); }
  // onFitRequest      (msg){ console.log("onFitRequest",      this.id, msg); }
  // onResize          (msg){ console.log("onResize",          this.id, msg); }



  getEventDetails() {
    return {
      detail: {
        // id: this.id,
        // name: this.name,
        // closable: this.closable,
      },
    };
  }
}
