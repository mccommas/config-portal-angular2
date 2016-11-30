import 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorsModule } from 'ng2-validators'
import { HttpModule } from '@angular/http';
import { UIRouter, UIRouterModule } from "ui-router-ng2";
import { ModalModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { MyUiRouterConfigService } from './shared/services/my-ui-router-config.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ApplicationComponent } from './pages/application/application.component';
import { CharactersPipe } from './shared/pipes/characters.pipe';

// Web dependencies
import 'jquery';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramsListComponent } from './pages/programs/programs-list/programs-list.component';
import { FixedTableHeaderDirective } from './shared/directives/fixed-table-header.directive';
import { ProgramEditComponent } from './pages/programs/program-edit/program-edit.component';
import { PopupDatepickerDirective } from './shared/directives/popup-datepicker.directive';
import { ClickOnceDirective } from './shared/directives/click-once.directive';
import { BackButtonDirective } from './shared/directives/back-button.directive';
// import { CKEditorModule } from 'ng2-ckeditor';
/** States */
//TODO move this declaration to seperate route file .
let casState = { name: 'cas', url: '/cas',  component: DashboardComponent };
let appState = { name: 'app', url: '/app',  component: ApplicationComponent };
let organizationState = { name: 'org', url: '/org',  component: OrganizationComponent };
let programsState = { name: 'programs', url: '/programs',  component: ProgramsComponent };
let programEditState = { name: 'programedit', url: '/programEdit',  component: ProgramEditComponent };

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OrganizationComponent,
    DashboardComponent,
    ApplicationComponent,
    CharactersPipe,
    ProgramsComponent,
    ProgramsListComponent,
    FixedTableHeaderDirective,
    ProgramEditComponent,
    PopupDatepickerDirective,
    ClickOnceDirective,
    BackButtonDirective 
  ],
  imports: [
    UIRouterModule.forRoot({ states: [casState, appState, organizationState, programsState, programEditState], useHash: true, configClass: MyUiRouterConfigService }),
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    DatepickerModule,
    ToasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
