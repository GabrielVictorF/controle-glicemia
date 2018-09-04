import { NgModule } from '@angular/core';
import { TurnoPipe } from './turno/turno';
import { DataPipe } from './data/data';

@NgModule({
	declarations: [TurnoPipe, DataPipe],
	imports: [],
	exports: [TurnoPipe, DataPipe]
})
export class PipesModule {}
