import {type JSX, useState} from 'react';
import {FaCircleUser} from "react-icons/fa6";
import {FaChevronDown} from "react-icons/fa";
import Icon from "./Icon.tsx";
import Input from "./Input.tsx";
import Selector from "./Selector.tsx";
import {departmentOptions, type EmployeeFormData, locationOptions} from "../../types/employeeFormTypes.ts";
import Radio from "./Radio.tsx";
import Checkbox from "./Checkbox.tsx";
import TextArea from "./TextArea.tsx";
import Button from "../Button.tsx";
import * as React from "react";
import {
    hasMinLength,
    isEmail,
    isNotEmpty,
    isPhoneNumber,
    isPositiveNumber,
    isSelected
} from "../../utils/validateFn.ts";


const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    position: "",
    salary: "",
    date: "",
    employeeType: "",
    location: "",
    isRemote: false,
    skills: "",
    notes: ""
}

const initialValidateData = {
    name: false,
    email: false,
    phoneNumber: false,
    department: false,
    position: false,
    salary: false,
    date: false,
    employeeType: false,
    location: false,
    isRemote: false,
    skills: false,
    notes: false,
}


function EmployeeForm(): JSX.Element {

    const [formData, setFormData] = useState<EmployeeFormData>(initialFormData);
    const [didEdit, setDidEdit] = React.useState(initialValidateData);

    function validateForm(formData: EmployeeFormData) {
        return {
            name: !isNotEmpty(formData.name),
            email: !isEmail(formData.email),
            phoneNumber: (!hasMinLength(formData.phoneNumber, 12) || !isPhoneNumber(formData.phoneNumber)),
            department: !isSelected(formData.department),
            position: !isNotEmpty(formData.position),
            salary: !isPositiveNumber(formData.salary),
            date: !isNotEmpty(formData.date),
            employeeType: !isSelected(formData.employeeType),
            location: !isSelected(formData.location),
            skills: !isNotEmpty(formData.skills),
            notes: false,
        }
    }

    const errors = validateForm(formData);

    function handleChange(identifier: keyof EmployeeFormData, value: string | boolean): void {
        setFormData((pre) => ({...pre, [identifier]: value}));
        setDidEdit((prev) => ({...prev, [identifier]: false}));
    }

    function handleBlur(identifier: string) {
        setDidEdit((pre) => ({...pre, [identifier]: true}))
    }

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const allTouched = Object.fromEntries(Object.keys(didEdit).map(key => [key, true])) as typeof didEdit;
        setDidEdit(allTouched);

        const hasError = Object.values(errors).some(Boolean);

        if (hasError) {
            return;
        }
    }

    function handleResetForm(): void {
        setDidEdit(initialValidateData);
        setFormData(initialFormData);
    }

    return (
        <div className="bg-background min-h-screen w-full">
            <form noValidate onSubmit={handleSubmit} onReset={handleResetForm}
                  className="py-10 md:px-20 px-10">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-medium">Add Employee</h1>
                        <p className="text-lg md:text-2xl mt-1 text-light-grey">Fill in the details to add a new
                            employee</p>
                    </div>
                    <div className="flex gap-3 md:gap-5 items-center justify-center">
                        <Icon icon={FaCircleUser} clickable={false}/>
                        <p className="text-lg md:text-2xl font-medium text-dark-grey">Admin User</p>
                        <Icon icon={FaChevronDown} clickable={true}/>
                    </div>
                </div>
                <div
                    className="bg-white mt-10 p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
                    <Input hasError={didEdit.name && errors.name} errorMessage="Please enter a valid name"
                           onValueChange={handleChange} onValueBlur={handleBlur} value={formData.name} name="name"
                           label="FullName"
                           placeholder="Enter full name"/>
                    <Input hasError={didEdit.email && errors.email} errorMessage="Please enter a valid email"
                           onValueChange={handleChange} onValueBlur={handleBlur} value={formData.email} label="Email"
                           name="email" type="email"
                           placeholder="Enter email address"/>
                    <Input hasError={didEdit.phoneNumber && errors.phoneNumber}
                           errorMessage="Please enter a valid phoneNumber"
                           onValueChange={handleChange} onValueBlur={handleBlur} value={formData.phoneNumber}
                           label="Phone Number"
                           name="phoneNumber" type="tel" placeholder="Enter phone number"/>
                    <Selector hasError={didEdit.department && errors.department} errorMessage="Please select an option"
                              onValueChange={handleChange} onValueBlur={handleBlur} value={formData.department}
                              label="Department"
                              name="department" options={departmentOptions}/>
                    <Input hasError={didEdit.position && errors.position} errorMessage="Please enter a valid position"
                           onValueChange={handleChange} onValueBlur={handleBlur} value={formData.position}
                           label="Position" name="position"
                           placeholder="Enter position"/>
                    <Input hasError={didEdit.salary && errors.salary} errorMessage="Please enter a valid salary number"
                           onValueChange={handleChange} onValueBlur={handleBlur} value={formData.salary} label="Salary"
                           name="salary"
                           type="number" placeholder="Enter Salary"/>
                    <Input hasError={didEdit.date && errors.date} errorMessage="Please enter a valid date"
                           onValueChange={handleChange} onValueBlur={handleBlur} value={formData.date}
                           label="Date joined" name="date"
                           type="date"/>
                    <div>
                        <label className="text-lg md:text-2xl block mb-7 font-medium">Employment Type</label>
                        <div className="flex gap-x-6 flex-wrap">
                            <Radio onValueChange={handleChange} onValueBlur={handleBlur}
                                   selectedValue={formData.employeeType} label="Full-time"
                                   value="full-time"
                                   name="employeeType"/>
                            <Radio onValueChange={handleChange} onValueBlur={handleBlur}
                                   selectedValue={formData.employeeType}
                                   name="employeeType" value="part-time"
                                   label="Part-time"/>
                            <Radio onValueChange={handleChange} onValueBlur={handleBlur}
                                   selectedValue={formData.employeeType}
                                   name="employeeType" value="contract"
                                   label="Contract"/>
                        </div>
                        {didEdit.employeeType && errors.employeeType && (
                            <p className="text-red-500 text-sm lg:text-lg mt-8">Please choose an employee
                                type</p>
                        )}
                    </div>
                    <Selector hasError={didEdit.location && errors.location} errorMessage="Please choose a location"
                              onValueChange={handleChange} onValueBlur={handleBlur} value={formData.location}
                              label="Work Location"
                              name="location" options={locationOptions}/>
                    <Checkbox onValueChange={handleChange} onValueBlur={handleBlur} value={formData.isRemote}
                              label="Works Remotely"
                              checkboxName="Remote" name="isRemote"/>
                    <div className="col-span-full md:col-span-2">
                        <TextArea hasError={didEdit.skills && errors.skills} errorMessage="Please write a valid text"
                                  onChangeValue={handleChange} onValueBlur={handleBlur} value={formData.skills}
                                  name="skills" label="Skills"
                                  placeholder="Enter skills (comma separated)"/>
                    </div>
                    <div className="col-span-full border-b border-light-grey py-8">
                        <TextArea onChangeValue={handleChange} onValueBlur={handleBlur} value={formData.notes}
                                  isOptional={true}
                                  name="notes" label="Notes"
                                  placeholder="Additional notes about the employee"/>
                    </div>
                    <div className="flex gap-4 col-span-full justify-self-end">
                        <Button textBtn="Cancel" isSaveBtn={false}/>
                        <Button textBtn="Save Employee" isSaveBtn={true}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EmployeeForm;