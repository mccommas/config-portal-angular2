import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { HttpService } from './../../shared/services/http.service';
import { ConstantService } from './../../shared/services/constant.service';
declare var jQuery: any;
@Component({
  selector: 'app-navigation',
  providers: [NavigationService, ConstantService, HttpService],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  public casListItems: any[];
  public applicationListItems: any[];
  public organizationListItems: any[];

  public selectedCASItem: any;
  public selectedAppItem: any;
  public selectedOrgItem: any;

  public casNameSelected: string;
  public appNameSelected: string;

  public isLogoVisible: boolean = true;
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.renderCASList();
  }
  public renderCASList(): void {
    this.navigationService.getCasList().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.casListItems = data;
        } else {

        }
      });
  }
  public renderApplicationList(): void {
    this.navigationService.getApplicationList().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.applicationListItems = data;
        } else {

        }
      });
  }
  public renderOrganizationList(): void {
    this.navigationService.getOrganizationList().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.organizationListItems = data;
        } else {

        }
      });
  }

  public selectedItem(Item, key, value): void {
    var navigtionMain = this;
    jQuery("#item_" + Item.id).parent("div").append("<p class='activated_p' style='position: fixed; margin-top: -36px; z-index: 9999; width: 256px;color: #fff !important;padding: 10px 5px 10px 20px;'>" + value + "</p>");
    if (jQuery(".activated_p").length) {
      var dis = jQuery(".activated_p").offset().top;
      dis = 0 - dis - 0;
    } else {
      dis = 0;
    } 
    jQuery(".activated_p").animate({
      "margin-top": dis,
      "opacity": ".7",
      // "transition": "opacity 5s linear"
    }, 'slow', function () {
      jQuery('.topLinkStyle span').each(function (i, ele) {
        if (this.id == key) {
          jQuery(this).removeClass('animated bounceIn');
          jQuery(this).addClass('animated bounceIn');
        }
      });
      jQuery(".activated_p").remove();

      //Switch Start
      switch (key) {
        case "casName":
          navigtionMain.selectedCASItem = Item;
          navigtionMain.casNameSelected = Item.casname;
          navigtionMain.casListItems = null;
          navigtionMain.isLogoVisible = false;
          navigtionMain.renderApplicationList();
          break;
        case "appName":
          navigtionMain.selectedAppItem = Item;
          navigtionMain.appNameSelected = Item.instanceName;
          navigtionMain.applicationListItems = null;
          navigtionMain.renderOrganizationList();
          // $rootScope.applicationId = Item.id;
          break;
        case "orgName":
          navigtionMain.selectedOrgItem = Item;
          // this.currentList = "program";
          break;
      }
      //Switch Ends
    });
  }
}
