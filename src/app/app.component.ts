import { Component, InjectionToken, OnInit } from '@angular/core';

import { NbThemeService, NbThemeOptions  } from "@nebular/theme";

export const THEME_OPTIONS_TOKEN = new InjectionToken<NbThemeOptions>('Custom Theme Options');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NbThemeService]
})
export class AppComponent implements OnInit {
    title = 'Kirbys TicTacToe';

    // constructor(private themeService: NbThemeService, @Inject(THEME_OPTIONS_TOKEN) private themeOptions: NbThemeOptions) {}
    constructor(private themeService: NbThemeService) {}
  
    ngOnInit() {
        //   this.themeService.changeTheme(this.themeOptions.name);
        this.themeService.changeTheme("cosmic");
        console.log("Initialised")
    }
  }
