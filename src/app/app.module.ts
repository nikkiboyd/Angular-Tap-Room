import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TapRoomComponent } from './tap-room/tap-room.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { EmptinessPipe } from './emptiness.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TapRoomComponent,
    EditKegComponent,
    NewKegComponent,
    EmptinessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
