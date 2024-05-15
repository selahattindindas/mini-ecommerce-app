import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Heart, Search, ShoppingCart, User } from 'angular-feather/icons';

const icons = {
  Heart,
  User,
  ShoppingCart,
  Search
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
