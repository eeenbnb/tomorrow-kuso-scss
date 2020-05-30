import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-y2020-m05-d26',
  templateUrl: './page-y2020-m05-d26.component.html',
  styleUrls: ['./page-y2020-m05-d26.component.scss']
})
export class PageY2020M05D26Component implements OnInit {
  htmlCode = `
  <div class="e2020-05-26">
    <div class="e2020-05-26-thumbnail">
      <img class="e2020-05-26-thumbnail-img" src="assets/2020-05-26/IMG_0432.jpg">
    </div>

    <div class="e2020-05-26-contens">
      <div class="e2020-05-26-contens-title">
        <p class="e2020-05-26-contens-title-p">明日使えるクソSCSS</p>
      </div>

      <div class="e2020-05-26-contens-channel">
        <p class="e2020-05-26-contens-channel-p">クソSCSS放送局</p>
      </div>

      <div class="e2020-05-26-contens-sub-texts">
        <p class="e2020-05-26-contens-sub-texts-one">2回視聴</p>
        <p class="e2020-05-26-contens-sub-texts-one">36分前</p>
      </div>
    </div>

    <div class="e2020-05-26-option">
      <fa-icon [icon]="faEllipsisV" class="e2020-05-26-option-icon"></fa-icon>
    </div>
  </div>`;
  cssCode = `
  @mixin TextOverflow($line-count){
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: #{$line-count};
  }

  .e2020-05-26{
    width: 300px;
    display: grid;
    grid-template-columns: .8fr 1fr 24px;
    grid-gap: 0 8px;
  }

  .e2020-05-26-thumbnail{
    width: 100%;
    height: 100%;
    &-img{
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .e2020-05-26-contens{
    &-title{
      &-p{
        @include TextOverflow(2);
        margin: 0px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
      }
    }

    &-channel{
      &-p{
        @include TextOverflow(1);
        margin: 0px;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.6;
        color: gray;
      }
    }

    &-sub-texts{
      display: flex;
      flex-wrap: nowrap;
      &-one{
        &:not(:last-of-type):after{
          content: "・";
        }
        white-space: nowrap;
        margin: 0px;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.6;
        color: gray;
      }
    }
  }

  .e2020-05-26-option{
    &-icon{
      color: gray;
    }
  }

  `;

  constructor() { }

  ngOnInit(): void {
  }

}
