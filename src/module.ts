import { NgModule, APP_INITIALIZER } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Config } from 'ionic-angular/config/config';

import { ImageViewerDirective } from './image-viewer.directive';
import { ImageViewerComponent } from './image-viewer.component';
import { registerCustomTransitions } from './image-viewer-transitions';

@NgModule({
	imports: [IonicModule],
	declarations: [
		ImageViewerComponent,
		ImageViewerDirective
	],
	exports: [ ImageViewerDirective ],
	entryComponents: [ ImageViewerComponent ],
	providers: [
		{ provide: APP_INITIALIZER, useFactory: registerCustomTransitions, deps: [ Config ], multi: true }
	]
})
export class IonicImageViewerModule {}
