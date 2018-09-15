import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CakeComponent } from './cake/cake.component';
// import { EditComponent } from './edit/edit.component';  This is where nested components go

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent
    // EditComponent   again with nested components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
