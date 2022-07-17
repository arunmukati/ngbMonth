import { ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbComponent } from './ngb/ngb.component';
@Directive({
  selector: '[customNgbDatepicker]',
  exportAs: 'customNgbDatepicker'
})
export class CustomNgbDatepickerDirective {
  constructor(private _elRef: ElementRef<HTMLInputElement>,
    private _vcRef: ViewContainerRef, private _renderer: Renderer2,private resolver: ComponentFactoryResolver, private _changeDetector: ChangeDetectorRef,) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  _cRef: any;
  isOpen() { return !!this._cRef; }
  open() {
    if (!this.isOpen()) {
      let factory = this.resolver.resolveComponentFactory(NgbComponent);
      this._cRef = this._vcRef.createComponent(factory);
      this._applyPopupStyling(this._cRef.location.nativeElement);
      // this._applyDatepickerInputs(this._cRef.instance);
      // this._subscribeForDatepickerOutputs(this._cRef.instance);
      // this._cRef.instance.ngOnInit();
      // this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));

      // date selection event handling
      // this._cRef.instance.registerOnChange((selectedDate) => {
      //   this.writeValue(selectedDate);
      //   this._onChange(selectedDate);
      //   this._onTouched();
      // });

      // this._cRef.changeDetectorRef.detectChanges();

      // this._cRef.instance.setDisabledState(this.disabled);

      // if (this.container === 'body') {
      //   this._document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
      // }

      // focus handling
      // this._elWithFocus = this._document.activeElement;
      // ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
      // setTimeout(() => this._cRef?.instance.focus());

      let hostElement: HTMLElement;
      // if (isString(this.positionTarget)) {
      //   hostElement = this._document.querySelector(this.positionTarget);
      // } else if (this.positionTarget instanceof HTMLElement) {
      //   hostElement = this.positionTarget;
      // } else {
      //   hostElement = this._elRef.nativeElement;
      // }

      // Setting up popper and scheduling updates when zone is stable
      // this._ngZone.runOutsideAngular(() => {
      //   if (this._cRef) {
      //     this._positioning.createPopper({
      //       hostElement,
      //       targetElement: this._cRef.location.nativeElement,
      //       placement: this.placement,
      //       appendToBody: this.container === 'body',
      //       updatePopperOptions: addPopperOffset([0, 2])
      //     });

      //     this._zoneSubscription = this._ngZone.onStable.subscribe(() => this._positioning.update());
      //   }
      // });

      // if (this.positionTarget && !hostElement) {
      //   throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
      // }

      // this._setCloseHandlers();
    }
  }

  /**
   * Closes the datepicker popup.
   */
  close() {
    if (this.isOpen()) {
      this._vcRef.remove(this._vcRef.indexOf(this._cRef!.hostView));
      this._cRef = null;
      // this._positioning.destroy();
      // this._zoneSubscription?.unsubscribe();
      // this._destroyCloseHandlers$.next();
      // this.closed.emit();
      // this._changeDetector.markForCheck();

      // // restore focus
      // let elementToFocus: HTMLElement | null = this._elWithFocus;
      // if (isString(this.restoreFocus)) {
      //   elementToFocus = this._document.querySelector(this.restoreFocus);
      // } else if (this.restoreFocus !== undefined) {
      //   elementToFocus = this.restoreFocus as HTMLElement;
      // }

      // // in IE document.activeElement can contain an object without 'focus()' sometimes
      // if (elementToFocus && elementToFocus['focus']) {
      //   elementToFocus.focus();
      // } else {
      //   this._document.body.focus();
      // }
    }
  }
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  private _applyPopupStyling(nativeElement: any) {
    this._renderer.addClass(nativeElement, 'dropdown-menu');
    this._renderer.addClass(nativeElement, 'show');
  }

}
