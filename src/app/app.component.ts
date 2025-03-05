// file này  chứa cấu hình, template và logic xử lý chính của toàn bộ ứng dụng.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // template dùng để chèn thuộc tính html cụ thể còn có thêm "Url" -> chèn 1 file html
  styleUrl: './app.component.scss', // Style cũng tương tự
})
export class AppComponent {
  // Class của typesript, có thể có constructor và getter hay setter
  title = 'shopapp';
}
