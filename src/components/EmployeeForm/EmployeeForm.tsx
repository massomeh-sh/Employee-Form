import type {JSX} from 'react';
import {FaCircleUser} from "react-icons/fa6";
import {FaChevronDown} from "react-icons/fa";
import Icon from "./Icon.tsx";
import Input from "./Input.tsx";
import Selector from "./Selector.tsx";
import {departmentOptions, locationOptions} from "../../types/employeeForm.ts";
import Radio from "./Radio.tsx";
import Checkbox from "./Checkbox.tsx";
import TextArea from "./TextArea.tsx";
import Button from "../Button.tsx";


function EmployeeForm(): JSX.Element {
    return (
        <div className="bg-background min-h-screen w-full">
            <div className="py-10 px-20">
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
                    <Input label="FullName" placeholder="Enter full name"/>
                    <Input label="Email" type="email" placeholder="Enter email address"/>
                    <Input label="Phone Number" type="tel" placeholder="Enter phone number"/>
                    <Selector label="Department" options={departmentOptions}/>
                    <Input label="Position" placeholder="Enter position"/>
                    <Input label="Salary" type="number" placeholder="Enter Salary"/>
                    <Input label="Date joined" type="date"/>
                    <div>
                        <label className="text-lg md:text-2xl block mb-7 font-medium">Employment Type</label>
                        <div className="flex gap-6 flex-wrap">
                            <Radio label="Full-time"/>
                            <Radio label="Part-time"/>
                            <Radio label="Contract"/>
                        </div>
                    </div>
                    <Selector label="Work Location" options={locationOptions}/>
                    <Checkbox label="Works Remotely" checkboxName="Remote"/>
                    <div className="col-span-full md:col-span-2">
                        <TextArea label="Skills" placeholder="Enter skills (comma separated)"/>
                    </div>
                    <div className="col-span-full border-b border-light-grey py-8">
                        <TextArea label="Notes" placeholder="Additional notes about the employee"/>
                    </div>
                    <div className="flex gap-4 col-span-full justify-self-end">
                        <Button textBtn="Cancel" isSaveBtn={false}/>
                        <Button textBtn="Save Employee" isSaveBtn={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;