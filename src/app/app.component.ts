import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ContactSupportFormComponent } from './contact-support-form/contact-support-form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactSupportFormComponent],
  template: `
    <main>
      <header>
      </header>
      <section class="content">
        <app-contact-support-form></app-contact-support-form>
      </section>
    </main>
  `,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'contact-support'
}
