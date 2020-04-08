import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './sharedComponents/site-header/site-header.component';
import { SiteFooterComponent } from './sharedComponents/site-footer/site-footer.component';
import { IndexComponent } from './pages/index/index.component';
import { SliderComponent } from './pages/index/slider/slider.component';
import { SpecialProductComponent } from './pages/index/special-product/special-product.component';
import { NewProductComponent } from './pages/index/new-product/new-product.component';
import { FavoriteProductComponent } from './pages/index/favorite-product/favorite-product.component';
import { LatestNewsComponent } from './pages/index/latest-news/latest-news.component';
import { BrandComponent } from './pages/index/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    IndexComponent,
    SliderComponent,
    SpecialProductComponent,
    NewProductComponent,
    FavoriteProductComponent,
    LatestNewsComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
