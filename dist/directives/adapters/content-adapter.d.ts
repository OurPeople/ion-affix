import { IonAffixContainer } from '../ion-affix-container';
import { Content } from 'ionic-angular';
import { Observable } from 'rxjs';
/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
export declare class ContentAdapter implements IonAffixContainer {
    content: Content;
    constructor(content: Content);
    onScroll(): Observable<any>;
    getClientTop(): number;
    getOffsetTop(): number;
    getScrollTop(): number;
    appendFixedHeader(headerElement: any): void;
    isScrollingDown(): boolean;
}
