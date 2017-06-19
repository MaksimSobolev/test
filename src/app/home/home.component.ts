import { Component, OnInit } from "@angular/core";
// Import FormBuilder and FormGroup modules for using data-driven forms
import { FormBuilder, FormGroup } from "@angular/forms";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    // define users variable
    users: User[];
    // define userForm variable as FormGroup
    userForm: FormGroup;

    constructor(
        // Add method which using FormBuilder class to build data-driven form
        private formBuilder: FormBuilder,
        private userService: UsersService
    ) {
        this.users = this.userService.getUsers();
    }

    // Method which will be called on form submit
    onSubmit(e: Event, form: FormGroup) {
        // e.preventDefault() to disable of page reloading after submit
        e.preventDefault();
        // Added variable user as form value to push new user
        let user: User = form.value;
        this.userService.addUser(user);
    }

    // Added building of data-driven form in OnInit method
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: [null],
            lastName: [null],
            email: [null],
            age: [null]
        })
    }

}
