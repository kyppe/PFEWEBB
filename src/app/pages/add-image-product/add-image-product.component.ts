import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ClientService } from "app/services/client.service";
import { ProduitService } from "app/services/produit.service";

@Component({
  selector: "app-add-image-product",
  templateUrl: "./add-image-product.component.html",
  styleUrls: ["./add-image-product.component.css"],
})
export class AddImageProductComponent implements OnInit {
  selectedFiles: any[] = [];

  constructor(private cdr: ChangeDetectorRef, public servce: ProduitService) {}

  ngOnInit(): void {}

  async onFileSelected(event: any) {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const preview = await this.readFile(file);
      console.log("File preview:", preview);

      this.selectedFiles.push({
        file: file,
        preview: preview,
        name: file.name,
      });

      console.log("Selected files:", this.selectedFiles);
    }

    this.cdr.detectChanges();
  }

  readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  removeFile(file: any) {
    this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
    console.log("Files after removal:", this.selectedFiles);
    this.cdr.detectChanges();
  }
  save() {
    let formData: FormData = new FormData();

    // Loop through each selected file and append it to the FormData object
    for (let file of this.selectedFiles) {
      formData.append("files", file.file, file.name);
    }
    this.servce.addImage(formData).subscribe((data) => {
      console.log(data);
    });
    this.selectedFiles=[]
  }
}
