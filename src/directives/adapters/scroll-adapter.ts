import { IonAffixContainer } from '../ion-affix-container';
import { Scroll } from 'ionic-angular';
import { Observable, fromEvent } from 'rxjs';
import { map, pairwise, tap } from 'rxjs/operators';

/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
export class ScrollAdapter implements IonAffixContainer {

    scrollingDown = false;

    constructor(public scroll: Scroll) {
    }

    onScroll(): Observable<any> {
        return fromEvent(this.scroll._scrollContent.nativeElement, 'scroll')
            .pipe(
                map(() => this.getScrollTop()),
                pairwise(),
                tap((scrollTops) => this.scrollingDown = scrollTops[0] - scrollTops[1] < 0)
            );
    }

    getClientTop(): number {
        return 0;
    }

    getOffsetTop(): number {
        return this.getClientTop();
    }

    getScrollTop(): number {
        return this.scroll._scrollContent.nativeElement.scrollTop;
    }

    appendFixedHeader(headerElement: any): void {
        this.scroll._scrollContent.nativeElement.parentElement.appendChild(headerElement);
    }

    isScrollingDown(): boolean {
        return this.scrollingDown;
    }
}
