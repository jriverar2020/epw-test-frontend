import { http } from "./http";

export type Departament = {
    id: number;
    name: string;
};

export type CreateDepartamentDto = {
    id: number;
    name: string;
};

export type UpdateDepartamentrDto = Partial<CreateDepartamentDto>;

export const departamentsApi = {

    list: () => http<Departament[]>("/departments"),

    create: (dto: CreateDepartamentDto) =>
        http<Departament>("/departments", { method: "POST", body: JSON.stringify(dto) }),

    update: (id: number, dto: UpdateDepartamentrDto) =>
        http<Departament>(`/departments/${id}`, {
            method: "PATCH", body: JSON.stringify(dto)
        }),

    remove: (id: number) => http<void>(`/departments/${id}`, { method: "DELETE" }),
};