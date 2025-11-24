import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DigiFormDataAService {
    private data: any = null;
    set(form: any) { this.data = form; }
    get() {return this.data}
}