import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/AllPeopleDto";
import { Person } from "../../entities/Person";



export interface PeopleRepository {
    getPeople(payload : number): Promise<ResponseApi<AllPeopleDto>>;

    insertPeople(payload : Person): Promise<ResponseApi<Person>>;
    
}