import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormDataService {
    private data: any = null;
    set(form: any) { this.data = form; }
    get() {return this.data}
}