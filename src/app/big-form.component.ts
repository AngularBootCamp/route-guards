import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder
} from '@angular/forms';

import { FormDeactivateCheck } from './form-deactive.guard';

@Component({
  selector: 'app-big-form',
  templateUrl: './big-form.component.html'
})
export class BigFormComponent implements FormDeactivateCheck {
  bigFormGroup: FormGroup<{
    importantInfo: FormControl<string>;
  }>;
  savedFormValue: any;

  constructor(fb: NonNullableFormBuilder) {
    this.bigFormGroup = fb.group({
      importantInfo: ['This is important information!']
    });

    this.savedFormValue = this.bigFormGroup.value;
  }

  hasUnsavedChanges() {
    return this.bigFormGroup.dirty;
  }

  saveChanges() {
    this.savedFormValue = this.bigFormGroup.value;
    this.bigFormGroup.reset(this.bigFormGroup.value);
  }

  discardChanges() {
    this.bigFormGroup.reset(this.savedFormValue);
  }
}
