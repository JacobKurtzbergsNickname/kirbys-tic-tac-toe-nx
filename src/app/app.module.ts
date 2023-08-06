import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule, NbButtonModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { BoardComponent } from "./board/board.component";
import { SquareComponent } from "./square/square.component";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        BoardComponent, 
        SquareComponent, 
        AppComponent

    ],
    imports: [
        NbThemeModule.forRoot({ name: "cosmic" }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbButtonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NxWelcomeComponent, 
        RouterModule, 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }