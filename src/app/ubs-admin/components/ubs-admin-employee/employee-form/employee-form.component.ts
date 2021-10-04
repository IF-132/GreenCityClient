import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UbsAdminEmployeeService } from '../../../services/ubs-admin-employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Page } from '../../../models/ubs-admin.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  locations;
  roles;
  employeeForm: FormGroup;
  employeePositions;
  receivingStations;
  phoneMask = '{+38} (000) 00 000 00';
  dragOver = false;
  imageURL: string;
  imageName = 'Your Avatar';
  selectedFile;
  defaultPhotoURL = 'https://csb10032000a548f571.blob.core.windows.net/allfiles/90370622-3311-4ff1-9462-20cc98a64d1ddefault_image.jpg';

  ngOnInit() {
    this.employeeService.getAllPositions().subscribe(
      (roles) => {
        this.roles = roles;
      },
      (error) => console.error('Observer for role got an error: ' + error)
    );
    this.employeeService.getAllStations().subscribe(
      (locations) => {
        this.locations = locations;
      },
      (error) => console.error('Observer for stations got an error: ' + error)
    );
  }

  constructor(
    private employeeService: UbsAdminEmployeeService,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Page
  ) {
    this.employeeForm = this.fb.group({
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      phoneNumber: [this.data.phoneNumber, Validators.required],
      email: [this.data.email]
    });
    this.employeePositions = this.data.employeePositions ?? [];
    this.receivingStations = this.data.receivingStations ?? [];
    this.imageURL = this.data.image;
  }

  get isUpdatingEmployee() {
    console.log(!(Object.keys(this.data).length === 0));
    return !(Object.keys(this.data).length === 0);
  }

  get isCreatingEmployee() {
    return !this.isUpdatingEmployee;
  }

  get userHasDefaultPhoto() {
    return this.imageURL === this.defaultPhotoURL;
  }

  findRole(id: number): number {
    return this.employeePositions.findIndex((role) => {
      return role.id === id;
    });
  }

  onCheckChangeRole(role) {
    if (this.doesIncludeRole(role)) {
      const removeIndex = this.findRole(role.id);
      this.employeePositions.splice(removeIndex, 1);
      return;
    }
    this.employeePositions.push(role);
  }

  doesIncludeRole(role) {
    return this.employeePositions.some((existingRole) => existingRole.id === role.id);
  }

  findLocation(id: number): number {
    return this.receivingStations.findIndex((location) => {
      return location.id === id;
    });
  }

  onCheckChangeLocation(location) {
    if (this.doesIncludeLocation(location)) {
      const removeIndex = this.findLocation(location.id);
      this.receivingStations.splice(removeIndex, 1);
      return;
    }
    this.receivingStations.push(location);
  }

  doesIncludeLocation(location): boolean {
    return this.receivingStations.some((station) => location.id === station.id);
  }

  prepareEmployeeDataToSend(dto: string): FormData {
    const phoneNumber = this.employeeForm.value.phoneNumber;
    // this.employeeForm.value.phoneNumber = phoneNumber.slice(1);
    const employeeDataToSend = {
      ...this.employeeForm.value,
      image: this.imageURL || this.defaultPhotoURL,
      employeePositions: this.employeePositions,
      receivingStations: this.receivingStations
    };
    if (this.isUpdatingEmployee) {
      employeeDataToSend.id = this.data.id;
    }
    const formData: FormData = new FormData();
    const stringifiedDataToSend = JSON.stringify(employeeDataToSend);
    formData.append(dto, stringifiedDataToSend);
    return formData;
  }

  updateEmployee() {
    const dataToSend = this.prepareEmployeeDataToSend('employeeDto');
    // dataToSend.append('image', this.selectedFile);
    this.employeeService.updateEmployee(dataToSend).subscribe(() => {
      this.dialogRef.close();
    });
  }

  createEmployee() {
    const dataToSend = this.prepareEmployeeDataToSend('addEmployeeDto');
    this.employeeService.postEmployee(dataToSend).subscribe(() => {
      this.dialogRef.close();
    });
  }

  treatFileInput(event: Event) {
    this.dragOver = false;
    event.preventDefault();

    const reader = new FileReader();
    this.selectedFile = (event.target as HTMLInputElement).files[0];
    this.imageName = this.selectedFile.name;

    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imageURL = reader.result as string;
      console.log(reader);
    };
  }

  cancelDefault(e: DragEvent) {
    e.preventDefault();
  }

  removeImage() {
    if (this.isCreatingEmployee || this.userHasDefaultPhoto) {
      this.imageURL = null;
      this.imageName = null;
      return;
    }
    console.log(this.data.id);
    this.employeeService.deleteEmployeeImage(this.data.id).subscribe(() => {
      this.imageURL = this.defaultPhotoURL;
      this.imageName = null;
    });
  }
}