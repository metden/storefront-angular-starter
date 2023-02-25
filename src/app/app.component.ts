import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { StateService } from './core/providers/state/state.service';
import { DataService } from './core/providers/data/data.service';
import { GET_COLLECTIONS } from './common/graphql/documents.graphql';
import { GetCollectionsQuery, GetCollectionsQueryVariables } from './common/generated-types';

@Component({
    selector: 'vsf-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    cartDrawerVisible$: Observable<boolean>;
    mobileNavVisible$: Observable<boolean>;
    isHomePage$: Observable<boolean>;
    topCollections$: Observable<GetCollectionsQuery['collections']['items']>;

    navigation = {
        support: [
            {name: 'راهنما', href: '#'},
            {name: 'پیگیری سفارش', href: '#'},
            {name: 'حمل و نقل', href: '#'},
            {name: 'برگشت کالا  ', href: '#'},
        ],
        company: [
            {name: 'درباره', href: '#'},
            {name: 'بلاگ', href: '#'},
            {name: 'مسئولیت اجتماعی شرکتی', href: '#'},
            {name: 'مطبوعات', href: '#'},
        ],
    };

    constructor(private router: Router,
                private stateService: StateService,
                private dataService: DataService) {
    }

    ngOnInit(): void {
        this.cartDrawerVisible$ = this.stateService.select(state => state.cartDrawerOpen);
        this.mobileNavVisible$ = this.stateService.select(state => state.mobileNavMenuIsOpen);
        this.isHomePage$ = this.router.events.pipe(
            filter<any>(event => event instanceof RouterEvent),
            map((event: RouterEvent) => event.url === '/'),
        );
        this.topCollections$ = this.dataService.query<GetCollectionsQuery, GetCollectionsQueryVariables>(GET_COLLECTIONS).pipe(
            map(({collections}) => collections.items.filter(c => c.parent?.name === '__root_collection__'))
        );
    }

    openCartDrawer() {
        this.stateService.setState('cartDrawerOpen', true);
    }

    closeCartDrawer() {
        this.stateService.setState('cartDrawerOpen', false);
    }
}
