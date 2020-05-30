import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-y2020-m05-d23',
  templateUrl: './page-y2020-m05-d23.component.html',
  styleUrls: ['./page-y2020-m05-d23.component.scss']
})
export class PageY2020M05D23Component implements OnInit {
  htmlCode = `
  <div class="e2020-05-23">
    <div class="e2020-05-23-main">
      <div class="e2020-05-23-main-container">
        <div class="e2020-05-23-main-container-item">
        </div>
      </div>
      <div class="e2020-05-23-main-container-background">
        <div class="e2020-05-23-main-container-background-item">
        </div>
      </div>
      <div class="e2020-05-23-main-container-text">
        <p class="e2020-05-23-main-container-text-p">
          止まれ
        </p>
      </div>
    </div>
  </div>
  `
  cssCode =
  `@mixin center-postion($zIndex){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: #{$zIndex};
  }

  @mixin under-triangle($color){
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #{$color} transparent transparent transparent;
    border-width: 200px 110px 0 110px;
    border-radius: 5px;
  }

  .e2020-05-23{
    width: 100%;
    height: 100%;
    background: gray;
    &-main{
      width: 100%;
      height: 100%;
      position: relative;
    }
    &-main-container{
      @include center-postion(5);
      &-item{
        @include under-triangle(red);
      }
    }
    &-main-container-background{
      @include center-postion(4);
      &-item{
        @include under-triangle(white);
        transform:scale(1.15,1.1);
      }
    }
    &-main-container-text{
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      z-index: 6;
      &-p{
        color: white;
        font-size: 36px;
      }
    }
  }`
  constructor() { }

  ngOnInit(): void {
  }

}
