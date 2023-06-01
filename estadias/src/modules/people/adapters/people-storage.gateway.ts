import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { PeopleRepository } from "../use-cases/ports/people.repository";

import api from "@/config/https-client.gateway";
import { Person } from "../entities/Person";

export class PeopleStorageGateway implements PeopleRepository {

    async insertPeople(payload: Person): Promise<ResponseApi<Person>> {
        const response = await api.doPost('/users', payload);
        return {
            status: response.status,
            entity: response.data,
            result: true
        } as ResponseApi<Person>;
    }
    
    async getPeople(page: number): Promise<ResponseApi<AllPeopleDto>> {
        const response = await api.doGet(`/users?page=${page}`);
        return {
            status: response.status,
            entity: response.data,
            result: true
        } as ResponseApi<AllPeopleDto>;
    }

}