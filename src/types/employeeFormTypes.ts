export type DepartmentOptionsType = "Engineering" | "Design" | "Marketing" | "Sales" | "HR";

export const departmentOptions: DepartmentOptionsType[] = ["Engineering", "Design", "Marketing", "Sales"];

export type LocationOptionsType = "Germany" | "United States" | "Canada" | "France" | "Japan" | "Iran";

export const locationOptions: LocationOptionsType[] = ["Germany", "United States", "Canada", "France", "Japan", "Iran"];

export type EmployeeFormData = {
    name: string;
    email: string;
    phoneNumber: string;
    department: string;
    position: string;
    salary: string;
    date: string;
    employeeType: string;
    location: string;
    isRemote: boolean;
    skills: string;
    notes: string;
}
