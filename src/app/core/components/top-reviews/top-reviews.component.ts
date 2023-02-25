import {ChangeDetectionStrategy, Component} from '@angular/core';

interface Review {
    id: number;
    title: string;
    rating: number;
    content: string;
    author: string;
    date: string;
    datetime: string;
}

@Component({
    selector: 'vsf-top-reviews',
    templateUrl: './top-reviews.component.html',
    styleUrls: ['./top-reviews.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopReviewsComponent {
    reviews: Review[] = [
        {
            id: 1,
            title: 'عاشقش هستم!',
            rating: 5,
            content: `
<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>                 `,
            author: 'مینکو جی',
            date: '25 مهر 1401',
            datetime: '1401-08-25',
        },
        {
            id: 2,
            title: 'محصول شگفت‌انگیز',
            rating: 5,
            content: `
<p>به دلیل محدودیت کاراکتر، فقط بخشی از متن به فارسی ترجمه شده است.</p>                 `,
            author: 'میسکو ها',
            date: '24 مهر 1401',
            datetime: '1401-08-24',
        },
    ];
}
