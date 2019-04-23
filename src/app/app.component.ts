import { Component } from '@angular/core';
import { ConversionService } from './conversion/conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ConversionService]
})
export class AppComponent {
  title = 'project';

  constructor(private conversionService: ConversionService ) {
  }

  conversionList = null;

  ngOnInit() {
    this.conversionList = this.conversionService.listConversions();
  }

}
